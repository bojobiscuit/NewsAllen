import { Component, OnInit } from '@angular/core';
import { TruckListItem } from 'src/app/models/truck/truck-list-item';
import { TruckService } from 'src/app/services/truck.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.scss']
})
export class TruckListComponent implements OnInit {
  trucks: TruckListItem[];

  constructor(private truckService: TruckService, private navService: NavService) { }

  ngOnInit() {
    this.navService.setTitle("Food Truck List")
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
