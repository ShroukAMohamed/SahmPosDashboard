import { TestBed } from '@angular/core/testing';
import { OfflineSyncService } from './offline-sync.service';

describe('OfflineSyncService', () => {
  let service: OfflineSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflineSyncService);
    
    // Mocking indexedDB for simple tests
    spyOn<any>(service, 'initDb').and.returnValue(Promise.resolve());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Simple test case, as actual IndexedDB testing requires deeper mocking
  it('should have queueAction method', () => {
    expect(service.queueAction).toBeDefined();
  });
});
