import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NetworkService {
  private _isOnline = signal<boolean>(navigator.onLine);

  readonly isOnline = this._isOnline.asReadonly();

  constructor() {
    window.addEventListener('online', () => this.setOnlineStatus(true));
    window.addEventListener('offline', () => this.setOnlineStatus(false));
  }

  private setOnlineStatus(status: boolean) {
    this._isOnline.set(status);
  }
}
