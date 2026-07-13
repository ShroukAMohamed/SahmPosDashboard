import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderStore } from '../../state/new-order.store';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchInputComponent } from '../../../../shared/components/search-input/search-input.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SearchInputComponent, SkeletonModule],
  templateUrl: './product-catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogComponent {
  store = inject(NewOrderStore);

  onSearch(query: string) {
    this.store.setSearchQuery(query);
  }
}
