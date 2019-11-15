import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bs-search-component',
  templateUrl: './search-component.component.html'
})
export class SearchComponentComponent {
  constructor() {}

  @Input()
  termEmitter: EventEmitter<string>;
}
