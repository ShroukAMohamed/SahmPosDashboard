import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { KitchenEvent } from '../interfaces/kitchen-event.interface';

@Injectable({ providedIn: 'root' })
export class KitchenMonitorService {
  private customEvents = new Subject<KitchenEvent>();

  // Simulate a stream of operational events
  getOperationalEvents(): Observable<KitchenEvent> {
    // We mix some random timer-based events with custom events
    return timer(5000, 15000).pipe(
      map(val => {
        const events: KitchenEvent[] = [
          {
            id: `evt-${Date.now()}`,
            type: 'SYSTEM_NOTICE',
            message: 'Routine cleaning required at Assembly station',
            timestamp: new Date().toISOString()
          },
          {
            id: `evt-${Date.now()}`,
            type: 'BOTTLENECK_DETECTED',
            stationId: 'st-2',
            message: 'Fryer station temperature dropping slightly',
            timestamp: new Date().toISOString()
          }
        ];
        return events[val % events.length];
      })
    );
  }

  emitCustomEvent(event: KitchenEvent) {
    this.customEvents.next(event);
  }
}
