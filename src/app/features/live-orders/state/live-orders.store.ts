import { Injectable, computed, inject, signal } from '@angular/core';
import { Order } from '../../../core/models/order.interface';
import { LiveOrdersService } from '../services/live-orders.service';
import { OrderStatus } from '../../../core/types/order-status.type';
import { OrderChannel } from '../../../core/types/order-channel.type';

export interface OrderFilterCriteria {
  searchQuery: string;
  channel: OrderChannel | 'ALL';
}

@Injectable({ providedIn: 'root' })
export class LiveOrdersStore {
  private liveOrdersService = inject(LiveOrdersService);

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
  loadOrders() {
    this._isLoading.set(true);
    this._error.set(null);

    this.liveOrdersService.getLiveOrders().subscribe({
      next: (response) => {
        if (response.success && response.data) {
          this._orders.set(response.data);
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

    // API Call
    this.liveOrdersService.updateOrderStatus({
      orderId,
      newStatus,
      previousStatus,
      updatedAt: new Date().toISOString()
    }).subscribe({
      error: () => {
        // Rollback on failure
        this._orders.set(previousOrders);
        console.error('Failed to move order, rolling back');
      }
    });
  }

  addOrder(order: Order) {
    this._orders.update(orders => [order, ...orders]);
    // In a real app, this would also make an API call to save the order to backend.
  }
}
