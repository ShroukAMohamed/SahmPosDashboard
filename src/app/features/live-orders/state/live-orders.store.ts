import { Injectable, computed, inject, signal, effect } from '@angular/core';
import { Order } from '../../../core/models/order.interface';
import { LiveOrdersService } from '../services/live-orders.service';
import { OrderStatus } from '../../../core/types/order-status.type';
import { OrderChannel } from '../../../core/types/order-channel.type';
import { NetworkService } from '../../../core/services/network.service';
import { OfflineSyncService } from '../../../core/services/offline-sync.service';
import { ActivityTrackerService } from '../../../core/services/activity-tracker.service';

export interface OrderFilterCriteria {
  searchQuery: string;
  channel: OrderChannel | 'ALL';
}

@Injectable({ providedIn: 'root' })
export class LiveOrdersStore {
  private liveOrdersService = inject(LiveOrdersService);
  private networkService = inject(NetworkService);
  private offlineSync = inject(OfflineSyncService);
  private activityTracker = inject(ActivityTrackerService);

  constructor() {
  }

  // Base State Signals
  private readonly _orders = signal<Order[]>([]);
  private readonly _isLoading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  // Filter State Signals
  private readonly _filters = signal<OrderFilterCriteria>({
    searchQuery: '',
    channel: 'ALL'
  });

  // Selection State Signals
  private readonly _selectedOrderId = signal<string | null>(null);

  // Public Getters
  readonly orders = this._orders.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly filters = this._filters.asReadonly();
  readonly selectedOrderId = this._selectedOrderId.asReadonly();

  // Computed Derived State
  readonly selectedOrder = computed(() => {
    const id = this._selectedOrderId();
    if (!id) return null;
    return this._orders().find(o => o.id === id) || null;
  });

  readonly filteredOrders = computed(() => {
    const currentOrders = this._orders();
    const criteria = this._filters();

    return currentOrders.filter(order => {
      const matchesSearch = order.orderNumber.toLowerCase().includes(criteria.searchQuery.toLowerCase()) ||
        order.customerName.toLowerCase().includes(criteria.searchQuery.toLowerCase());
      const matchesChannel = criteria.channel === 'ALL' || order.channel === criteria.channel;

      return matchesSearch && matchesChannel;
    });
  });

  readonly receivedOrders = computed(() => this.filteredOrders().filter(o => o.status === 'RECEIVED'));
  readonly preparingOrders = computed(() => this.filteredOrders().filter(o => o.status === 'PREPARING'));
  readonly readyOrders = computed(() => this.filteredOrders().filter(o => o.status === 'READY'));
  readonly deliveredOrders = computed(() => this.filteredOrders().filter(o => o.status === 'DELIVERED'));

  // Actions
  // Actions
  loadOrders() {
    this._isLoading.set(true);
    this._error.set(null);

    this.liveOrdersService.getLiveOrders().subscribe({
      next: async (response) => {
        if (response.success && response.data) {
          let orders = response.data;

          // Re-apply offline pending actions to survive page refresh
          try {
            const pendingActions = await this.offlineSync.getQueue();
            for (const action of pendingActions) {
              if (action.type === 'CREATE_ORDER') {
                if (!orders.some(o => o.id === action.payload.id)) {
                  orders = [action.payload, ...orders];
                }
              } else if (action.type === 'UPDATE_ORDER_STATUS') {
                orders = orders.map(o => o.id === action.payload.orderId ? { ...o, status: action.payload.newStatus } : o);
              }
            }
          } catch (e) {
            console.error('Failed to apply offline queue', e);
          }

          this._orders.set(orders);
        } else {
          this._error.set(response.error || 'Failed to load orders');
        }
        this._isLoading.set(false);
      },
      error: (err) => {
        this._error.set('Network error');
        this._isLoading.set(false);
      }
    });
  }

  updateFilters(criteria: Partial<OrderFilterCriteria>) {
    this._filters.update(current => ({ ...current, ...criteria }));
  }

  selectOrder(orderId: string | null) {
    this._selectedOrderId.set(orderId);
  }

  moveOrderStatus(orderId: string, newStatus: OrderStatus) {
    const previousOrders = this._orders();
    const orderToMove = previousOrders.find(o => o.id === orderId);

    if (!orderToMove) return;
    if (orderToMove.status === newStatus) return; // No change

    const previousStatus = orderToMove.status;

    // Optimistic Update
    this._orders.update(orders =>
      orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o)
    );

    this.activityTracker.logActivity({
      type: 'STATUS_CHANGED',
      message: `Order ${orderToMove.orderNumber} moved from ${previousStatus} to ${newStatus}`,
      orderId
    });

    const payload = {
      orderId,
      newStatus,
      previousStatus,
      updatedAt: new Date().toISOString()
    };

    if (!this.networkService.isOnline()) {
      this.offlineSync.queueAction({ type: 'UPDATE_ORDER_STATUS', payload });
      return;
    }

    // API Call
    this.liveOrdersService.updateOrderStatus(payload).subscribe({
      error: () => {
        console.warn('Failed to move order, queuing action for offline sync');
        this.offlineSync.queueAction({ type: 'UPDATE_ORDER_STATUS', payload });
      }
    });
  }

  addOrder(order: Order) {
    // Optimistic Update: Immediately add order to Signal state
    this._orders.update(orders => [order, ...orders]);
    console.log('Network status:', this.networkService.isOnline());
    this.activityTracker.logActivity({
      type: 'ORDER_CREATED',
      message: `New order ${order.orderNumber} created`,
      orderId: order.id
    });

    if (!this.networkService.isOnline()) {
      // OFFLINE: Queue CREATE_ORDER action, do not rollback, keep visible
      this.offlineSync.queueAction({ type: 'CREATE_ORDER', payload: order });
      return;
    }

    // ONLINE: Call LiveOrdersService
    this.liveOrdersService.createOrder(order).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          // If API succeeds: Replace temporary order with server order to avoid duplicates
          this._orders.update(orders => orders.map(o => o.id === order.id ? res.data! : o));
        } else {
          // If API logical fails: Rollback optimistic order and log error
          this._orders.update(orders => orders.filter(o => o.id !== order.id));
          console.error('Failed to create order on server', res.error);
        }
      },
      error: (err) => {
        // If API network fails: Rollback optimistic order and log error
        // Note: The previous behavior queued the action here, but we now explicitly rollback
        this._orders.update(orders => orders.filter(o => o.id !== order.id));
        console.error('Network error during order creation', err);
      }
    });
  }
}
