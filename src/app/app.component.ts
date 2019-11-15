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
  term$: EventEmitter<string> = new EventEmitter();
  constructor(private bs: BookService) {}

  ngOnInit(): void {
    this.books$ = merge(
      this.bs.getBooks(),
      this.bs.search(this.term$.asObservable())
    );
  }
}
