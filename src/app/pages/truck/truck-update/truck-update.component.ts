import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-truck-update',
  templateUrl: './truck-update.component.html',
  styleUrls: ['./truck-update.component.scss']
})
export class TruckUpdateComponent implements OnInit {

  truck: TruckDetails;
  isNewTruck: boolean = true;
  progress: number;
  message: string;

  constructor(private truckService: TruckService, private navService: NavService, private route: ActivatedRoute, private http: HttpClient) { }

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
          this.navService.navigateWithMessage("deleted", "The truck was deleted successfully.", "/truck/list");
        },
        err => {
          console.error(err);
          this.navService.navigateWithError("/truck/list");
        }
      );
    }
  }

  uploadFile = (files) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.truckService.uploadTruckImage(this.truck.id, formData).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.navService.navigateWithMessage("uploaded", "Image added successfully to truck.", `/truck/${this.truck.id}`);
        }
      });
  }

  deleteTruckImage() {
    this.truckService.deleteTruckImage(this.truck.id).subscribe(
      () => {
        console.log("truck image deleted");
        this.navService.navigateWithMessage("deleted", "The truck image was deleted successfully.", `/truck/${this.truck.id}`);
      },
      err => {
        console.error(err);
        this.navService.navigateWithError("/truck/list");
      }
    );
  }
}
