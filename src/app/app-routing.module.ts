import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FoodComponent } from './pages/food/food.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'food', component: FoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
