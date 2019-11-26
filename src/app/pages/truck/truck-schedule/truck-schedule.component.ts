import { Component, OnInit } from '@angular/core';
import { TruckScheduled } from 'src/app/models/truck/truck-scheduled';
import { TruckService } from 'src/app/services/truck.service';
import { All } from 'src/app/general/all';
import { NavService } from 'src/app/services/nav.service';
import { TruckSchedulePage } from 'src/app/dtos/truck-dtos';

@Component({
  selector: 'app-schedule',
  templateUrl: './truck-schedule.component.html',
  styleUrls: ['./truck-schedule.component.scss']
})
export class TruckScheduleComponent implements OnInit {

  truckSchedulePage: TruckSchedulePage;

  constructor(private truckService: TruckService, private navService: NavService) { }

  ngOnInit() {
    this.navService.setTitle("Food Truck Schedule");
    this.GetTruckScheduleList();
  }

  private GetTruckScheduleList() {
    this.truckService.getSchedulePage().subscribe(
      (dto) => {
        this.truckSchedulePage = dto;
        if (this.truckSchedulePage) {
          if (this.truckSchedulePage.currentWeekTrucks) {
            this.truckSchedulePage.currentWeekTrucks.forEach(truck => {
              truck.date = new Date(truck.date);
            });
          }
          if (this.truckSchedulePage.futureTrucks) {
            this.truckSchedulePage.futureTrucks.forEach(truck => {
              truck.date = new Date(truck.date);
            });
          }
        }
      },
      err => console.error(err),
    );
  }

  test() {
    var testx = this.truckSchedulePage.currentWeekTrucks;
  }
}
