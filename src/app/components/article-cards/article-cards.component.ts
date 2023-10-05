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
  title:string = '';
  @Input()
  description:string  = '';
  @Input()
  date:any = new Date();
  @Input()
  readMinutes:string = '';
  @Input()
  banner:string = '';
  @Input()
  id:string = '0';


  constructor() {

  }


  ngOnInit(): void {
  }
}


