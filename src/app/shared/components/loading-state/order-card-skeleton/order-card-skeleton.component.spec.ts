import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCardSkeletonComponent } from './order-card-skeleton.component';

describe('OrderCardSkeletonComponent', () => {
  let component: OrderCardSkeletonComponent;
  let fixture: ComponentFixture<OrderCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCardSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
