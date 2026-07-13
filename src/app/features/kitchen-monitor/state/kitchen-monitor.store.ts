import { Injectable, signal, computed } from '@angular/core';

export interface Station {
  id: string;
  name: string;
  icon: string;
  currentLoad: number;
  maxCapacity: number;
  status: 'normal' | 'warning' | 'critical';
  pendingItems: PendingItem[];
}

export interface PendingItem {
  name: string;
  count: number;
  time: string;
  isWarning?: boolean;
}

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
  // State
  private readonly _stations = signal<Station[]>([
    {
      id: 'st-1',
      name: 'Grill Station',
      icon: 'local_fire_department',
      currentLoad: 12,
      maxCapacity: 20,
      status: 'normal',
      pendingItems: [
        { count: 4, name: 'Classic Burger', time: '4m' },
        { count: 6, name: 'Chicken Breast', time: '8m' },
        { count: 2, name: 'Veggie Patty', time: '2m' }
      ]
    },
    {
      id: 'st-2',
      name: 'Fryer Station',
      icon: 'opacity',
      currentLoad: 18,
      maxCapacity: 20,
      status: 'critical',
      pendingItems: [
        { count: 10, name: 'L Fries', time: 'Waiting', isWarning: true },
        { count: 5, name: 'Onion Rings', time: '2m' },
        { count: 3, name: 'Chicken Tenders', time: '3m' }
      ]
    },
    {
      id: 'st-3',
      name: 'Assembly',
      icon: 'view_in_ar',
      currentLoad: 5,
      maxCapacity: 15,
      status: 'normal',
      pendingItems: [
        { count: 5, name: 'Mixed Orders', time: 'Ready' }
      ]
    }
  ]);

  private readonly _insights = signal<AIInsight[]>([
    {
      id: 'in-1',
      type: 'warning',
      icon: 'warning',
      title: 'Kitchen Overload Warning',
      description: 'Potential capacity breach predicted in 10 minutes based on current order velocity.'
    },
    {
      id: 'in-2',
      type: 'info',
      icon: 'timer',
      title: 'Delayed Order Prediction',
      description: '4 orders are predicted to exceed SLA within the next 15 minutes.'
    },
    {
      id: 'in-3',
      type: 'success',
      icon: 'priority_high',
      title: 'Priority Change Recommendation',
      description: 'Move Order #1042 to top priority to optimize delivery window.'
    },
    {
      id: 'in-4',
      type: 'error',
      icon: 'error',
      title: 'Bottleneck Detection',
      description: 'Fryer station identified as current primary bottleneck. Consider rerouting fried items.'
    }
  ]);

  private readonly _alerts = signal<Alert[]>([
    {
      id: 'al-1',
      type: 'danger',
      title: 'Fryer Bottleneck',
      timeAgo: 'Just now',
      description: 'Capacity exceeded (90%). Expect 5m delays on fried items.',
      orderId: '1040',
      acknowledged: false
    },
    {
      id: 'al-2',
      type: 'primary',
      title: 'Grill Approaching Limit',
      timeAgo: '4m ago',
      description: 'Load steadily increasing. Currently at 60% capacity.',
      orderId: '1038',
      acknowledged: false
    },
    {
      id: 'al-3',
      type: 'success',
      title: 'Assembly Cleared',
      timeAgo: '12m ago',
      description: 'Previous backlog at assembly station has been resolved.',
      orderId: '1035',
      acknowledged: false
    }
  ]);

  // Public getters
  readonly stations = this._stations.asReadonly();
  readonly insights = this._insights.asReadonly();
  readonly alerts = this._alerts.asReadonly();

  readonly activeAlertsCount = computed(() => 
    this._alerts().filter(a => !a.acknowledged).length
  );

  // Actions
  acknowledgeAlert(id: string) {
    this._alerts.update(alerts => 
      alerts.map(a => a.id === id ? { ...a, acknowledged: true } : a)
    );
  }
}
