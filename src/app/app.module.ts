import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { FoodComponent } from './pages/food/food.component';
import { MapComponent } from './pages/map/map.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { NewsComponent } from './pages/news/news.component';
import { ScheduleComponent } from './pages/food/schedule/schedule.component';
import { TruckComponent } from './pages/food/truck/truck.component';
import { RequestComponent } from './pages/food/request/request.component';
import { TruckListComponent } from './pages/food/truck-list/truck-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    FoodComponent,
    MapComponent,
    FeedbackComponent,
    NewsComponent,
    ScheduleComponent,
    TruckComponent,
    RequestComponent,
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
