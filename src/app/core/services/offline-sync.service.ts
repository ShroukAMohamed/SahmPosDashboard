import { Injectable } from '@angular/core';

export interface SyncAction {
  id: string;
  type: 'CREATE_ORDER' | 'UPDATE_ORDER_STATUS';
  payload: any;
  timestamp: number;
}

@Injectable({ providedIn: 'root' })
export class OfflineSyncService {
  private readonly dbName = 'SahmPosDB';
  private readonly storeName = 'syncQueue';
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDb();
  }

  private initDb(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => {
        console.error('Failed to open IndexedDB');
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event: any) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
    });
  }

  async queueAction(action: Omit<SyncAction, 'id' | 'timestamp'>): Promise<SyncAction> {
    if (!this.db) await this.initDb();
    
    const fullAction: SyncAction = {
      ...action,
      id: crypto.randomUUID(),
      timestamp: Date.now()
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add(fullAction);

      request.onsuccess = () => resolve(fullAction);
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
}
