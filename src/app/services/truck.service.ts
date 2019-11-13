import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TruckHighlightPage, TruckUserRatingDto } from '../dtos/truck-dtos';
import { HttpClient } from '@angular/common/http';
import { TruckScheduled } from '../models/truck/truck-scheduled';
import { TruckListItem } from '../models/truck/truck-list-item';
import { TruckDetails } from '../models/truck/truck-details';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  constructor(private http: HttpClient) { }

  getHighlightPage(): Observable<TruckHighlightPage> {
    console.log('getHighlightPage');
    const url = `${environment.apiPath}/truck/highlight`;
    return this.http.get<TruckHighlightPage>(url);
  }

  getTruck(id: number): Observable<TruckDetails> {
    console.log(`getTruck:${id}`);
    const url = `${environment.apiPath}/truck/${id}`;
    return this.http.get<TruckDetails>(url);
  }

  getScheduleList(): Observable<TruckScheduled[]> {
    console.log('getSchedulesList');
    const url = `${environment.apiPath}/truck/schedule`;
    return this.http.get<TruckScheduled[]>(url);
  }

  getTruckList(): Observable<TruckListItem[]> {
    console.log('getTruckList');
    const url = `${environment.apiPath}/truck/list`;
    return this.http.get<TruckListItem[]>(url);
  }

  addTruck(truck: TruckDetails): Observable<{}> {
    console.log('addTruck');
    const url = `${environment.apiPath}/truck/add`;
    return this.http.post<{}>(url, truck);
  }

  editTruck(truck: TruckDetails): Observable<{}> {
    console.log(`editTruck:${truck.id}`);
    const url = `${environment.apiPath}/truck/edit/${truck.id}`;
    return this.http.post<{}>(url, truck);
  }

  setRating(dto: TruckUserRatingDto) {
    console.log(`setRating:${dto.truckId}/${dto.userId}/${dto.ratingId}`);
    const url = `${environment.apiPath}/truck/rating`;
    return this.http.post<{}>(url, dto);
  }
}
