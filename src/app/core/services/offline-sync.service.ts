import { Injectable, inject, effect } from '@angular/core';
import { NetworkService } from './network.service';
import { LiveOrdersService } from '../../features/live-orders/services/live-orders.service';

import { Order } from '../models/order.interface';
import { OrderStatusUpdate } from '../models/order-status-update.interface';

export type SyncActionPayload =
  | { type: 'CREATE_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: OrderStatusUpdate };

export type SyncAction = {
  id: string;
  timestamp: number;
} & SyncActionPayload;

@Injectable({ providedIn: 'root' })
export class OfflineSyncService {
  private readonly dbName = 'SahmPosDB';
  private readonly storeName = 'syncQueue';
  private db: IDBDatabase | null = null;

  private networkService = inject(NetworkService);
  private liveOrdersService = inject(LiveOrdersService);

  constructor() {
    this.initDb();

    // Connect to reconnection events
    effect(() => {
      if (this.networkService.isOnline()) {
        this.processQueue();
      }
    });
  }

  private dbPromise: Promise<void> | null = null;

  private initDb(): Promise<void> {
    if (this.db) return Promise.resolve();
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => {
        console.error('Failed to open IndexedDB');
        this.dbPromise = null;
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        console.log('[OfflineSyncService] IndexedDB initialized successfully');
        resolve();
      };

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
    });

    return this.dbPromise;
  }

  async queueAction(action: SyncActionPayload): Promise<SyncAction> {
    if (!this.db) await this.initDb();
    
    // Prevent Duplicates
    const existingQueue = await this.getQueue();
    let isDuplicate = false;
    let existingActionIdToRemove: string | null = null;

    if (action.type === 'UPDATE_ORDER_STATUS') {
      const existing = existingQueue.find((a): a is Extract<SyncAction, { type: 'UPDATE_ORDER_STATUS' }> =>
        a.type === 'UPDATE_ORDER_STATUS' &&
        a.payload.orderId === action.payload.orderId
      );
      if (existing) {
        if (existing.payload.newStatus === action.payload.newStatus) {
          isDuplicate = true; // Exact duplicate
        } else {
          existingActionIdToRemove = existing.id; // Supersede previous update
        }
      }
    } else if (action.type === 'CREATE_ORDER') {
      const existing = existingQueue.find((a): a is Extract<SyncAction, { type: 'CREATE_ORDER' }> =>
        a.type === 'CREATE_ORDER' &&
        a.payload.id === action.payload.id
      );
      if (existing) {
        isDuplicate = true;
      }
    }

    if (isDuplicate) {
      return Promise.reject('Duplicate action prevented');
    }

    if (existingActionIdToRemove) {
      await this.removeAction(existingActionIdToRemove);
    }

    const fullAction: SyncAction = {
      ...action,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(fullAction);

      request.onsuccess = () => {
        console.log('[Offline Queue Added]', fullAction);
        resolve(fullAction);
      }
      request.onerror = () => reject(request.error);
    });
  }

  async getQueue(): Promise<SyncAction[]> {
    if (!this.db) await this.initDb();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        // Sort by timestamp ascending (oldest first)
        const items = (request.result as SyncAction[]).sort((a, b) => a.timestamp - b.timestamp);
        resolve(items);
      };
      request.onerror = () => reject(request.error);
    });
  }

  async removeAction(id: string): Promise<void> {
    if (!this.db) await this.initDb();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async processQueue() {
    const queue = await this.getQueue();
    if (queue.length === 0) return;

    console.log('[Sync Started]');
    let processedCount = 0;

    for (const action of queue) {
      if (action.type === 'UPDATE_ORDER_STATUS') {
        this.liveOrdersService.updateOrderStatus(action.payload).subscribe({
          next: (res) => {
            if (res.success) {
              console.log('[Order Synced Successfully]', action);
              this.removeAction(action.id);
            } else {
              console.error('[OfflineSyncService] API rejected update status', res.error);
            }
            processedCount++;
            if (processedCount === queue.length) console.log('[Queue Cleared]');
          },
          error: (err) => {
            console.error('[OfflineSyncService] Failed to sync update', err);
            processedCount++;
          }
        });
      } else if (action.type === 'CREATE_ORDER') {
        this.liveOrdersService.createOrder(action.payload).subscribe({
          next: (res) => {
            if (res.success) {
              console.log('[Order Synced Successfully]', action);
              this.removeAction(action.id);
            } else {
              console.error('[OfflineSyncService] API rejected create order', res.error);
            }
            processedCount++;
            if (processedCount === queue.length) console.log('[Queue Cleared]');
          },
          error: (err) => {
            console.error('[OfflineSyncService] Failed to sync create order', err);
            processedCount++;
          }
        });
      }
    }
  }
}
