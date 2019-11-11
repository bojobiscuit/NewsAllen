import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TruckHighlightPage } from '../dtos/truck-highlight-page';
import { HttpClient } from '@angular/common/http';

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
}
