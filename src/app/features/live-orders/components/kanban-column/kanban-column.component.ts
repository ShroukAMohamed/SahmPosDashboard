import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Order } from '../../../../core/models/order.interface';
import { OrderStatus } from '../../../../core/types/order-status.type';
import { OrderCardComponent } from '../order-card/order-card.component';

@Component({
  selector: 'app-kanban-column',
  standalone: true,
  imports: [CommonModule, OrderCardComponent, DragDropModule],
  templateUrl: './kanban-column.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) status!: OrderStatus;
  @Input({ required: true }) orders: Order[] = [];
  
  @Output() actionClick = new EventEmitter<Order>();
  @Output() viewDetailsClick = new EventEmitter<Order>();
  @Output() drop = new EventEmitter<CdkDragDrop<Order[]>>();

  get isPrimary(): boolean {
    return this.status === 'RECEIVED';
  }

  onActionClick(order: Order) {
    this.actionClick.emit(order);
  }

  onViewDetailsClick(order: Order) {
    this.viewDetailsClick.emit(order);
  }

  onDrop(event: CdkDragDrop<Order[]>) {
    this.drop.emit(event);
  }
}
