import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { CartPanelComponent } from './cart-panel.component';

describe('CartPanelComponent', () => {
  let component: CartPanelComponent;
  let fixture: ComponentFixture<CartPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPanelComponent],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
