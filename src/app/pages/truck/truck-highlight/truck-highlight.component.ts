import { Component, OnInit } from '@angular/core';
import { TruckHighlight } from 'src/app/models/truck/truck-highlight';
import { All } from 'src/app/general/all';
import { TruckService } from 'src/app/services/truck.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-highlight.component.html',
  styleUrls: ['./truck-highlight.component.scss']
})
export class TruckHighlightComponent implements OnInit {

  truckToday: TruckHighlight;
  truckNext: TruckHighlight;
  truckTodayDay: string;
  truckNextDay: string;
  isTodayScheduled: boolean = true;


  constructor(private truckService: TruckService, private navService: NavService) { }

  ngOnInit() {
    this.navService.setTitle("Food Trucks");
    this.GetTruckHighlightPage();
  }

  private GetTruckHighlightPage() {
    this.truckService.getHighlightPage().subscribe(
      (dto) => {
        this.truckToday = dto.todayTruck;
        this.truckNext = dto.nextTruck;

        if (this.truckToday)
          this.truckToday.date = new Date(this.truckToday.date);
        else
          this.isTodayScheduled = false;

        if (this.truckNext)
          this.truckNext.date = new Date(this.truckNext.date);
      },
      err => console.error(err),
      () => {
        if (this.truckToday)
          this.truckTodayDay = All.getDateText(this.truckToday.date);
        if (this.truckNext)
          this.truckNextDay = All.getDateText(this.truckNext.date);
      }
    );
  }

}
