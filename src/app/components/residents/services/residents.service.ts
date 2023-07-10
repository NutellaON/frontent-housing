import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residents } from './residents.model';

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  private apiUrl = "https://localhost:7027/api";

  constructor(private http: HttpClient) { }

  GetResidentsByApartmentId(id: number): Observable<Residents[]>
  {
    return this.http.get<Residents[]>(this.apiUrl + `/Iedzīvotājs/${id}/iedzivotaji`);
  }
}
