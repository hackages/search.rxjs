import { BookService } from './services/books.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Book } from '../types/book';
import { Observable, of, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Bookstore By Hackages Lab';
  books$: Observable<Book[]> = of([]);
  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bs.getBooks();
  }

  search(term: string) {
    this.books$ = this.bs.search(of(term));
  }
}
