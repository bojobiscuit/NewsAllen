import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-truck-update',
  templateUrl: './truck-update.component.html',
  styleUrls: ['./truck-update.component.scss']
})
export class TruckUpdateComponent implements OnInit {

  truck: TruckDetails;
  isNewTruck: boolean = true;

  constructor(private truckService: TruckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        var id = +params.get('id');
        if (id) {
          this.isNewTruck = false;
          this.GetTruck(id);
        }
        else {
          this.isNewTruck = true;
          this.truck = new TruckDetails();
        }
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

  updateTruck() {
    if (this.isNewTruck) {
      this.truckService.addTruck(this.truck).subscribe(
        () => { },
        err => console.error(err)
      );
    }
    else {
      this.truckService.editTruck(this.truck).subscribe(
        () => { },
        err => console.error(err)
      );
    }
  }
}
