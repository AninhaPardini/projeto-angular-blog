import { Component } from '@angular/core';

interface Experiences {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  date: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  protected setor: string = '';

  public listExperiences: Experiences[] = [
    { title: 'Front-end Developer', subtitle: 'Freelancer', description: 'loren ipsun', image: 'assets/images/experiences/1.png', date: '04/04/2020'},
    { title: 'Front-end Developer', subtitle: 'Freelancer', description: 'loren ipsun', image: 'assets/images/experiences/1.png', date: '04/04/2020'},
    { title: 'Front-end Developer', subtitle: 'Freelancer', description: 'loren ipsun', image: 'assets/images/experiences/1.png', date: '04/04/2020'},

  ]
}

