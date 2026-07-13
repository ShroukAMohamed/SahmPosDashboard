import { Component, ChangeDetectionStrategy, input, output, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, OnDestroy {
  placeholder = input<string>('Search...');
  localStorageKey = input<string>('recentSearches');
  debounceMs = input<number>(300);
  
  search = output<string>();

  searchControl = new FormControl('');
  recentSearches = signal<string[]>([]);
  showRecentSearches = signal<boolean>(false);
  focusedIndex = signal<number>(-1);

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(this.debounceMs()),
      takeUntil(this.destroy$)
    ).subscribe(value => {
      const query = value || '';
      this.search.emit(query);
      if (query && !this.recentSearches().includes(query)) {
        this.addRecentSearch(query);
      }
    });

    const storedSearches = localStorage.getItem(this.localStorageKey());
    if (storedSearches) {
      this.recentSearches.set(JSON.parse(storedSearches));
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onKeyDown(event: KeyboardEvent) {
    if (!this.showRecentSearches() || this.recentSearches().length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusedIndex.update(i => Math.min(i + 1, this.recentSearches().length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusedIndex.update(i => Math.max(i - 1, -1));
    } else if (event.key === 'Enter') {
      if (this.focusedIndex() >= 0) {
        event.preventDefault();
        this.selectRecentSearch(this.recentSearches()[this.focusedIndex()]);
      }
    } else if (event.key === 'Escape') {
      this.showRecentSearches.set(false);
      this.focusedIndex.set(-1);
    }
  }

  onFocus() {
    this.showRecentSearches.set(true);
    this.focusedIndex.set(-1);
  }

  addRecentSearch(query: string) {
    this.recentSearches.update(searches => {
      const newSearches = [query, ...searches].slice(0, 5); // Keep last 5
      localStorage.setItem(this.localStorageKey(), JSON.stringify(newSearches));
      return newSearches;
    });
  }

  selectRecentSearch(query: string) {
    this.searchControl.setValue(query);
    this.showRecentSearches.set(false);
    this.focusedIndex.set(-1);
  }

  clearRecentSearches() {
    this.recentSearches.set([]);
    localStorage.removeItem(this.localStorageKey());
    this.focusedIndex.set(-1);
  }
}
