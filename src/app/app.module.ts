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
import { MondayComponent } from './components/schedule/monday/monday.component';
import { TuesdayComponent } from './components/schedule/tuesday/tuesday.component';
import { WednesdayComponent } from './components/schedule/wednesday/wednesday.component';
import { ThursdayComponent } from './components/schedule/thursday/thursday.component';
import { FridayComponent } from './components/schedule/friday/friday.component';
import { SaturdayComponent } from './components/schedule/saturday/saturday.component';

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
    ContactComponent,
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
