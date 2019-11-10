import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { MapComponent } from './pages/map/map.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { NewsComponent } from './pages/news/news.component';
import { TruckScheduleComponent } from './pages/truck/truck-schedule/truck-schedule.component';
import { TruckComponent } from './pages/truck/truck-info/truck-info.component';
import { TruckListComponent } from './pages/truck/truck-list/truck-list.component';
import { TruckHighlightComponent } from './pages/truck/truck-highlight/truck-highlight.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    TruckHighlightComponent,
    MapComponent,
    FeedbackComponent,
    NewsComponent,
    TruckScheduleComponent,
    TruckComponent,
    TruckListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
