import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../../core/models/product.model';
import { HighlightPipe } from '../../../../shared/pipes/highlight.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, HighlightPipe],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
  searchQuery = input<string>('');
  add = output<Product>();

  onAdd() {
    this.add.emit(this.product());
  }
}
