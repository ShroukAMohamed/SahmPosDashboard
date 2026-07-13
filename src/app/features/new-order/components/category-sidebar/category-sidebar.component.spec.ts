import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySidebarComponent } from './category-sidebar.component';

import { MessageService } from 'primeng/api';

describe('CategorySidebarComponent', () => {
  let component: CategorySidebarComponent;
  let fixture: ComponentFixture<CategorySidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySidebarComponent],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
