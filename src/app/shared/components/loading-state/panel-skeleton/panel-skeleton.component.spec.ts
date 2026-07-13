import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSkeletonComponent } from './panel-skeleton.component';

describe('PanelSkeletonComponent', () => {
  let component: PanelSkeletonComponent;
  let fixture: ComponentFixture<PanelSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
