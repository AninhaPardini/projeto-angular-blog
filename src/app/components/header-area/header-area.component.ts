import { Component } from '@angular/core';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css']
})
export class HeaderAreaComponent {
  constructor() { }

  moveToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
