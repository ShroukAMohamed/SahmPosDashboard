import { OrderChannel } from '../types/order-channel.type';
import { OrderStatus } from '../types/order-status.type';
import { UrgencyLevel } from '../types/urgency-level.type';
import { OrderItem } from './order-item.interface';

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  status: OrderStatus;
  channel: OrderChannel;
  urgency: UrgencyLevel;
  items: OrderItem[];
  placedAt: string;
  totalAmount: number;
}
