import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TruckHighlightPage, TruckUserRatingDto, AddTruckScheduleDto, TruckSchedulePage } from '../dtos/truck-dtos';
import { HttpClient, HttpEvent } from '@angular/common/http';
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

  getSchedulePage(): Observable<TruckSchedulePage> {
    console.log('getSchedulePage');
    const url = `${environment.apiPath}/truck/schedule`;
    return this.http.get<TruckSchedulePage>(url);
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

  deleteTruck(truckId: number): Observable<{}> {
    console.log(`deleteTruck:${truckId}`);
    const url = `${environment.apiPath}/truck/${truckId}`;
    return this.http.delete<{}>(url);
  }

  getRating(truckId: number, userId: number): Observable<TruckUserRatingDto> {
    console.log('getRating');
    const url = `${environment.apiPath}/truck/rating?truckId=${truckId}&userId=${userId}`;
    return this.http.get<TruckUserRatingDto>(url);
  }

  setRating(dto: TruckUserRatingDto): Observable<{}> {
    console.log(`setRating:${dto.truckId}/${dto.userId}/${dto.ratingId}`);
    const url = `${environment.apiPath}/truck/rating`;
    return this.http.post<{}>(url, dto);
  }

  deleteRating(truckId: number, userId: number): Observable<{}> {
    console.log(`deleteRating:${truckId}/${userId}`);
    const url = `${environment.apiPath}/truck/rating?truckId=${truckId}&userId=${userId}`;
    return this.http.delete<{}>(url);
  }

  uploadTruckImage(truckId: number, formData: FormData): Observable<HttpEvent<FormData>> {
    console.log(`uploadTruckImage`);
    const url = `${environment.apiPath}/truck/truckImage/${truckId}`;
    return this.http.post<FormData>(url, formData, { reportProgress: true, observe: 'events' });
  }

  deleteTruckImage(truckId: number): Observable<{}> {
    console.log(`deleteTruck:${truckId}`);
    const url = `${environment.apiPath}/truck/truckImage/${truckId}`;
    return this.http.delete<{}>(url);
  }

  addTruckSchedule(dto: AddTruckScheduleDto): Observable<{}> {
    console.log(`addTruckSchedule`);
    const url = `${environment.apiPath}/truck/schedule`;
    return this.http.post<{}>(url, dto);
  }

  removeTruckSchedule(scheduleId: number): Observable<{}> {
    console.log(`removeTruckSchedule:${scheduleId}`);
    const url = `${environment.apiPath}/truck/schedule/${scheduleId}`;
    return this.http.delete<{}>(url);
  }

  getScheduleForTruck(truckId: number): Observable<TruckScheduled[]> {
    console.log(`getScheduleForTruck:${truckId}`);
    const url = `${environment.apiPath}/truck/schedule/${truckId}`;
    return this.http.get<TruckScheduled[]>(url);
  }
}
