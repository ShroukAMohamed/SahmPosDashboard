import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveOrdersStore } from '../../state/live-orders.store';
import { OrderChannel } from '../../../../core/types/order-channel.type';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';

@Component({
  selector: 'app-order-filters',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  templateUrl: './order-filters.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./order-filters.component.scss']
})
export class OrderFiltersComponent {
  store = inject(LiveOrdersStore);

  channels: { label: string, value: OrderChannel | 'ALL' }[] = [
    { label: 'All', value: 'ALL' },
    { label: 'Walk-in', value: 'WALK_IN' },
    { label: 'Delivery', value: 'DELIVERY' },
    { label: 'Online', value: 'ONLINE' }
  ];

  onSearch(query: string) {
    this.store.updateFilters({ searchQuery: query });
  }

  onChannelSelect(channel: OrderChannel | 'ALL') {
    this.store.updateFilters({ channel });
  }
}
