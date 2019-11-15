import { Injectable, Inject } from '@angular/core';
import { BooksUrl, SearchByTitleUrl } from './urls.service';
import { Book } from './../../types/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookService {
  constructor(
    private http: HttpClient,
    @Inject(BooksUrl) private booksUrl: string,
    @Inject(SearchByTitleUrl) private searchByTitleUrl: string
  ) {}

  // Gets all the books from our mock server
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  // Implement the search by passing an observable as argument
  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      // startWith(''),
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term))
    );
  }

  // Gets a book by its id from our mock server
  getBook(id: number): Observable<Book> {
    throw new Error('Oops. Not yet implemented...');
  }
}
