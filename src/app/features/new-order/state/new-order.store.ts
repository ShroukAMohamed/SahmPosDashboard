import { Injectable, signal, computed, inject } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { Category } from '../../../core/models/category.model';
import { ProductCategory } from '../../../core/enums/product-category.enum';
import { NewOrderService } from '../services/new-order.service';
import { MessageService } from 'primeng/api';
import { Order } from '../../../core/models/order.interface';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  modifiers?: { name: string; price: number; type: 'add' | 'remove' }[];
}

@Injectable({ providedIn: 'root' })
export class NewOrderStore {
  private newOrderService = inject(NewOrderService);
  private messageService = inject(MessageService);

  // State
  private readonly _categories = signal<Category[]>([]);
  private readonly _products = signal<Product[]>([]);
  private readonly _activeCategoryId = signal<ProductCategory>(ProductCategory.COMBO);
  private readonly _searchQuery = signal<string>('');
  private readonly _cart = signal<CartItem[]>([]);
  
  private readonly _isLoading = signal<boolean>(false);
  private readonly _isSubmitting = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  // Public Getters
  readonly categories = this._categories.asReadonly();
  readonly activeCategoryId = this._activeCategoryId.asReadonly();
  readonly searchQuery = this._searchQuery.asReadonly();
  readonly cart = this._cart.asReadonly();
  readonly isLoading = this._isLoading.asReadonly();
  readonly isSubmitting = this._isSubmitting.asReadonly();
  readonly error = this._error.asReadonly();

  readonly filteredProducts = computed(() => {
    const q = this.searchQuery().toLowerCase();
    const catId = this.activeCategoryId();
    
    return this._products().filter(p => {
      const matchCat = p.category === catId;
      const matchSearch = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchCat && (q ? matchSearch : true);
    });
  });

  readonly cartSubtotal = computed(() => {
    return this._cart().reduce((sum, item) => {
      let itemTotal = item.product.price;
      item.modifiers?.forEach(m => itemTotal += m.price);
      return sum + (itemTotal * item.quantity);
    }, 0);
  });

  readonly cartTax = computed(() => this.cartSubtotal() * 0.08);
  readonly cartTotal = computed(() => this.cartSubtotal() + this.cartTax());

  // Actions
  loadProducts() {
    this._isLoading.set(true);
    this._error.set(null);
    this.newOrderService.getProductsAndCategories().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this._products.set(res.data.products);
          this._categories.set(res.data.categories);
          if (res.data.categories.length > 0) {
             this._activeCategoryId.set(res.data.categories[0].id);
          }
        } else {
          this._error.set(res.error || 'Failed to load products');
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load catalog' });
        }
        this._isLoading.set(false);
      },
      error: (err) => {
        this._error.set('Network Error');
        this._isLoading.set(false);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Network error while loading catalog' });
      }
    });
  }

  setActiveCategory(id: ProductCategory) {
    this._activeCategoryId.set(id);
  }

  setSearchQuery(query: string) {
    this._searchQuery.set(query);
  }

  addToCart(product: Product) {
    this._cart.update(cart => {
      const existing = cart.find(i => i.product.id === product.id);
      if (existing) {
        return cart.map(i => i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...cart, { 
        id: crypto.randomUUID(), 
        product, 
        quantity: 1 
      }];
    });
  }

  updateQuantity(itemId: string, delta: number) {
    this._cart.update(cart => {
      return cart.map(item => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  }

  removeFromCart(itemId: string) {
    this._cart.update(cart => cart.filter(i => i.id !== itemId));
  }

  clearCart() {
    this._cart.set([]);
  }

  submitOrder(order: Order, onSuccess: () => void) {
    this._isSubmitting.set(true);
    this.newOrderService.submitOrder(order).subscribe({
      next: (res) => {
        this._isSubmitting.set(false);
        if (res.success) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order sent to kitchen' });
          this.clearCart();
          onSuccess();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.error || 'Failed to submit order' });
        }
      },
      error: () => {
        this._isSubmitting.set(false);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Network error while submitting order' });
      }
    });
  }
}
