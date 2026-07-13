import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiInsightsGridComponent } from './ai-insights-grid.component';

describe('AiInsightsGridComponent', () => {
  let component: AiInsightsGridComponent;
  let fixture: ComponentFixture<AiInsightsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiInsightsGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiInsightsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
