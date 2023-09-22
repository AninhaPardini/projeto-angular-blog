import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.css']
})
export class ArticleCardsComponent implements OnInit{

  @Input()
  now:Date = new Date();
  @Input()
  title = '';
  @Input()
  description  = '';
  @Input()
  date:any = new Date();
  @Input()
  readMinutes = '';
  @Input()
  banner = '';


  constructor() {

  }


  ngOnInit(): void {
  }
}


