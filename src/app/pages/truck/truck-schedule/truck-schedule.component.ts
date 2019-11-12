import { Component, OnInit } from '@angular/core';
import { TruckScheduled } from 'src/app/models/truck/truck-scheduled';
import { TruckService } from 'src/app/services/truck.service';
import { All } from 'src/app/general/all';

@Component({
  selector: 'app-schedule',
  templateUrl: './truck-schedule.component.html',
  styleUrls: ['./truck-schedule.component.scss']
})
export class TruckScheduleComponent implements OnInit {

  trucks: TruckScheduled[];

  constructor(private truckService: TruckService) { }

  ngOnInit() {
    this.GetTruckScheduleList();
  }

  private GetTruckScheduleList() {
    this.truckService.getScheduleList().subscribe(
      (dto) => {
        this.trucks = dto;
      },
      err => console.error(err),
    );
  }

  getDateOutput(truck: TruckScheduled) {
    return All.getDateOuput(new Date(truck.date));
  }
}
