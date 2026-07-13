import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-panel-skeleton',
  standalone: true,
  imports: [Skeleton],
  templateUrl: './panel-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './panel-skeleton.component.scss'
})
export class PanelSkeletonComponent {
}
