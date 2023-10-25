import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsDetails: any = [
    {
      imagePath: "assets/Media/skills.jpg"
    }
  ]

}
