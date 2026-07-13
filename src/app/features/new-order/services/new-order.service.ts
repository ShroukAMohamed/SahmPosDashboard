import { Injectable, inject } from '@angular/core';
import { MockApiService } from '../../../core/mock-api/mock-api.service';
import { Order } from '../../../core/models/order.interface';

@Injectable({ providedIn: 'root' })
export class NewOrderService {
  private mockApi = inject(MockApiService);

  getProductsAndCategories() {
    return this.mockApi.getProducts();
  }

  submitOrder(order: Order) {
    return this.mockApi.createOrder(order);
  }
}
