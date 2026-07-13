import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OfflineSyncService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);
  
  constructor() {
    window.addEventListener('online', () => this.isOnlineSubject.next(true));
    window.addEventListener('offline', () => this.isOnlineSubject.next(false));
  }

  get isOnline$(): Observable<boolean> {
    return this.isOnlineSubject.asObservable();
  }
  
  get isOnline(): boolean {
    return this.isOnlineSubject.value;
  }
}
