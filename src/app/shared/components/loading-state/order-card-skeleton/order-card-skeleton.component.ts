import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-order-card-skeleton',
  standalone: true,
  imports: [Skeleton],
  templateUrl: './order-card-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './order-card-skeleton.component.scss'
})
export class OrderCardSkeletonComponent {
}
