import { Component, OnInit } from '@angular/core';
import { ScheduledTruck } from 'src/app/models/scheduled-truck';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  trucks: ScheduledTruck[];

  constructor() { }

  ngOnInit() {
    this.trucks = [
      new ScheduledTruck(new Date(2019, 11, 6), 101, "Brunch Holiday", "British", null),
      new ScheduledTruck(new Date(2019, 11, 7), 102, "Krystyna's", "Polish", null),
      new ScheduledTruck(new Date(2019, 11, 8), 103, "Bearded Dog", "American", null),
      new ScheduledTruck(new Date(2019, 11, 11), 104, "Marzan's", "Cuban", null),
      new ScheduledTruck(new Date(2019, 11, 12), 105, "Short Grain", "Asian Fusion", null),
    ];
  }

}
