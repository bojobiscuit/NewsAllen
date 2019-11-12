import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-info.component.html',
  styleUrls: ['./truck-info.component.scss']
})
export class TruckComponent implements OnInit {

  truck: TruckDetails;

  constructor(private truckService: TruckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        var id = +params.get('id');
        if (!this.truck)
          this.GetTruck(id);
      });
  }

  private GetTruck(id: number) {
    this.truckService.getTruck(id).subscribe(
      (dto) => {
        this.truck = dto;
      },
      err => console.error(err),
    );
  }

  getTotalRatings() {
    return this.truck.loveRatings + this.truck.likeRatings + this.truck.mehRatings;
  }

}
