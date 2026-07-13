import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationCapacityComponent } from './station-capacity.component';

describe('StationCapacityComponent', () => {
  let component: StationCapacityComponent;
  let fixture: ComponentFixture<StationCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationCapacityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationCapacityComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('station', {
      id: '1',
      name: 'Test Station',
      icon: 'test',
      currentLoad: 0,
      maxCapacity: 10,
      status: 'NORMAL',
      pendingItems: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
