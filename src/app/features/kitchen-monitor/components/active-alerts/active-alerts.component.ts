import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../state/kitchen-monitor.store';

@Component({
  selector: 'app-active-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-alerts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./active-alerts.component.scss']
})
export class ActiveAlertsComponent {
  alerts = input.required<Alert[]>();
  count = input.required<number>();
  acknowledge = output<string>();

  onAcknowledge(id: string) {
    this.acknowledge.emit(id);
  }
}
