import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SyncIndicatorComponent } from '../../shared/components/sync-indicator/sync-indicator.component';
import { NetworkService } from '../../core/services/network.service';

@Component({
  selector: 'app-top-navigation',
  standalone: true,
  imports: [SyncIndicatorComponent, RouterModule],
  templateUrl: './top-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit, OnDestroy {
  networkService = inject(NetworkService);
  currentTime: string = '';
  isMenuOpen = signal(false);

  private timer: any;

  ngOnInit() {
    this.updateClock();
    this.timer = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  private updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString('en-US', { hour12: false });
  }
}
