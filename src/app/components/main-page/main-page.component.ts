import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  details: any = [
    {
      imagePath: "assets/Media/300825098_3237118913169130_3519148869853743918_n.jpg",
      Name: "Mousa Salib",
      job: "full stack web developer {{ MEARN }}"
    }
  ]

}
