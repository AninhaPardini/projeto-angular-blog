import { Component } from '@angular/core';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css']
})
export class HeaderAreaComponent {
  constructor() { }

  moveToBottom() {
    const largura_tela = window.innerWidth;
    const elemento:any = document.getElementById('main');

    elemento.scrollIntoView();
  }

}

