import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { MapComponent } from './pages/map/map.component';
import { FoodComponent } from './pages/food/food.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { TruckComponent } from './pages/food/truck/truck.component';
import { TruckListComponent } from './pages/food/truck-list/truck-list.component';
import { ScheduleComponent } from './pages/food/schedule/schedule.component';
import { RequestComponent } from './pages/food/request/request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'map', component: MapComponent },
  { path: 'food', component: FoodComponent },
  { path: 'food/trucks', component: TruckListComponent },
  { path: 'food/trucks/:id', component: TruckComponent },
  { path: 'food/schedule', component: ScheduleComponent },
  { path: 'food/request', component: RequestComponent },
  { path: 'feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
