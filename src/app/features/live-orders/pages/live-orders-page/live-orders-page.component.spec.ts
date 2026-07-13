import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveOrdersPageComponent } from './live-orders-page.component';

describe('LiveOrdersPageComponent', () => {
  let component: LiveOrdersPageComponent;
  let fixture: ComponentFixture<LiveOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveOrdersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
