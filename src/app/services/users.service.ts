import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
    private baseUrl = 'http://localhost:3000/api/';
  
    constructor(private http: HttpClient) {}
  
    getUsers(): Observable<Users[]> {
      return this.http.get<Users[]>(this.baseUrl + "users");
    }

    // getUserById(id: number): Observable<Users> {
    //   return this.http.get<Users>(this.baseUrl + "user/" + id);
    // }
  }