import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  sidebar: boolean = false;

  constructor(){}

  ngOnInit(): void {

  }

  public toggleMenu(): void {
    this.sidebar = !this.sidebar;
    const elementoS:any = document.getElementById("sidebar");
    const elementoB:any = document.getElementById("burguer");
    if(this.sidebar){
      elementoS.classList.add("active");
      elementoB.style.display = "none";
    } else {
      elementoS.classList.remove("active");
      elementoB.style.display = "block";
    }
    console.log(this.sidebar);
  }


}
