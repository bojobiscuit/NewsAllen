import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { FoodComponent } from './pages/food/food.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    FoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
