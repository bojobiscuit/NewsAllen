import { Component, OnInit } from '@angular/core';
import { TruckScheduled } from 'src/app/models/truck/truck-scheduled';

@Component({
  selector: 'app-schedule',
  templateUrl: './truck-schedule.component.html',
  styleUrls: ['./truck-schedule.component.scss']
})
export class TruckScheduleComponent implements OnInit {

  trucks: TruckScheduled[];

  constructor() { }

  ngOnInit() {
    this.trucks = [
      new TruckScheduled(new Date(2019, 11, 6), 101, "Brunch Holiday"),
      new TruckScheduled(new Date(2019, 11, 7), 102, "Krystyna's"),
      new TruckScheduled(new Date(2019, 11, 8), 103, "Bearded Dog"),
      new TruckScheduled(new Date(2019, 11, 11), 104, "Marzan's"),
      new TruckScheduled(new Date(2019, 11, 12), 105, "Short Grain"),
    ];
  }
}
