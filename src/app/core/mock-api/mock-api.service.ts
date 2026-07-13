import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { Order } from '../models/order.interface';
import { ProductCategory } from '../enums/product-category.enum';
import { OrderStatusUpdate } from '../models/order-status-update.interface';
import { ApiResponse } from '../types/api-response.type';

@Injectable({ providedIn: 'root' })
export class MockApiService {

  private products: Product[] = [
    {
      id: 'prod-1',
      name: 'Classic Double Combo',
      description: 'Burger, Fries, Drink',
      price: 14.99,
      category: ProductCategory.COMBO,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-2',
      name: 'Spicy Crispy Combo',
      description: 'Chicken, Fries, Drink',
      price: 13.49,
      category: ProductCategory.COMBO,
      available: true,
      isSpicy: true,
      imageUrl: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-3',
      name: 'Veggie Supreme Combo',
      description: 'Plant-based, Salad, Drink',
      price: 15.99,
      category: ProductCategory.COMBO,
      available: true,
      imageUrl: '' // will fallback to icon
    },
    {
      id: 'prod-4',
      name: '10pc Nugget Combo',
      description: 'Nuggets, Fries, Drink',
      price: 11.99,
      category: ProductCategory.COMBO,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-5',
      name: 'Truffle Burger',
      description: 'Truffle mayo, mushrooms, swiss cheese',
      price: 12.50,
      category: ProductCategory.BURGER,
      available: true
    },
    {
      id: 'prod-6',
      name: 'Curly Fries',
      description: 'Seasoned curly fries',
      price: 4.50,
      category: ProductCategory.SIDE,
      available: true
    },
    {
      id: 'prod-7',
      name: 'Spicy Chicken Wrap',
      description: 'Crispy chicken, spicy sauce, lettuce',
      price: 8.99,
      category: ProductCategory.BURGER,
      available: true,
      isSpicy: true
    },
    {
      id: 'prod-8',
      name: 'Milkshake',
      description: 'Vanilla, Chocolate, or Strawberry',
      price: 5.00,
      category: ProductCategory.BEVERAGE,
      available: true
    }
  ];

  private categories: Category[] = [
    { id: ProductCategory.COMBO, name: 'Combos', count: 4 },
    { id: ProductCategory.BURGER, name: 'Burgers', count: 2 },
    { id: ProductCategory.SIDE, name: 'Sides', count: 1 },
    { id: ProductCategory.BEVERAGE, name: 'Beverages', count: 1 },
    { id: ProductCategory.DESSERT, name: 'Desserts', count: 0 }
  ];

  private orders: Order[] = [
    {
      id: 'ord-101',
      orderNumber: '#1042',
      customerName: 'Sarah Jenkins',
      status: 'RECEIVED',
      channel: 'WALK_IN',
      urgency: 'CRITICAL',
      placedAt: new Date(Date.now() - 300000).toISOString(),
      totalAmount: 42.50,
      items: [
        { id: 'item-1', productId: 'prod-5', name: 'Truffle Burger', quantity: 2, modifiers: ['Extra Cheese'] },
        { id: 'item-2', productId: 'prod-6', name: 'Curly Fries', quantity: 1 }
      ]
    },
    {
      id: 'ord-102',
      orderNumber: '#1043',
      customerName: 'Mike Ross',
      status: 'PREPARING',
      channel: 'DELIVERY',
      urgency: 'NORMAL',
      placedAt: new Date(Date.now() - 600000).toISOString(),
      totalAmount: 28.00,
      items: [
        { id: 'item-3', productId: 'prod-7', name: 'Spicy Chicken Wrap', quantity: 1 }
      ]
    },
    {
      id: 'ord-103',
      orderNumber: '#1044',
      customerName: 'Rachel Zane',
      status: 'READY',
      channel: 'ONLINE',
      urgency: 'URGENT',
      placedAt: new Date(Date.now() - 1200000).toISOString(),
      totalAmount: 65.00,
      items: [
        { id: 'item-4', productId: 'prod-5', name: 'Truffle Burger', quantity: 1 },
        { id: 'item-5', productId: 'prod-8', name: 'Milkshake', quantity: 2 }
      ]
    }
  ];

  // --- Products API ---
  getProducts(): Observable<ApiResponse<{ products: Product[], categories: Category[] }>> {
    return of({
      success: true,
      data: {
        products: [...this.products],
        categories: [...this.categories]
      }
    }).pipe(delay(600));
  }

  // --- Orders API ---
  getOrders(): Observable<ApiResponse<Order[]>> {
    return of({
      success: true,
      data: [...this.orders],
      meta: { totalItems: this.orders.length }
    }).pipe(delay(800));
  }

  createOrder(order: Order): Observable<ApiResponse<Order>> {
    // Simulate server-side ID generation and persistence
    const newOrder = {
      ...order,
      id: `ord-${Date.now()}`,
      placedAt: new Date().toISOString()
    };
    
    // Push to mock DB
    this.orders = [newOrder, ...this.orders];
    
    // Simulate rare API failure randomly for robust testing? 
    // We'll just succeed to keep the flow smooth, unless you want intentional errors.
    return of({
      success: true,
      data: newOrder
    }).pipe(delay(1000));
  }

  updateOrderStatus(update: OrderStatusUpdate): Observable<ApiResponse<Order>> {
    const idx = this.orders.findIndex(o => o.id === update.orderId);
    if (idx !== -1) {
      this.orders[idx] = { ...this.orders[idx], status: update.newStatus };
      return of({
        success: true,
        data: this.orders[idx]
      }).pipe(delay(500));
    }
    return of({ success: false, error: 'Order not found' }).pipe(delay(500));
  }
}
