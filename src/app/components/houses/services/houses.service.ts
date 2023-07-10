import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Houses } from './houses.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private apiUrl = "https://localhost:7027/api";

  constructor(private http: HttpClient) { }

  getHouses(): Observable<Houses[]> {
    return this.http.get<Houses[]>(`${this.apiUrl}/Māja`);
  }

  getHouseById(id: number): Observable<Houses> {
    return this.http.get<Houses>(`${this.apiUrl}/Māja/${id}`);
  }

  createHouse(house: Houses): Observable<Houses> {
    return this.http.post<Houses>(`${this.apiUrl}/Māja`, house);
  }

  editHouse(id: number, updatedHouse: Houses): Observable<Houses> {
    return this.http.put<Houses>(`${this.apiUrl}/Māja/${id}`, updatedHouse);
  }

  deleteHouse(id: number): Observable<Houses>{
    return this.http.delete<Houses>(`${this.apiUrl}/Māja/${id}`);
  }
}
