import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer, Subscription } from 'rxjs';
import { map, delay, filter } from 'rxjs/operators';
import { Order } from '../../../core/models/order.interface';
import { OrderStatus } from '../../../core/types/order-status.type';
import { MockApiService } from '../../../core/mock-api/mock-api.service';

export type RealtimeEventType = 'ORDER_CREATED' | 'ORDER_STATUS_CHANGED';

export interface RealtimeEvent {
  type: RealtimeEventType;
  payload: any;
}

export type ConnectionState = 'CONNECTING' | 'CONNECTED' | 'DISCONNECTED' | 'ERROR';

@Injectable({ providedIn: 'root' })
export class LiveOrdersRealtimeService {
  private mockApi = inject(MockApiService);
  
  private connectionStateSubject = new BehaviorSubject<ConnectionState>('DISCONNECTED');
  public connectionState$ = this.connectionStateSubject.asObservable();

  private eventsSubject = new Subject<RealtimeEvent>();
  public events$ = this.eventsSubject.asObservable();

  private simulationSub: Subscription | null = null;

  // For simulation purposes to randomly upgrade statuses
  private mockOrderIds: string[] = [];

  connect() {
    if (this.connectionStateSubject.value === 'CONNECTED') return;

    this.connectionStateSubject.next('CONNECTING');

    // Simulate connection delay
    setTimeout(() => {
      this.connectionStateSubject.next('CONNECTED');
      this.startSimulation();
    }, 1500);
  }

  disconnect() {
    this.connectionStateSubject.next('DISCONNECTED');
    this.stopSimulation();
  }

  private startSimulation() {
    this.stopSimulation();

    // Simulate events every 10 to 20 seconds
    this.simulationSub = timer(10000, 15000).subscribe(() => {
      const isNewOrder = Math.random() > 0.6;

      if (isNewOrder || this.mockOrderIds.length === 0) {
        // Simulate new order
        const newOrderId = `ord-rt-${Date.now()}`;
        this.mockOrderIds.push(newOrderId);

        const newOrder: Order = {
          id: newOrderId,
          orderNumber: `#${Math.floor(1000 + Math.random() * 9000)}`,
          customerName: 'Online Customer',
          status: 'RECEIVED',
          channel: 'ONLINE',
          urgency: Math.random() > 0.8 ? 'URGENT' : 'NORMAL',
          placedAt: new Date().toISOString(),
          totalAmount: Math.floor(Math.random() * 50) + 10,
          items: this.generateRandomItems()
        };

        // Persist to Mock API so it survives page reloads
        this.mockApi.createOrder(newOrder).subscribe();

        this.eventsSubject.next({
          type: 'ORDER_CREATED',
          payload: newOrder
        });
      } else {
        // Simulate status change of a random mock order
        const randomId = this.mockOrderIds[Math.floor(Math.random() * this.mockOrderIds.length)];

        const possibleStatuses: OrderStatus[] = ['PREPARING', 'READY', 'DELIVERED'];
        const newStatus = possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)];

        // Persist to Mock API so it survives page reloads
        this.mockApi.updateOrderStatus({
          orderId: randomId,
          newStatus: newStatus,
          previousStatus: 'RECEIVED', // Dummy value for simulation
          updatedAt: new Date().toISOString()
        }).subscribe();

        this.eventsSubject.next({
          type: 'ORDER_STATUS_CHANGED',
          payload: {
            orderId: randomId,
            newStatus: newStatus,
            updatedAt: new Date().toISOString()
          }
        });

        // Remove from tracking if delivered to stop simulating changes on it
        if (newStatus === 'DELIVERED') {
          this.mockOrderIds = this.mockOrderIds.filter(id => id !== randomId);
        }
      }
    });
  }

  private stopSimulation() {
    if (this.simulationSub) {
      this.simulationSub.unsubscribe();
      this.simulationSub = null;
    }
  }

  private generateRandomItems() {
    const catalog = [
      { productId: 'prod-1', name: 'Classic Double Combo' },
      { productId: 'prod-2', name: 'Spicy Crispy Combo' },
      { productId: 'prod-5', name: 'Truffle Burger' },
      { productId: 'prod-6', name: 'Curly Fries' },
      { productId: 'prod-8', name: 'Milkshake' },
      { productId: 'prod-10', name: 'Onion Rings' },
      { productId: 'prod-14', name: 'Chocolate Lava Cake' }
    ];

    const itemCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 items
    const selectedItems = [];

    // Shuffle and pick
    const shuffled = [...catalog].sort(() => 0.5 - Math.random());
    for (let i = 0; i < itemCount; i++) {
      selectedItems.push({
        id: `item-rt-${Date.now()}-${i}`,
        productId: shuffled[i].productId,
        name: shuffled[i].name,
        quantity: Math.floor(Math.random() * 3) + 1 // 1 to 3 qty
      });
    }

    return selectedItems;
  }
}
