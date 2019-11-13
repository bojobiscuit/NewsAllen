import { Component, OnInit } from '@angular/core';
import { TruckDetails } from 'src/app/models/truck/truck-details';
import { TruckService } from 'src/app/services/truck.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TruckUserRatingDto, AlertDto } from 'src/app/dtos/truck-dtos';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck-info.component.html',
  styleUrls: ['./truck-info.component.scss']
})
export class TruckComponent implements OnInit {

  truck: TruckDetails;
  detailsSlide: string = null;
  alert: AlertDto = new AlertDto();

  constructor(private truckService: TruckService, private userService: UserService, private navService: NavService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.showDetailsSlide();
    this.getTruckFromId();
    this.alert.message = null;
    this.alert.status = null;
  }

  private getTruckFromId() {
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
      },
      err => console.error(err),
    );
  }

  getTotalRatings() {
    return this.truck.loveRatings + this.truck.likeRatings + this.truck.mehRatings;
  }

  showDetailsSlide(hideAlerts: boolean = true) {
    this.detailsSlide = null;
    if (hideAlerts)
      this.alert.status = null;
  }

  showRatingsSlide(hideAlerts: boolean = true) {
    this.detailsSlide = "ratings";
    if (hideAlerts)
      this.alert.status = null;
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
        this.alert.message = "Rating was set successfully";
        this.alert.status = "Updated";
        this.truck = null;
        this.getTruckFromId();
      },
      err => {
        this.alert.message = "There was an error setting the rating";
        this.alert.status = "Errror";
        console.error("rating set error: " + err);
      },
      () => {
        this.showDetailsSlide(false);
      }
    );
  }
}
