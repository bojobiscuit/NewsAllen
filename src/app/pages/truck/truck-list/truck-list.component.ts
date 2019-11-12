import { Component, OnInit } from '@angular/core';
import { TruckListItem } from 'src/app/models/truck/truck-list-item';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {
  trucks: TruckListItem[];

  constructor(private truckService: TruckService) { }

  ngOnInit() {
    this.GetTruckList();
  }

  private GetTruckList() {
    this.truckService.getTruckList().subscribe(
      (dto) => {
        this.trucks = dto;
      },
      err => console.error(err),
    );
  }
}
