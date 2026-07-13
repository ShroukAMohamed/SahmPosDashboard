import { Component, inject, ChangeDetectionStrategy } from '@angular/core';

import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { LiveOrdersStore } from '../../state/live-orders.store';
import { KanbanColumnComponent } from '../kanban-column/kanban-column.component';
import { Order } from '../../../../core/models/order.interface';
import { OrderStatus } from '../../../../core/types/order-status.type';

@Component({
  selector: 'app-kanban-board',
  standalone: true,
  imports: [KanbanColumnComponent, DragDropModule],
  templateUrl: './kanban-board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent {
  store = inject(LiveOrdersStore);

  onOrderAction(order: Order) {
    if (order.status === 'RECEIVED') {
      this.store.moveOrderStatus(order.id, 'PREPARING');
    } else if (order.status === 'PREPARING') {
      this.store.moveOrderStatus(order.id, 'READY');
    } else if (order.status === 'READY') {
      this.store.moveOrderStatus(order.id, 'DELIVERED');
    }
  }

  onViewDetails(order: Order) {
    this.store.selectOrder(order.id);
  }

  onDrop(event: CdkDragDrop<Order[]>, newStatus: OrderStatus) {
    if (event.previousContainer === event.container) {
      // Reordering in the same column (Optional: dispatch order update to store if ordering matters)
      // For now, it's just visually reordering if we wanted to
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Moving to a new column
      const orderToMove = event.previousContainer.data[event.previousIndex];
      this.store.moveOrderStatus(orderToMove.id, newStatus);
    }
  }
}
