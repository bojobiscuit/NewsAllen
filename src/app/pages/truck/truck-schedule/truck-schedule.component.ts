import { Component, OnInit } from '@angular/core';
import { TruckScheduled } from 'src/app/models/truck/truck-scheduled';
import { TruckService } from 'src/app/services/truck.service';
import { All } from 'src/app/general/all';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './truck-schedule.component.html',
  styleUrls: ['./truck-schedule.component.scss']
})
export class TruckScheduleComponent implements OnInit {

  trucks: TruckScheduled[];

  constructor(private truckService: TruckService, private navService: NavService) { }

  ngOnInit() {
    this.navService.setTitle("Food Truck Schedule");
    this.GetTruckScheduleList();
  }

  private GetTruckScheduleList() {
    this.truckService.getScheduleList().subscribe(
      (dto) => {
        this.trucks = dto;
        this.trucks.forEach(truck => {
          truck.date = new Date(truck.date);
        });
      },
      err => console.error(err),
    );
  }

  getDateOutput(truck: TruckScheduled) {
    return All.getDateOuput(new Date(truck.date));
  }
}
