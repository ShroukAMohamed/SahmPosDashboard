export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  unitPrice?: number;
  totalPrice?: number;
  modifiers?: string[];
}
