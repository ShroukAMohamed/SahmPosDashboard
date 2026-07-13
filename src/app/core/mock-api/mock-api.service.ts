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
      description: 'Double beef, Fries, Drink',
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
      imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop'
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
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-6',
      name: 'Curly Fries',
      description: 'Seasoned curly fries',
      price: 4.50,
      category: ProductCategory.SIDE,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=600&auto=format&fit=crop'
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
      available: true,
    },
    {
      id: 'prod-9',
      name: 'BBQ Bacon Burger',
      description: 'Bacon, cheddar, crispy onions, BBQ sauce',
      price: 11.99,
      category: ProductCategory.BURGER,
      available: true,
    },
    {
      id: 'prod-10',
      name: 'Onion Rings',
      description: 'Crispy battered onion rings with ranch',
      price: 5.50,
      category: ProductCategory.SIDE,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-11',
      name: 'Sweet Potato Fries',
      description: 'Served with marshmallow dip',
      price: 5.00,
      category: ProductCategory.SIDE,
      available: true,
    },
    {
      id: 'prod-12',
      name: 'Iced Lemon Tea',
      description: 'Freshly brewed black tea with lemon',
      price: 3.50,
      category: ProductCategory.BEVERAGE,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-13',
      name: 'Craft Cola',
      description: 'Artisanal cane sugar cola',
      price: 3.00,
      category: ProductCategory.BEVERAGE,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-14',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center',
      price: 6.99,
      category: ProductCategory.DESSERT,
      available: true,
      imageUrl: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'prod-15',
      name: 'Vanilla Sundae',
      description: 'Soft serve with fudge and sprinkles',
      price: 4.50,
      category: ProductCategory.DESSERT,
      available: true,
    },
    {
      id: 'prod-16',
      name: 'Spicy Jalapeño Burger',
      description: 'Pepper jack, fresh jalapeños, chipotle mayo',
      price: 12.00,
      category: ProductCategory.BURGER,
      available: true,
      isSpicy: true,
      imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=600&auto=format&fit=crop'
    }
  ];

  private categories: Category[] = [
    { id: ProductCategory.COMBO, name: 'Combos', count: 4 },
    { id: ProductCategory.BURGER, name: 'Burgers', count: 4 },
    { id: ProductCategory.SIDE, name: 'Sides', count: 3 },
    { id: ProductCategory.BEVERAGE, name: 'Beverages', count: 3 },
    { id: ProductCategory.DESSERT, name: 'Desserts', count: 2 }
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

  healthCheck(): Observable<boolean> {
    // Simulates a backend health endpoint
    return of(true).pipe(delay(200));
  }

  // --- Orders API ---
  private loadOrdersFromStorage(): Order[] {
    const stored = sessionStorage.getItem('sahm_mock_orders');
    if (stored) {
      return JSON.parse(stored);
    }
    return [...this.orders];
  }

  private saveOrdersToStorage(orders: Order[]) {
    sessionStorage.setItem('sahm_mock_orders', JSON.stringify(orders));
  }

  getOrders(): Observable<ApiResponse<Order[]>> {
    const currentOrders = this.loadOrdersFromStorage();
    return of({
      success: true,
      data: currentOrders,
      meta: { totalItems: currentOrders.length }
    }).pipe(delay(800));
  }

  createOrder(order: Order): Observable<ApiResponse<Order>> {
    const currentOrders = this.loadOrdersFromStorage();

    // Check if it already exists (duplicate prevention on server side simulation)
    const existing = currentOrders.find(o => o.id === order.id);
    if (existing) {
      return of({ success: true, data: existing }).pipe(delay(1000));
    }

    // Simulate server-side persistence while keeping the passed temporary client-side ID
    // so the client can map it successfully, or generate a new one if client didn't provide.
    const newOrder = {
      ...order,
      id: order.id || `ord-${Date.now()}`,
      placedAt: order.placedAt || new Date().toISOString()
    };

    const newOrdersList = [newOrder, ...currentOrders];
    this.orders = newOrdersList;
    this.saveOrdersToStorage(newOrdersList);

    return of({
      success: true,
      data: newOrder
    }).pipe(delay(1000));
  }

  updateOrderStatus(update: OrderStatusUpdate): Observable<ApiResponse<Order>> {
    const currentOrders = this.loadOrdersFromStorage();
    const idx = currentOrders.findIndex(o => o.id === update.orderId);

    if (idx !== -1) {
      currentOrders[idx] = { ...currentOrders[idx], status: update.newStatus };
      this.orders = currentOrders;
      this.saveOrdersToStorage(currentOrders);
      return of({
        success: true,
        data: currentOrders[idx]
      }).pipe(delay(500));
    }
    return of({ success: false, error: 'Order not found' }).pipe(delay(500));
  }
}
