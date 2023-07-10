import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apartments } from './apartments.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  private apiUrl = "https://localhost:7027/api";

  constructor(private http:HttpClient) { }

  GetApartmentsById(id: number): Observable<Apartments[]>
  {
    return this.http.get<Apartments[]>(this.apiUrl + `/Dzīvoklis/mājaId/${id}`);
  }
  getApartmentById(id: number): Observable<Apartments> {
    return this.http.get<Apartments>(this.apiUrl + `/Dzīvoklis/${id}`);
  }
}
