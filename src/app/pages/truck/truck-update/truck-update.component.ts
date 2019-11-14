import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-truck-update',
  templateUrl: './truck-update.component.html',
  styleUrls: ['./truck-update.component.scss']
})
export class TruckUpdateComponent implements OnInit {

  truck: TruckDetails;
  isNewTruck: boolean = true;

  constructor(private truckService: TruckService, private navService: NavService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        var id = +params.get('id');
        if (id) {
          this.navService.setTitle("Edit Truck");
          this.isNewTruck = false;
          this.GetTruck(id);
        }
        else {
          this.navService.setTitle("Add Truck");
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
        () => {
          console.log("truck added");
          this.navService.navigateWithMessage("created", "The truck was created successfully.", "/truck/list");
        },
        err => {
          console.error("truck add error: " + err);
          this.navService.navigateWithError("/truck/list");
        }
      );
    }
    else {
      this.truckService.editTruck(this.truck).subscribe(
        () => {
          console.log("truck edited:" + this.truck.id);
          this.navService.navigateWithMessage("created", "The truck was edited successfully.", "/truck/" + this.truck.id);
        },
        err => {
          console.error("truck edit error: " + err);
          this.navService.navigateWithError("/truck/list");
        }
      );
    }
  }

  deleteTruck() {
    if (confirm('Are you sure you want to delete this truck?')) {
      this.truckService.deleteTruck(this.truck.id).subscribe(
        () => {
          console.log("truck added");
          this.navService.navigateWithMessage("created", "The truck was deleted successfully.", "/truck/list");
        },
        err => {
          console.error("truck delete error: " + err);
          this.navService.navigateWithError("/truck/list");
        }
      );
    }
  }
}
