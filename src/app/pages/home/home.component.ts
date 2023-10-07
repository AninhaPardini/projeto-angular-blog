import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const controls: NodeListOf<Element> = document.querySelectorAll(".control");
    let currentItem: number = 0;
    const items: NodeListOf<Element> = document.querySelectorAll(".item");
    const maxItems: number = items.length;

    controls.forEach((control: Element) => {
      control.addEventListener("click", (e: Event) => {
        let isLeft: boolean = (e.target as Element).classList.contains("arrow-left");

        if (isLeft) {
          currentItem -= 1;
        } else {
          currentItem += 1;
        }

        if (currentItem >= maxItems) {
          currentItem = 0;
        }

        if (currentItem < 0) {
          currentItem = maxItems - 1;
        }

        items.forEach((item: Element) => item.classList.remove("current-item"));

        (items[currentItem] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });

        items[currentItem].classList.add("current-item");
      });
    });

  }
}
