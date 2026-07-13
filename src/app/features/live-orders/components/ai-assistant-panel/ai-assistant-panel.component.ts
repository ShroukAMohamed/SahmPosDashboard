import { Component, ChangeDetectionStrategy, input, output, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { Order } from '../../../../core/models/order.interface';
import { AiAssistantService, OrderInsight } from '../../services/ai-assistant.service';
import { ActivityTrackerService } from '../../../../core/services/activity-tracker.service';

@Component({
  selector: 'app-ai-assistant-panel',
  standalone: true,
  imports: [CommonModule, DrawerModule],
  templateUrl: './ai-assistant-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./ai-assistant-panel.component.scss']
})
export class AiAssistantPanelComponent {
  private aiService = inject(AiAssistantService);
  private activityTracker = inject(ActivityTrackerService);
  
  activities = this.activityTracker.activities;

  order = input<Order | null>(null);
  close = output<void>();

  // Derived state to control drawer visibility
  visible = computed(() => this.order() !== null);

  // AI States
  isAnalyzing = signal<boolean>(false);
  error = signal<string | null>(null);
  insights = signal<OrderInsight[]>([]);

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

  constructor() {
    effect(() => {
      const currentOrder = this.order();
      if (currentOrder) {
        this.analyze(currentOrder);
      } else {
        // Reset state when closed
        this.insights.set([]);
        this.error.set(null);
        this.isAnalyzing.set(false);
      }
    });
  }

  analyze(orderToAnalyze?: Order) {
    const target = orderToAnalyze || this.order();
    if (!target) return;

    this.isAnalyzing.set(true);
    this.error.set(null);
    this.insights.set([]);

    this.aiService.analyzeOrder(target).subscribe({
      next: (data) => {
        this.insights.set(data);
        this.isAnalyzing.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to analyze order.');
        this.isAnalyzing.set(false);
      }
    });
  }

  onClose() {
    this.close.emit();
  }
}
