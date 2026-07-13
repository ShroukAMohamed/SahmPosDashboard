import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order.interface';
import { OrderStatusUpdate } from '../../../core/models/order-status-update.interface';
import { ApiResponse } from '../../../core/types/api-response.type';
import { MockApiService } from '../../../core/mock-api/mock-api.service';

@Injectable({ providedIn: 'root' })
export class LiveOrdersService {
  private mockApi = inject(MockApiService);

  getLiveOrders(): Observable<ApiResponse<Order[]>> {
    return this.mockApi.getOrders();
  }

  updateOrderStatus(update: OrderStatusUpdate): Observable<ApiResponse<Order>> {
    return this.mockApi.updateOrderStatus(update);
  }
}
