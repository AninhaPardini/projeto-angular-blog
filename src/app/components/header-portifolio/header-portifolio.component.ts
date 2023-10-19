import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-portifolio',
  templateUrl: './header-portifolio.component.html',
  styleUrls: ['./header-portifolio.component.css']
})
export class HeaderPortifolioComponent implements OnInit {

  @Input()
  title:string = '';

  @Input()
  subtitle:string = '';

  @Input()
  image:string = '';

  constructor() {

  }

  ngOnInit() {
  }
}
