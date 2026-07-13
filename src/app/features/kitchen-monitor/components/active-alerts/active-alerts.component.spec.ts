import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAlertsComponent } from './active-alerts.component';

describe('ActiveAlertsComponent', () => {
  let component: ActiveAlertsComponent;
  let fixture: ComponentFixture<ActiveAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveAlertsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveAlertsComponent);
    component = fixture.componentInstance;
    
    fixture.componentRef.setInput('count', 0);
    fixture.componentRef.setInput('alerts', []);
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
