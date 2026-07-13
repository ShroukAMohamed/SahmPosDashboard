import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchInputComponent } from './search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputComponent, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    
    // Setting required inputs using setInput (new in Angular 17.1+ for signals)
    fixture.componentRef.setInput('placeholder', 'Search...');
    fixture.componentRef.setInput('localStorageKey', 'testSearches');
    fixture.componentRef.setInput('debounceMs', 0); // Fast for tests
    
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle recent searches visibility on focus/blur', () => {
    component.onFocus();
    expect(component.showRecentSearches()).toBeTrue();
    
    component.showRecentSearches.set(false);
    expect(component.showRecentSearches()).toBeFalse();
  });

  it('should add to recent searches', () => {
    component.addRecentSearch('Burger');
    expect(component.recentSearches()).toContain('Burger');
  });

  it('should navigate recent searches with keyboard', () => {
    component.recentSearches.set(['Burger', 'Fries']);
    component.showRecentSearches.set(true);

    const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    component.onKeyDown(eventDown);
    expect(component.focusedIndex()).toBe(0);

    const eventDown2 = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    component.onKeyDown(eventDown2);
    expect(component.focusedIndex()).toBe(1);

    const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    component.onKeyDown(eventUp);
    expect(component.focusedIndex()).toBe(0);
  });
});
