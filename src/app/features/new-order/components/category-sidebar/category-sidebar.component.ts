import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderStore } from '../../state/new-order.store';

@Component({
  selector: 'app-category-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySidebarComponent {
  store = inject(NewOrderStore);
}
