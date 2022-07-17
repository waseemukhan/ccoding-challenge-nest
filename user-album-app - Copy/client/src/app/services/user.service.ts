import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, observable } from 'rxjs'

import { User } from '../interfaces/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL: string = 'http://localhost:3000';
  

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/user`);
  }
}
