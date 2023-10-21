import { Component, Input, OnInit } from '@angular/core';

interface Experiences {
  company: {
    name: string;
    link: string;
  }
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
export class ExperiencesComponent implements OnInit {
  @Input()
  setor: string = '';


  public listExperiencesD: Experiences[] = [
    {company: {name: 'Warlocks', link: 'https://warlocks.tech'}, title: 'UX IU Institucional', subtitle: 'PJ', description: 'Apliquei métodos como desk research e benchmark para entender os concorrentes e público, além de trabalhar com a construção da identidade de produto (branding) do principal produto da empresa o bot de informações e bolão de futebol Ginga. E por fim desenvolvi o UX/UI do site do mesmo. Utilizei as ferramentas Figma e Photoshop.', image: 'https://media.licdn.com/dms/image/C4D0BAQGsUsiBca_fug/company-logo_200_200/0/1660851116765?e=1705536000&v=beta&t=Xk_KY-SJAwtPdb4fbuz2TCeUxzd0qIWbYOgQM0jMEmk', date: '10/11/22 - 20/03/2023'},
    {company: {name: 'oBoticário', link: 'https://discord.gg/heroinas'}, title: 'Designer e UX UI de Fluxos no Discord', subtitle: 'Freelancer', description: 'Dentro do servidor oficial das Heroínas do Game trabalhei com peças de arte para os eventos e também auxiliei em fluxos para facilitar a navegação dos usuários, além de prestar serviços como Community Specialist. Utilizei ferramentas como figma, photoshop, ferramentas nativas para edição de embeds dentro do Discord e edição de texto.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FRR5kZPzj9mfeEnIasymrlN7RIK7JP1I8g&usqp=CAU', date: '01/11/22 - 25/02/2023'},
    {company: {name: 'SBT Games', link: 'https://discord.gg/UVV8BStB'}, title: 'Designer e UX UI de Fluxos no Discord', subtitle: 'Freelancer', description: 'Fui a principal construtora do servidor, sendo instruída por um gestor para poder atender as categorias que o cliente deseja, além de definir como deixar visuamente agradável cada espaço, utilizei as ferramentas nativas para edição de embeds do Discord e bots para me auxiliar nos fluxos.', image: 'data:image/jpeg;base64,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', date: '10/09/22 - 31/12/2022'},
  ]

  public listExperiencesP: Experiences[] = [
/*     {company: {name: 'Warlocks', link: 'https://warlocks.tech'}, title: 'Product Manager', subtitle: 'PJ', description: 'loren ipsun', image: 'https://media.licdn.com/dms/image/C4D0BAQGsUsiBca_fug/company-logo_200_200/0/1660851116765?e=1705536000&v=beta&t=Xk_KY-SJAwtPdb4fbuz2TCeUxzd0qIWbYOgQM0jMEmk', date: '01/11/23 - atual'}, */
    {company: {name: 'Warlocks', link: 'https://warlocks.tech'}, title: 'Product Owner', subtitle: 'PJ', description: 'Atuo como junior no gerenciamento do principal projeto da empresa, o bot de informação e bolão futebolistico, Ginga, nele trabalho no método Agil Scrum e produzo relatórios de métricas do projeto, insights em cima das mesmas, faço 1x1 com usuários mais engajados, converso com stakeholders, organizo o backlog com o aplicativo Linear e defino metas, próximos passos, prioridades e construo as histórias de usuários, além de estar sempre presente para equipe tirar dúvidas.', image: 'https://media.licdn.com/dms/image/C4D0BAQGsUsiBca_fug/company-logo_200_200/0/1660851116765?e=1705536000&v=beta&t=Xk_KY-SJAwtPdb4fbuz2TCeUxzd0qIWbYOgQM0jMEmk', date: '01/01/23 - 31/10/2023'},
  ]

  public listExperiencesDd: Experiences[] = [
    {company: {name: 'Warlocks', link: 'https://warlocks.tech'}, title: 'Front-end Developer', subtitle: 'Freelancer', description: 'Construi o site institucional do produto principal da empresa, chamado Ginga, desenvolvi no início com html, css e javascript, mas agora estou trabalhando em recriar o site com o framework Nextjs', image: 'https://media.licdn.com/dms/image/C4D0BAQGsUsiBca_fug/company-logo_200_200/0/1660851116765?e=1705536000&v=beta&t=Xk_KY-SJAwtPdb4fbuz2TCeUxzd0qIWbYOgQM0jMEmk', date: '01/04/2023 - 31/08/2023'},
    {company: {name: 'Warlocks', link: 'https://warlocks.tech'}, title: 'Back-end Developer', subtitle: 'Freelancer', description: 'Desenvolvi um bot para auxiliar no fluxo de FAQ e coleta de feedbacks dentro do servidor do Discord da empresa, onde utilizei as linguagens Nodejs e Javascript além de aplicar os conceitos de Organização de pastas mais indicada. O repositório base está público junto com o link do servidor dentro do meu github.', image: 'https://media.licdn.com/dms/image/C4D0BAQGsUsiBca_fug/company-logo_200_200/0/1660851116765?e=1705536000&v=beta&t=Xk_KY-SJAwtPdb4fbuz2TCeUxzd0qIWbYOgQM0jMEmk', date: '01/04/2023 - 31/09/2023'},
    {company: {name: 'Fullcycle', link: 'https://fullcycle.com.br/'}, title: 'API de Arquivos com Nestjs', subtitle: 'Freelancer', description: 'Desenvolvi uma API de upload e download de arquivos onde tive instruções do professor da escola. Utilizei as tecnlogias presentes no Nestjs, além de utilizar o prisma como ORM e Docker. Neste projeto aprendi sobre tratamento de erros com exception filters e a utilizar os controllers de forma perfomática.', image: 'https://avatars.githubusercontent.com/u/91744653?s=280&v=4', date: '20/08/2023'},
  ]

  constructor() { }

  ngOnInit(): void {

  }
}

