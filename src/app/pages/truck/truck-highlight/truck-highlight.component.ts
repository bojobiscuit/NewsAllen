import { Component, OnInit } from '@angular/core';
import { TruckHighlight } from 'src/app/models/truck/truck-highlight';
import { All } from 'src/app/general/all';
import { TruckService } from 'src/app/services/truck.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-highlight.component.html',
  styleUrls: ['./truck-highlight.component.scss']
})
export class TruckHighlightComponent implements OnInit {

  truckToday: TruckHighlight;
  truckNext: TruckHighlight;
  truckNextDay: string;

  constructor(private truckService: TruckService) { }

  ngOnInit() {
    this.GetTruckHighlightPage();
  }

  private GetTruckHighlightPage() {
    this.truckService.getHighlightPage().subscribe(
      (dto) => {
        console.log(dto);
        this.truckToday = dto.todayTruck;
        this.truckNext = dto.nextTruck;
      },
      err => console.error(err),
      () => {
        console.log('Observer got a complete notification');
        this.truckNextDay = All.getDateText(this.truckNext.date);
      }
    );
  }

}
