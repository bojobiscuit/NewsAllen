import { Component, OnInit } from '@angular/core';
import { TruckListItem } from 'src/app/models/truck/truck-list-item';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {
  trucks: TruckListItem[];

  constructor() { }

  ngOnInit() {
    this.trucks = [
      new TruckListItem(101, "Brunch Holiday"),
      new TruckListItem(102, "Krystyna's"),
      new TruckListItem(103, "Bearded Dog"),
      new TruckListItem(104, "Marzan's"),
      new TruckListItem(105, "Short Grain"),
    ];
  }
}
