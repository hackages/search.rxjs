import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'bs-search-component',
  templateUrl: './search-component.component.html'
})
export class SearchComponentComponent {
  constructor() {}

  @Input()
  termEmitter: Subject<string>;
}
