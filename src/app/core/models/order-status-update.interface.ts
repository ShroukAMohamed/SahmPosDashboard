import { OrderStatus } from '../types/order-status.type';

export interface OrderStatusUpdate {
  orderId: string;
  previousStatus: OrderStatus;
  newStatus: OrderStatus;
  updatedAt: string;
}
