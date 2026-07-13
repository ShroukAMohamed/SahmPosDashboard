import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardComponent } from './order-card.component';

describe('OrderCardComponent', () => {
  let component: OrderCardComponent;
  let fixture: ComponentFixture<OrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('order', {
      id: '1',
      orderNumber: '123',
      customerName: 'Test Customer',
      status: 'RECEIVED',
      channel: 'DINE_IN',
      urgency: 'NORMAL',
      totalAmount: 100,
      placedAt: new Date().toISOString(),
      items: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
