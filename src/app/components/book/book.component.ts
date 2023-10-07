import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input()
  cover: string = 'https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg';
  @Input()
  title: string = 'A revolução dos bixos';
  @Input()
  note: string = '';
  @Input()
  status: number = 10;

  constructor() {

  }

}
