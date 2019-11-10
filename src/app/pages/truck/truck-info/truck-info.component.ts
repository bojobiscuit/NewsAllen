import { Component, OnInit } from '@angular/core';
import { Truck } from 'src/app/models/truck/truck';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-info.component.html',
  styleUrls: ['./truck-info.component.scss']
})
export class TruckComponent implements OnInit {

  truck: Truck;

  constructor() { }

  ngOnInit() {
    this.truck = new Truck(
      101,
      "Brunch Holiday",
      "British",
      "/assets/img/brunchholiday.jpg",
      "http://www.google.com"
    );
  }

}
