import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { WhylearnComponent } from './whylearn/whylearn.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { NewsComponent } from './news/news.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { HiringComponent } from './hiring/hiring.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeBannerComponent,
    WhylearnComponent,
    OfferingsComponent,
    NewsComponent,
    TestimonialsComponent,
    FooterComponent,
    NewsPaperComponent,
    HiringComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
