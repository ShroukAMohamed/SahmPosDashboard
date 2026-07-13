import { Injectable, signal, inject } from '@angular/core';
import { MockApiService } from '../mock-api/mock-api.service';
import { catchError, map, of, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  private mockApi = inject(MockApiService);
  private _isOnline = signal<boolean>(navigator.onLine);
  readonly isOnline = this._isOnline.asReadonly();

  private pingSubscription: Subscription | null = null;

  constructor() {
    window.addEventListener('online', () => this.checkNetworkStatus());
    window.addEventListener('offline', () => this.setOnlineStatus(false));

    // Initial check
    this.checkNetworkStatus();
  }

  private checkNetworkStatus() {
    if (!navigator.onLine) {
      this.setOnlineStatus(false);
      return;
    }

    // Ping the backend to confirm true connectivity
    if (this.pingSubscription) {
      this.pingSubscription.unsubscribe();
    }

    this.pingSubscription = this.mockApi.healthCheck().pipe(
      map(() => true),
      catchError(() => of(false))
    ).subscribe(isOnline => {
      this.setOnlineStatus(isOnline);
    });
  }

  private setOnlineStatus(status: boolean) {
    this._isOnline.set(status);
  }
}
