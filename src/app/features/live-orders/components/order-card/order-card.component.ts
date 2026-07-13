import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../../../core/models/order.interface';

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  order = input.required<Order>();
  
  actionClick = output<Order>();
  viewDetailsClick = output<Order>();

  get timeElapsed(): number {
    const placed = new Date(this.order().placedAt).getTime();
    return Math.floor((Date.now() - placed) / 60000); // minutes
  }

  get isWarning(): boolean {
    return this.timeElapsed > 15 && this.order().status !== 'DELIVERED';
  }

  get actionLabel(): string {
    switch (this.order().status) {
      case 'RECEIVED': return 'Send to Kitchen';
      case 'PREPARING': return 'Mark Ready';
      case 'READY': return 'Mark Delivered';
      case 'DELIVERED': return 'View Details';
      default: return 'Action';
    }
  }

  onActionClick() {
    this.actionClick.emit(this.order());
  }

  onViewDetails(event: Event) {
    event.stopPropagation();
    this.viewDetailsClick.emit(this.order());
  }
}
