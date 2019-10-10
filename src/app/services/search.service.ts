import { Book } from './../../types/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchService {
  searchByTitleUrl = 'app/books/?title=';
  constructor(private http: HttpClient) {}

  search(term$: Observable<string>): Observable<Book[]> {
    return term$.pipe(
      startWith(''),
      switchMap(term => this.http.get<Book[]>(this.searchByTitleUrl + term))
    );
  }
}
