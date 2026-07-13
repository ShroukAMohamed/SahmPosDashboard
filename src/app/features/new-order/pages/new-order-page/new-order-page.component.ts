import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorySidebarComponent } from '../../components/category-sidebar/category-sidebar.component';
import { ProductCatalogComponent } from '../../components/product-catalog/product-catalog.component';
import { CartPanelComponent } from '../../components/cart-panel/cart-panel.component';
import { NewOrderStore } from '../../state/new-order.store';

@Component({
  selector: 'app-new-order-page',
  standalone: true,
  imports: [
    CommonModule, 
    CategorySidebarComponent, 
    ProductCatalogComponent, 
    CartPanelComponent
  ],
  templateUrl: './new-order-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewOrderPageComponent implements OnInit {
  private store = inject(NewOrderStore);

  ngOnInit() {
    this.store.loadProducts();
  }
}
