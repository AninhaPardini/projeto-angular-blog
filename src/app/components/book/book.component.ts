import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

interface BookList {
    cover: string;
    title: string;
    note: string;
    status: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public books: BookList[] = [
    {
      cover: "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg",
      title: "A revolução dos bixos",
      note: "4",
      status: "20%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/71QkHuZFf8L._SY466_.jpg",
      title: "14 Hábitos de Desenvol-vedores Altamente Produtivos",
      note: "5",
      status: "60%"
    },

  ];

  constructor() {


  }

  ngOnInit(): void {

  };


}
