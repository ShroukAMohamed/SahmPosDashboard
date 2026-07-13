import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewOrderStore } from '../../state/new-order.store';
import { LiveOrdersStore } from '../../../live-orders/state/live-orders.store';
import { Order } from '../../../../core/models/order.interface';
import { OrderStatus } from '../../../../core/types/order-status.type';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPanelComponent {
  store = inject(NewOrderStore);
  liveOrdersStore = inject(LiveOrdersStore);
  router = inject(Router);

  onSendToKitchen() {
    const cart = this.store.cart();
    if (cart.length === 0) return;

    // Convert CartItems to OrderItems
    const items = cart.map(cartItem => ({
      id: cartItem.id,
      productId: cartItem.product.id,
      name: cartItem.product.name,
      quantity: cartItem.quantity,
      unitPrice: cartItem.product.price,
      totalPrice: cartItem.product.price * cartItem.quantity,
      modifiers: cartItem.modifiers ? cartItem.modifiers.map(m => m.name) : []
    }));

    // Create a new Order payload in RECEIVED status
    const newOrder: Order = {
      id: crypto.randomUUID(), // Temporary client-side ID
      orderNumber: `#${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'Walk-in Customer',
      channel: 'WALK_IN',
      status: 'RECEIVED' as OrderStatus,
      urgency: 'NORMAL',
      items: items,
      totalAmount: this.store.cartTotal(),
      placedAt: new Date().toISOString()
    };

    // Use LiveOrdersStore for optimistic update and offline queueing
    this.liveOrdersStore.addOrder(newOrder);
    this.store.clearCart();
    this.router.navigate(['/live-orders']);
  }
}
