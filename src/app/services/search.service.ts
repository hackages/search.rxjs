import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class SearchService {
  searchByTitleUrl = 'app/books/?title=';
  constructor(private http: HttpClient) {}

  search(term: Observable<string>): Observable<Book[]> {
    throw new Error('Oops. Not yet implemented...');
  }
}
