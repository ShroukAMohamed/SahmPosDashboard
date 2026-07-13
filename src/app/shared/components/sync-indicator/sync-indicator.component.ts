import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sync-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sync-indicator.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./sync-indicator.component.scss']
})
export class SyncIndicatorComponent {
  @Input() isSynced: boolean = true;
}
