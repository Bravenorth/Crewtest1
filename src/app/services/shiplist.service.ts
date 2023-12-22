import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shiplist } from '../models/shiplist.model';

@Injectable({
  providedIn: 'root',
})
export class ShiplistService {
    private baseUrl = 'http://localhost:3000/api/';
  
    constructor(private http: HttpClient) {}
  
    getShiplist(): Observable<Shiplist[]> {
      return this.http.get<Shiplist[]>(this.baseUrl + "shiplist");
    }

    // getUserById(id: number): Observable<Users> {
    //   return this.http.get<Users>(this.baseUrl + "user/" + id);
    // }
  }