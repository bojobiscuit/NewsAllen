import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TruckUserRatingDto, AlertDto, AddTruckScheduleDto } from 'src/app/dtos/truck-dtos';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-info.component.html',
  styleUrls: ['./truck-info.component.scss']
})
export class TruckComponent implements OnInit {

  truck: TruckDetails;
  rating: TruckUserRatingDto;
  detailsSlide: string = null;
  alert: AlertDto;
  selectedDate: Date;

  constructor(private truckService: TruckService, private userService: UserService, private navService: NavService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.alert = new AlertDto();
    this.getTruckFromId();
  }

  private getTruckFromId() {
    this.navService.setTitle("Truck");
    this.route.paramMap.subscribe(
      (params) => {
        var id = +params.get('id');
        if (id)
          this.GetTruck(id);
      });
  }

  private GetTruck(id: number) {
    this.truckService.getTruck(id).subscribe(
      (dto) => {
        this.truck = dto;
        if (this.truck) {
          this.navService.setTitle("Truck: " + this.truck.name);
          this.getRating();
        }
      },
      err => console.error(err),
    );
  }

  private getRating() {
    this.truckService.getRating(this.truck.id, this.userService.userId).subscribe(
      (dto) => {
        this.rating = dto;
      },
      err => console.error(err)
    );
  }

  showDetailsSlide(hideAlerts: boolean = true) {
    this.detailsSlide = null;
    this.selectedDate = null;
    if (hideAlerts)
      this.alert.reset();
  }

  showRatingsSlide(hideAlerts: boolean = true) {
    this.detailsSlide = "ratings";
    if (hideAlerts)
      this.alert.reset();
  }

  showScheduleSlide(hideAlerts: boolean = true) {
    this.detailsSlide = "schedule";
    if (hideAlerts)
      this.alert.reset();
  }

  setRating(rating: string) {
    var dto = new TruckUserRatingDto();
    dto.truckId = this.truck.id;
    dto.userId = this.userService.userId;

    dto.ratingId = 0;
    if (rating == "love")
      dto.ratingId = 1;
    else if (rating == "like")
      dto.ratingId = 2;
    else if (rating == "meh")
      dto.ratingId = 3;

    this.truckService.setRating(dto).subscribe(
      () => {
        console.log("rating set");
        this.alert.setAlert("Rating was set successfully", "Updated");
        this.GetTruck(this.truck.id);
      },
      err => {
        this.alert.setError("There was an error setting the rating");
        console.error(err);
      },
      () => {
        this.showDetailsSlide(false);
      }
    );
  }

  removeRating() {
    this.truckService.deleteRating(this.truck.id, this.userService.userId).subscribe(
      () => {
        console.log("rating deleted");
        this.alert.setAlert("Rating was removed", "Removed");
        this.GetTruck(this.truck.id);
      },
      err => {
        this.alert.setError("There was an error removing the rating");
        console.error(err);
      },
      () => {
        this.showDetailsSlide(false);
      }
    );
  }

  saveSchedule() {
    if (!this.selectedDate)
      return;

    var dto: AddTruckScheduleDto = new AddTruckScheduleDto();
    dto.date = new Date(this.selectedDate);
    dto.truckId = this.truck.id;
    this.truckService.addTruckSchedule(dto).subscribe(
      () => {
        console.log("add schedule");
        this.alert.setAlert("Truck was scheduled", "Scheduled");
        this.GetTruck(this.truck.id);
      },
      err => {
        this.alert.setError("There was an error scheduling the truck");
        console.error(err);
      },
      () => {
        this.selectedDate = null;
        this.showDetailsSlide(false);
      }
    );
  }

  deleteTruckSchedule(scheduleId: number) {
    this.truckService.removeTruckSchedule(scheduleId).subscribe(
      () => {
        console.log("remove truck schedule: " + scheduleId);
        this.alert.setAlert("Truck was unscheduled", "Unscheduled");
        this.GetTruck(this.truck.id);
      },
      err => {
        this.alert.setError("There was an error unscheduling the truck");
        console.error(err);
      },
      () => {
        this.showDetailsSlide(false);
      }
    );
  }

  isRated(value: number) {
    return (this.rating && this.rating.ratingId == value);
  }
}
