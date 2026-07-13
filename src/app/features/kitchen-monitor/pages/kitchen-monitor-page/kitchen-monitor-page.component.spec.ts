import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenMonitorPageComponent } from './kitchen-monitor-page.component';

describe('KitchenMonitorPageComponent', () => {
  let component: KitchenMonitorPageComponent;
  let fixture: ComponentFixture<KitchenMonitorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KitchenMonitorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenMonitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
