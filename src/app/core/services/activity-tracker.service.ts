import { Injectable, signal } from '@angular/core';

export interface Activity {
  id: string;
  type: 'ORDER_CREATED' | 'STATUS_CHANGED' | 'STATION_OVERLOADED' | 'AI_SUGGESTION_ACCEPTED';
  message: string;
  timestamp: string;
  orderId?: string;
}

@Injectable({ providedIn: 'root' })
export class ActivityTrackerService {
  private readonly _activities = signal<Activity[]>([]);

  readonly activities = this._activities.asReadonly();

  logActivity(activity: Omit<Activity, 'id' | 'timestamp'>) {
    const newActivity: Activity = {
      ...activity,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString()
    };

    this._activities.update(current => {
      const next = [newActivity, ...current];
      // Keep only last 50 activities to save memory
      return next.slice(0, 50);
    });
  }
}
