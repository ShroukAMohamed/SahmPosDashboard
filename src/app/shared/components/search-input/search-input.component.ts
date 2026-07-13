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
  }

  clearRecentSearches() {
    this.recentSearches.set([]);
    localStorage.removeItem(this.localStorageKey());
  }
}
