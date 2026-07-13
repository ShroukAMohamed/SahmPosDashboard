export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  modifiers?: string[];
}
