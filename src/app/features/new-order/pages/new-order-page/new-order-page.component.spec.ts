import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderPageComponent } from './new-order-page.component';

import { MessageService } from 'primeng/api';

describe('NewOrderPageComponent', () => {
  let component: NewOrderPageComponent;
  let fixture: ComponentFixture<NewOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrderPageComponent],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
