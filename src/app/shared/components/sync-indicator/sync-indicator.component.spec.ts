import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncIndicatorComponent } from './sync-indicator.component';

describe('SyncIndicatorComponent', () => {
  let component: SyncIndicatorComponent;
  let fixture: ComponentFixture<SyncIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
