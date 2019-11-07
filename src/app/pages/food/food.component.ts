import { Component, OnInit } from '@angular/core';
import { ScheduledTruck } from 'src/app/models/scheduled-truck';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  truckToday: ScheduledTruck;
  truckNext: ScheduledTruck;
  truckNextDay: string;

  constructor() { }

  ngOnInit() {
    this.truckToday = new ScheduledTruck(
      new Date(2019, 11, 6),
      99,
      "Brunch Holiday",
      null,
      "/assets/img/brunchholiday.jpg"
    );
    this.truckNext = new ScheduledTruck(
      new Date(2019, 11, 7),
      101,
      "Krystyna's",
      null,
      "/assets/img/polish.jpg"
    );
    this.truckNextDay = this.truckNext.getDateText();
  }

}
