import { Component, OnInit } from '@angular/core';
import { TruckHighlight } from 'src/app/models/truck/truck-highlight';
import { All } from 'src/app/general/all';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-highlight.component.html',
  styleUrls: ['./truck-highlight.component.scss']
})
export class TruckHighlightComponent implements OnInit {

  truckToday: TruckHighlight;
  truckNext: TruckHighlight;
  truckNextDay: string;

  constructor() { }

  ngOnInit() {
    this.truckToday = new TruckHighlight(
      new Date(2019, 11, 6),
      99,
      "Brunch Holiday",
      "/assets/img/brunchholiday.jpg"
    );
    this.truckNext = new TruckHighlight(
      new Date(2019, 11, 7),
      101,
      "Krystyna's",
      "/assets/img/polish.jpg"
    );
    this.truckNextDay = All.getDateText(this.truckNext.date);
  }

}
