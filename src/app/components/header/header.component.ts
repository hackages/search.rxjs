import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() title: string;
}
