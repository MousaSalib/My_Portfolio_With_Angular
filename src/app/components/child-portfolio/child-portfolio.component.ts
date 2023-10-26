import { Component } from '@angular/core';

@Component({
  selector: 'app-child-portfolio',
  templateUrl: './child-portfolio.component.html',
  styleUrls: ['./child-portfolio.component.css']
})
export class ChildPortfolioComponent {
  images: any[] = [
    {
      imagePath: "assets/Media/adminstrationOfproducts.png",
      typeOfProject: "Html, Css, Javascript",
      description: "Visit the project by clicking on the button Visit.",
      link: "https://mousasalib.github.io/administrationOfProducts/"
    },
    {
      imagePath: "assets/Media/toDoApp.png",
      typeOfProject: "Angular",
      description: "Visit the project by clicking on the button Visit.",
      link: "https://to-do-app-omega-sandy.vercel.app/"
    },
    {
      imagePath: "assets/Media/users.png",
      typeOfProject: "Angular",
      description: "Visit the project by clicking on the button Visit. ",
      link: "https://users-app-amber.vercel.app/"
    }
  ];



}
