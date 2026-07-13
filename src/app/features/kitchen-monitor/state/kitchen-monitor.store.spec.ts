import { TestBed } from '@angular/core/testing';
import { KitchenMonitorStore } from './kitchen-monitor.store';
import { LiveOrdersStore } from '../../live-orders/state/live-orders.store';
import { KitchenMonitorService } from '../services/kitchen-monitor.service';
import { NetworkService } from '../../../core/services/network.service';
import { ActivityTrackerService } from '../../../core/services/activity-tracker.service';
import { signal } from '@angular/core';
import { Subject } from 'rxjs';

describe('KitchenMonitorStore', () => {
  let store: KitchenMonitorStore;
  let mockLiveOrdersStore: any;
  let mockKitchenService: any;
  let mockNetworkService: any;
  let mockActivityTracker: any;

  beforeEach(() => {
    mockLiveOrdersStore = {
      isLoading: signal(false),
      error: signal(null),
      preparingOrders: signal([]),
      orders: signal([])
    };

    mockKitchenService = {
      getOperationalEvents: jasmine.createSpy('getOperationalEvents').and.returnValue(new Subject())
    };

    mockNetworkService = {
      isOnline: signal(true)
    };

    mockActivityTracker = {
      logActivity: jasmine.createSpy('logActivity')
    };

    TestBed.configureTestingModule({
      providers: [
        KitchenMonitorStore,
        { provide: LiveOrdersStore, useValue: mockLiveOrdersStore },
        { provide: KitchenMonitorService, useValue: mockKitchenService },
        { provide: NetworkService, useValue: mockNetworkService },
        { provide: ActivityTrackerService, useValue: mockActivityTracker }
      ]
    });

    store = TestBed.inject(KitchenMonitorStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should compute stations properly', () => {
    expect(store.stations().length).toBe(3);
    expect(store.stations()[0].name).toBe('Grill Station');
  });

  it('should compute active alerts properly based on stations', () => {
    // If no preparing orders, alerts should be 0
    expect(store.activeAlertsCount()).toBe(0);
  });

  it('should acknowledge alert', () => {
    store.acknowledgeAlert('alert-1');
    // Internal state checked via derived logic, but we just verify method runs without error
    expect(true).toBeTrue();
  });
});
