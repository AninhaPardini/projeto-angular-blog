import { Component, OnInit } from '@angular/core';
import { CarouselCaptionComponent } from '@coreui/angular';
import { timeout } from 'rxjs';
import { NodeEventHandler } from 'rxjs/internal/observable/fromEvent';

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
        e.preventDefault();

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
          block: "nearest",
          behavior: "smooth",
          inline: "center",

        });

        items[currentItem].classList.add("current-item");
      });
    });

    // como eu faço para o código capturar o document depois de ser carregado?
    // eu tentei usar o document.addEventListener("DOMContentLoaded", () => {}) mas não funcionou

    document.addEventListener("DOMContentLoaded", () => {

      const carrousel:any = document.querySelector(".container__articles__wrapper");

      let isDragStart:boolean = false, prevPageX:number, prevScrollLeft:number, positionDiff:number;

/*       const autoSlide = () => {
        positionDiff = Math.abs(positionDiff);
        let firstItem:any = 256 + 14;

        let valDifference = Math.abs(firstItem - positionDiff);

        if(carrousel.scrollLeft > prevScrollLeft){
          return carrousel.scrollLeft += positionDiff > firstItem ? valDifference : -positionDiff;
        }
        carrousel.scrollLeft -= positionDiff > firstItem / 3 ? valDifference : -positionDiff;
      } */

      const dragStart = (e:any) => {
        isDragStart = true;
        console.log(e);
        prevPageX = e.pageX || e.touches[0]?.clientX;
        prevScrollLeft = carrousel.scrollLeft;
      }

      const dragging = (e:any) => {
        if(!isDragStart) return;
        e.preventDefault();
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carrousel.scrollLeft = prevScrollLeft - positionDiff;
      }

      const dragStop = (e:any) => {
        isDragStart = false;
       /*  autoSlide(); */
      }

      carrousel.addEventListener("mousedown", dragStart);
      carrousel.addEventListener("touchstart", dragStart);

      carrousel.addEventListener("mousemove", dragging);
      carrousel.addEventListener("touchmove", dragging);

      carrousel.addEventListener("mouseup", dragStop);
      carrousel.addEventListener("mouseleave", dragStop);
      carrousel.addEventListener("touchend", dragStart);

    });

  }
}
