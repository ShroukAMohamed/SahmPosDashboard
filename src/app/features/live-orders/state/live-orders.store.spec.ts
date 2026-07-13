import { TestBed } from '@angular/core/testing';
import { LiveOrdersStore } from './live-orders.store';
import { LiveOrdersService } from '../services/live-orders.service';
import { NetworkService } from '../../../core/services/network.service';
import { OfflineSyncService } from '../../../core/services/offline-sync.service';
import { ActivityTrackerService } from '../../../core/services/activity-tracker.service';
import { of } from 'rxjs';

describe('LiveOrdersStore', () => {
  let store: LiveOrdersStore;
  let mockLiveOrdersService: any;
  let mockNetworkService: any;
  let mockOfflineSync: any;
  let mockActivityTracker: any;

  beforeEach(() => {
    mockLiveOrdersService = {
      getLiveOrders: jasmine.createSpy('getLiveOrders').and.returnValue(of({ success: true, data: [] })),
      updateOrderStatus: jasmine.createSpy('updateOrderStatus').and.returnValue(of({ success: true }))
    };

    mockNetworkService = {
      isOnline: jasmine.createSpy('isOnline').and.returnValue(true)
    };

    mockOfflineSync = {
      queueAction: jasmine.createSpy('queueAction').and.returnValue(Promise.resolve()),
      getQueue: jasmine.createSpy('getQueue').and.returnValue(Promise.resolve([]))
    };

    mockActivityTracker = {
      logActivity: jasmine.createSpy('logActivity')
    };

    TestBed.configureTestingModule({
      providers: [
        LiveOrdersStore,
        { provide: LiveOrdersService, useValue: mockLiveOrdersService },
        { provide: NetworkService, useValue: mockNetworkService },
        { provide: OfflineSyncService, useValue: mockOfflineSync },
        { provide: ActivityTrackerService, useValue: mockActivityTracker }
      ]
    });

    store = TestBed.inject(LiveOrdersStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should load orders', () => {
    store.loadOrders();
    expect(mockLiveOrdersService.getLiveOrders).toHaveBeenCalled();
    expect(store.isLoading()).toBeFalse();
  });

  it('should add order and log activity', () => {
    const order: any = { id: '1', orderNumber: '123' };
    store.addOrder(order);
    expect(store.orders().length).toBe(1);
    expect(mockActivityTracker.logActivity).toHaveBeenCalled();
  });

  it('should queue action when offline on addOrder', () => {
    mockNetworkService.isOnline.and.returnValue(false);
    const order: any = { id: '1', orderNumber: '123' };
    store.addOrder(order);
    expect(mockOfflineSync.queueAction).toHaveBeenCalled();
  });
});
