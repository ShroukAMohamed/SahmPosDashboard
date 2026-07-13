import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { Order } from '../../../../core/models/order.interface';

@Component({
  selector: 'app-ai-assistant-panel',
  standalone: true,
  imports: [CommonModule, DrawerModule],
  templateUrl: './ai-assistant-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ai-assistant-panel.component.scss']
})
export class AiAssistantPanelComponent {
  order = input<Order | null>(null);
  close = output<void>();

  // Derived state to control drawer visibility
  visible = computed(() => this.order() !== null);

  // Derived total calculations
  subtotal = computed(() => {
    const currentOrder = this.order();
    if (!currentOrder) return 0;
    
    return currentOrder.items.reduce((sum, item) => {
      return sum + (item.totalPrice || item.quantity * 8.5);
    }, 0);
  });
  
  tax = computed(() => this.subtotal() * 0.08);
  total = computed(() => this.subtotal() + this.tax());

  onClose() {
    this.close.emit();
  }
}
