import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-product-card-skeleton',
  standalone: true,
  imports: [Skeleton],
  templateUrl: './product-card-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './product-card-skeleton.component.scss'
})
export class ProductCardSkeletonComponent {
}
