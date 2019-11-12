import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { TruckUpdateComponent } from './pages/truck/truck-update/truck-update.component';
import { AlertComponent } from './parts/alert/alert.component';

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
    TruckUpdateComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
