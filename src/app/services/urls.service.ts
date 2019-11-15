import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = new InjectionToken('SearchByTitleUrl', {
  providedIn: 'root',
  factory: () => 'app/books/?title='
});

export const BooksUrl = new InjectionToken('bookUrl', {
  providedIn: 'root',
  factory: () => 'app/books'
});
