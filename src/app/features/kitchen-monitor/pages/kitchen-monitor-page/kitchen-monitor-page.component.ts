import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KitchenMonitorStore } from '../../state/kitchen-monitor.store';
import { StationCapacityComponent } from '../../components/station-capacity/station-capacity.component';
import { AiInsightsGridComponent } from '../../components/ai-insights-grid/ai-insights-grid.component';
import { ActiveAlertsComponent } from '../../components/active-alerts/active-alerts.component';
import { SyncIndicatorComponent } from '../../../../shared/components/sync-indicator/sync-indicator.component';
import { PanelSkeletonComponent } from '../../../../shared/components/loading-state/panel-skeleton/panel-skeleton.component';

@Component({
  selector: 'app-kitchen-monitor-page',
  standalone: true,
  imports: [
    CommonModule, 
    StationCapacityComponent, 
    AiInsightsGridComponent, 
    ActiveAlertsComponent,
    SyncIndicatorComponent,
    PanelSkeletonComponent
  ],
  templateUrl: './kitchen-monitor-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./kitchen-monitor-page.component.scss']
})
export class KitchenMonitorPageComponent {
  store = inject(KitchenMonitorStore);
}
