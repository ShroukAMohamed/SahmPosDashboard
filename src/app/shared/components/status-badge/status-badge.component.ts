import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatusBadgeColor = 'primary' | 'danger' | 'success' | 'neutral' | 'muted';
export type StatusBadgeSize = 'sm' | 'md';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() color: StatusBadgeColor = 'neutral';
  @Input() size: StatusBadgeSize = 'sm';

  get colorClasses(): string {
    switch (this.color) {
      case 'primary':
        return 'bg-primary/20 text-primary';
      case 'danger':
        return 'bg-danger/10 text-danger';
      case 'success':
        return 'bg-success/20 text-success';
      case 'muted':
        return 'bg-surface-hover text-text-muted';
      case 'neutral':
      default:
        return 'bg-border-dark text-text-muted';
    }
  }

  get sizeClasses(): string {
    switch (this.size) {
      case 'md':
        return 'px-2 py-0.5 text-xs font-bold';
      case 'sm':
      default:
        return 'px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider';
    }
  }
}
