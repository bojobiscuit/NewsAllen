import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { TruckComponent } from './pages/truck/truck-info/truck-info.component';
import { TruckListComponent } from './pages/truck/truck-list/truck-list.component';
import { TruckScheduleComponent } from './pages/truck/truck-schedule/truck-schedule.component';
import { TruckHighlightComponent } from './pages/truck/truck-highlight/truck-highlight.component';
import { TruckUpdateComponent } from './pages/truck/truck-update/truck-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'map', component: MapComponent },
  { path: 'truck', component: TruckHighlightComponent },
  { path: 'truck/list', component: TruckListComponent },
  { path: 'truck/schedule', component: TruckScheduleComponent },
  { path: 'truck/update/:id', component: TruckUpdateComponent },
  { path: 'truck/update', component: TruckUpdateComponent },
  { path: 'truck/:id', component: TruckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
