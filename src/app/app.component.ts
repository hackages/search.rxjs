import { BookService } from './services/books.service';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Book } from '../types/book';
import { books as mockBooks } from '../mocks/books';
import { Subscription, Observable, merge, of } from 'rxjs';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Bookstore by Nalys';
  books$: Observable<Book[]> = of([]);
  subscription: Subscription;
  termEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private bs: BookService, private searchService: SearchService) {}

  ngOnInit(): void {
    // this.books$ = merge(
    //   this.bs.getBooks(),
    //   this.searchService.search(this.termEmitter.asObservable())
    // );

    this.books$ = this.searchService.search(this.termEmitter.asObservable());
    // Use mock data
    // this.bs.getBooks().then(books => (this.books = books));
    // this.books$ = this.bs.getBooks();
  }

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  // search = (term: string) => {
  //   this.books$ = this.searchService.search(term);
  // };
}
