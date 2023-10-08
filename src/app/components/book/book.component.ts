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
    {
      cover: "https://m.media-amazon.com/images/I/51lRMYwP-4L._SY445_SX342_.jpg",
      title: "Harry Potter e a Pedra Filosofal",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/81D+5aMHzFL._SY466_.jpg",
      title: "Harry Potter e a Câmara Secreta",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/515TcMeZStL._SY445_SX342_.jpg",
      title: "Harry Potter e o Prisioneiro de Azkaban",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/51DDABrpU5L._SY445_SX342_.jpg",
      title: "Harry Potter e o Cálice de Fogo",
      note: "5",
      status: "80%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/81tPk-uLv7L._SY466_.jpg",
      title: "O Último Desejo",
      note: "0",
      status: "10%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/51feD87yuEL._SY445_SX342_.jpg",
      title: "1984",
      note: "3",
      status: "40%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/91U9VjiT-xL._SY466_.jpg",
      title: "O mundo de Sofia",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/817gkSx9uHL._SY466_.jpg",
      title: "Cartas de amor aos mortos",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/41yToN1cOML._SY445_SX342_.jpg",
      title: "A culpa é das estrelas",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/61x1ZHomWUL._SY466_.jpg",
      title: "Dom Casmurro",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/41UKpOWrZVL._SY445_SX342_.jpg",
      title: "A Guerra dos Tronos : As Crônicas de Gelo e Fogo",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/91PglZzF9kL._SY466_.jpg",
      title: "A fúria dos reis: As Crônicas de Gelo e Fogo",
      note: "5",
      status: "100%"
    },
    {
      cover: "https://m.media-amazon.com/images/I/51lbSoFZYwL._SY445_SX342_.jpg",
      title: "A tormenta de espadas: As Crônicas de Gelo e Fogo",
      note: "5",
      status: "100%"
    },

  ];

  constructor() {


  }

  ngOnInit(): void {

  };


}
