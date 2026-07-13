import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';

import { LiveOrdersStore } from '../../state/live-orders.store';
import { OrderFiltersComponent } from '../../components/order-filters/order-filters.component';
import { KanbanBoardComponent } from '../../components/kanban-board/kanban-board.component';
import { AiAssistantPanelComponent } from '../../components/ai-assistant-panel/ai-assistant-panel.component';
import { PanelSkeletonComponent } from '../../../../shared/components/loading-state/panel-skeleton/panel-skeleton.component';

@Component({
  selector: 'app-live-orders-page',
  standalone: true,
  imports: [OrderFiltersComponent, KanbanBoardComponent, AiAssistantPanelComponent, PanelSkeletonComponent],
  templateUrl: './live-orders-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./live-orders-page.component.scss']
})
export class LiveOrdersPageComponent implements OnInit {
  store = inject(LiveOrdersStore);

  ngOnInit() {
    this.store.updateFilters({ searchQuery: '' });
    this.store.loadOrders();
  }
}
