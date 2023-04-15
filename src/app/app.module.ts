import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { LivesectionComponent } from './components/livesection/livesection.component';
import { NewsComponent } from './components/news/news.component';
import { AboutComponent } from './components/about/about.component';
import { OfferComponent } from './components/offer/offer.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LivesectionComponent,
    NewsComponent,
    AboutComponent,
    OfferComponent,
    ScheduleComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
