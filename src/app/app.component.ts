import { BookService } from './services/books.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Book } from '../types/book';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Bookstore By Hackages Lab';
  books$: Observable<Book[]> = of([]);
  constructor(private bs: BookService) {}
  // term$: Subject<string> = new Subject();
  term$: Subject<string> = new BehaviorSubject('');

  ngOnInit(): void {
    // this.books$ = merge(this.bs.getBooks(), this.bs.search(this.term$));
    this.books$ = this.bs.search(this.term$);
  }
}
