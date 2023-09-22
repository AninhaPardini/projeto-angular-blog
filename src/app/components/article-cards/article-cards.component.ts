import { Component } from '@angular/core';

@Component({
  selector: 'app-article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.css']
})
export class ArticleCardsComponent {
  title:string = 'Article Cards';
  description:string = 'This is the article cards component.';
  date:string = '2021-01-01 16:00:00';
  readMinutes:number = 1;

  constructor() {

  }
}
