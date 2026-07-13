import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Order } from '../../../core/models/order.interface';

export interface OrderInsight {
  type: 'warning' | 'info' | 'success';
  title: string;
  description: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class AiAssistantService {
  analyzeOrder(order: Order): Observable<OrderInsight[]> {
    // Simulate async network request
    // 10% chance to fail to simulate error state
    if (Math.random() < 0.1) {
      return throwError(() => new Error('AI Service temporarily unavailable')).pipe(delay(1500));
    }

    const insights: OrderInsight[] = [];

    // Rule 1: Missing beverage in combo
    const hasCombo = order.items.some(i => i.name.toLowerCase().includes('combo'));
    const hasBeverage = order.items.some(i => i.name.toLowerCase().includes('cola') || i.name.toLowerCase().includes('water') || i.name.toLowerCase().includes('sprite'));
    
    if (hasCombo && !hasBeverage) {
      insights.push({
        type: 'warning',
        title: 'Missing Beverage',
        description: 'Customer ordered a combo but no drink is selected. Upsell opportunity.',
        icon: 'local_drink'
      });
    }

    // Rule 2: High preparation delay warning
    if (order.status === 'PREPARING') {
      const placedTime = new Date(order.placedAt).getTime();
      const now = new Date().getTime();
      const diffMinutes = (now - placedTime) / (1000 * 60);
      
      if (diffMinutes > 15) {
        insights.push({
          type: 'warning',
          title: 'High Delay Warning',
          description: `Order has been preparing for ${Math.round(diffMinutes)} minutes.`,
          icon: 'timer'
        });
      }
    }

    // Rule 3: General Upsell
    if (order.items.length < 2 && order.totalAmount < 15) {
      insights.push({
        type: 'info',
        title: 'Upsell Opportunity',
        description: 'Suggest adding a side of fries or dessert.',
        icon: 'add_circle'
      });
    }

    if (insights.length === 0) {
      insights.push({
        type: 'success',
        title: 'All Looks Good',
        description: 'No anomalies detected for this order.',
        icon: 'check_circle'
      });
    }

    return of(insights).pipe(delay(1500));
  }
}
