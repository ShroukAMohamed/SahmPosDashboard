import { Injectable, signal, computed, inject, effect } from '@angular/core';
import { LiveOrdersStore } from '../../live-orders/state/live-orders.store';
import { KitchenStation, PendingItem } from '../interfaces/kitchen-station.interface';
import { KitchenEvent } from '../interfaces/kitchen-event.interface';
import { KitchenMonitorService } from '../services/kitchen-monitor.service';
import { KitchenStatus } from '../types/kitchen-status.type';
import { NetworkService } from '../../../core/services/network.service';
import { ActivityTrackerService } from '../../../core/services/activity-tracker.service';

export interface AIInsight {
  id: string;
  type: 'warning' | 'info' | 'success' | 'error';
  icon: string;
  title: string;
  description: string;
}

export interface Alert {
  id: string;
  type: 'danger' | 'primary' | 'success';
  title: string;
  timeAgo: string;
  description: string;
  orderId?: string;
  acknowledged: boolean;
}

@Injectable({ providedIn: 'root' })
export class KitchenMonitorStore {
  private liveOrdersStore = inject(LiveOrdersStore);
  private kitchenService = inject(KitchenMonitorService);
  private networkService = inject(NetworkService);
  private activityTracker = inject(ActivityTrackerService);

  // We can track acknowledged alerts manually
  private readonly _acknowledgedAlertIds = signal<Set<string>>(new Set());
  private previouslyOverloaded = new Set<string>();

  readonly isLoading = this.liveOrdersStore.isLoading;
  readonly error = this.liveOrdersStore.error;
  readonly isSynced = this.networkService.isOnline;

  // Base constants for stations mapping
  private stationConfigs = [
    { id: 'st-1', name: 'Grill Station', icon: 'local_fire_department', maxCapacity: 20 },
    { id: 'st-2', name: 'Fryer Station', icon: 'opacity', maxCapacity: 20 },
    { id: 'st-3', name: 'Assembly', icon: 'view_in_ar', maxCapacity: 15 }
  ];

  // Derive stations workload from active orders
  readonly stations = computed<KitchenStation[]>(() => {
    // Only care about PREPARING orders for workload calculation
    const activeOrders = this.liveOrdersStore.preparingOrders();
    
    // We map product keywords or categories to stations.
    // For simplicity:
    // "Burger", "Patty" -> Grill
    // "Fries", "Rings", "Crispy" -> Fryer
    // Everything else goes to Assembly

    const stationsData: Record<string, { currentLoad: number, pending: PendingItem[] }> = {
      'st-1': { currentLoad: 0, pending: [] },
      'st-2': { currentLoad: 0, pending: [] },
      'st-3': { currentLoad: 0, pending: [] }
    };

    activeOrders.forEach(order => {
      order.items.forEach(item => {
        const name = item.name.toLowerCase();
        let sId = 'st-3'; // Default Assembly
        
        if (name.includes('burger') || name.includes('patty')) sId = 'st-1';
        if (name.includes('fries') || name.includes('rings') || name.includes('crispy')) sId = 'st-2';

        stationsData[sId].currentLoad += item.quantity;
        stationsData[sId].pending.push({
          name: item.name,
          count: item.quantity,
          time: 'Active',
          isWarning: order.urgency === 'CRITICAL' || order.urgency === 'URGENT'
        });
      });
    });

    return this.stationConfigs.map(config => {
      const data = stationsData[config.id];
      const loadPercentage = (data.currentLoad / config.maxCapacity) * 100;
      let status: KitchenStatus = 'NORMAL';
      if (loadPercentage > 85) status = 'OVERLOADED';
      else if (loadPercentage >= 60) status = 'WARNING';

      return {
        ...config,
        currentLoad: data.currentLoad,
        status,
        pendingItems: data.pending.slice(0, 5) // Show top 5 pending
      };
    });
  });

  // AI Insights derived from stations
  readonly insights = computed<AIInsight[]>(() => {
    const sts = this.stations();
    const insightsList: AIInsight[] = [];
    
    const overloaded = sts.filter(s => s.status === 'OVERLOADED');
    if (overloaded.length > 0) {
      insightsList.push({
        id: 'in-overload',
        type: 'error',
        icon: 'error',
        title: 'Bottleneck Detection',
        description: `${overloaded.map(s => s.name).join(', ')} identified as current bottleneck.`
      });
    }

    const warnings = sts.filter(s => s.status === 'WARNING');
    if (warnings.length > 0) {
      insightsList.push({
        id: 'in-warning',
        type: 'warning',
        icon: 'warning',
        title: 'Kitchen Load Warning',
        description: `${warnings.map(s => s.name).join(', ')} is approaching max capacity.`
      });
    }

    const urgentOrders = this.liveOrdersStore.orders().filter(o => o.status === 'RECEIVED' && o.urgency === 'CRITICAL');
    if (urgentOrders.length > 0) {
      insightsList.push({
        id: 'in-priority',
        type: 'info',
        icon: 'priority_high',
        title: 'Priority Change Recommendation',
        description: `Move Order ${urgentOrders[0].orderNumber} to PREPARING immediately.`
      });
    }

    if (insightsList.length === 0) {
      insightsList.push({
        id: 'in-success',
        type: 'success',
        icon: 'check_circle',
        title: 'Optimal Operations',
        description: 'All kitchen stations are operating within normal parameters.'
      });
    }

    return insightsList;
  });

  // Alerts computed from operational events and station overloads
  readonly alerts = computed<Alert[]>(() => {
    const sts = this.stations();
    const generatedAlerts: Alert[] = [];
    const ackIds = this._acknowledgedAlertIds();

    sts.filter(s => s.status === 'OVERLOADED').forEach(s => {
      const aId = `alert-overload-${s.id}`;
      generatedAlerts.push({
        id: aId,
        type: 'danger',
        title: `${s.name} Capacity Exceeded`,
        timeAgo: 'Just now',
        description: 'Expect delays on affected items.',
        acknowledged: ackIds.has(aId)
      });
    });

    sts.filter(s => s.status === 'WARNING').forEach(s => {
      const aId = `alert-warning-${s.id}`;
      generatedAlerts.push({
        id: aId,
        type: 'primary',
        title: `${s.name} Approaching Limit`,
        timeAgo: 'Just now',
        description: `Load steadily increasing. Currently at ${Math.round((s.currentLoad / s.maxCapacity) * 100)}% capacity.`,
        acknowledged: ackIds.has(aId)
      });
    });

    return generatedAlerts;
  });

  readonly activeAlertsCount = computed(() => 
    this.alerts().filter(a => !a.acknowledged).length
  );

  // Actions
  acknowledgeAlert(id: string) {
    this._acknowledgedAlertIds.update(set => {
      const newSet = new Set(set);
      newSet.add(id);
      return newSet;
    });
  }

  // Real-time Event Subscription setup (could be initialized via constructor)
  constructor() {
    this.kitchenService.getOperationalEvents().subscribe(event => {
      // In a real app, we might push these events into a log or create temporary alerts.
      // We will rely on derived state for now as requested.
      console.log('Received simulated operational event:', event);
    });

    effect(() => {
      const currentStations = this.stations();
      currentStations.forEach(station => {
        if (station.status === 'OVERLOADED') {
          if (!this.previouslyOverloaded.has(station.id)) {
            this.previouslyOverloaded.add(station.id);
            this.activityTracker.logActivity({
              type: 'STATION_OVERLOADED',
              message: `${station.name} exceeded capacity limit.`,
            });
          }
        } else {
          this.previouslyOverloaded.delete(station.id);
        }
      });
    });
  }
}
