import { BooksService } from './books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  SearchComponentComponent,
  BooksComponent,
  HeaderComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BooksComponent,
    HeaderComponent
  ],
  imports: [BrowserModule],
  providers: [
    // {
    //   provide: BooksService,
    //   useClass: BooksService
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
