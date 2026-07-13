import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { LiveOrdersStore } from './live-orders.store';
import { NetworkService } from '../../../core/services/network.service';
import { OfflineSyncService } from '../../../core/services/offline-sync.service';

import { LiveOrdersService } from '../services/live-orders.service';
import { MockApiService } from '../../../core/mock-api/mock-api.service';
import { of } from 'rxjs';

describe('Offline Integration Scenario', () => {
  let mockLiveOrdersService: any;

  let mockApiService: any;

  beforeEach(async () => {
    mockLiveOrdersService = {
      getLiveOrders: jasmine.createSpy().and.returnValue(of({ success: true, data: [] })),
      createOrder: jasmine.createSpy().and.returnValue(of({ success: true, data: {} })),
      updateOrderStatus: jasmine.createSpy().and.returnValue(of({ success: true, data: {} }))
    };



    mockApiService = {
      healthCheck: jasmine.createSpy().and.returnValue(of(true))
    };

    TestBed.configureTestingModule({
      providers: [
        LiveOrdersStore,
        OfflineSyncService,
        NetworkService,
        { provide: LiveOrdersService, useValue: mockLiveOrdersService },

        { provide: MockApiService, useValue: mockApiService }
      ]
    });
    
    // Clear the IndexedDB object store instead of deleting the DB to avoid blocked connections
    const offlineSync = TestBed.inject(OfflineSyncService);
    await (offlineSync as any).initDb();
    await new Promise<void>((resolve) => {
      const db = (offlineSync as any).db;
      if (!db) { resolve(); return; }
      const tx = db.transaction('syncQueue', 'readwrite');
      const store = tx.objectStore('syncQueue');
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  });

  afterEach(async () => {
    const offlineSync = TestBed.inject(OfflineSyncService);
    await new Promise<void>((resolve) => {
      const db = (offlineSync as any).db;
      if (!db) { resolve(); return; }
      const tx = db.transaction('syncQueue', 'readwrite');
      const store = tx.objectStore('syncQueue');
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => resolve();
    });
  });

  it('Offline: Create order -> refresh -> order remains -> reconnect -> sync succeeds -> IndexedDB becomes empty', async () => {
    const networkService = TestBed.inject(NetworkService);
    const offlineSync = TestBed.inject(OfflineSyncService);
    const store = TestBed.inject(LiveOrdersStore);

    // 1. App starts Offline
    const navSpy = spyOnProperty(navigator, 'onLine').and.returnValue(false);
    (networkService as any).setOnlineStatus(false);
    
    // 2. Create order offline
    const testOrder: any = { id: 'test-ord-1', orderNumber: '1001', status: 'RECEIVED' };
    store.addOrder(testOrder);
    
    // Wait for IndexedDB
    await new Promise(r => setTimeout(r, 1000));

    // 3. Simulate "refresh" by calling loadOrders (which simulates component init)
    // Server returns empty array, but store should merge from IndexedDB
    store.loadOrders();
    await new Promise(r => setTimeout(r, 1000));

    // Order should remain in UI because it was merged from IndexedDB
    expect(store.orders().length).toBe(1);
    expect(store.orders()[0].id).toBe('test-ord-1');

    // 4. Reconnect
    navSpy.and.returnValue(true);
    (networkService as any).setOnlineStatus(true);
    
    // Manually trigger effect via flushEffects to invoke processQueue
    TestBed.flushEffects(); 
    await new Promise(r => setTimeout(r, 1000));

    // 5. Sync succeeds
    expect(mockLiveOrdersService.createOrder).toHaveBeenCalledWith(testOrder);

    // 6. IndexedDB becomes empty
    const queue = await offlineSync.getQueue();
    expect(queue.length).toBe(0);
  });
});
