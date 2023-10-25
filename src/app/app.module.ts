import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ChildSkillsComponent } from './components/child-skills/child-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ChildPortfolioComponent } from './components/child-portfolio/child-portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ChildSkillsComponent,
    PortfolioComponent,
    ChildPortfolioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
