import { Component, OnInit } from '@angular/core';

interface SocialLink {
    icon: string;
    name: string;
    link: string;
}

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
    public socialOpen: boolean = false;
    public listSocial: SocialLink[] = [
        {icon: 'behance.png', name: 'Github', link: 'https://www.github.com/AninhaPardini'},
        {icon: 'dev.to.png', name: 'LinkedIn', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7114995026870333440/'},
        {icon: 'github.png', name: 'Instagram', link: 'https://www.instagram.com/analuizapardini'},
        {icon: 'insta.png', name: 'Behance', link: 'https://www.behance.net/anapardini'},
        {icon: 'linkedin.png', name: 'dev.to', link: 'https://dev.to/aninhapardini'},
        {icon: 'medium.png', name: 'Medium', link: 'https://medium.com/@aninhapardini.contato'},

    ];

    ngOnInit(): void {

    }

    toggleSocial() {
      this.socialOpen = !this.socialOpen;
    }


}
