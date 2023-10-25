import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutMeDetails: any = [
    {
      title: "assets/Media/about-me.jpg",
      fullName: "My full name is Mousa Khairy Halim Salib",
      age: "I was born on march first in 1999",
      theAge: 24,
      country: "Egypt",
      state: "Minya",
      experience: "I worked as a credit specialist at the company of Tasaheel",
      achievements: "I studied the programming in {{ITI}} specifically {{Mearn Stack}} at",
      levelOfEnglish: "I studied English as a self study on application The American English, and I studied the preparation of Ielts ",
      description: "I am able to work under pressure, work for long periods of time, and I able to learn constantly"
    }
  ]

}
