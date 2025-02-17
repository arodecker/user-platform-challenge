import { } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpService } from 'common-services/src/http.service';
import { User } from 'models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  public jsonPlaceholderPath: string = 'http://jsonplaceholder.typicode.com';     //normally we would set a reverse proxy for this but since it is a test we will use the full url
  constructor(private http: HttpService) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.jsonPlaceholderPath}/users`);
  }
  getUserDetails(id: string): Observable<User> {
    return this.http.get(`${this.jsonPlaceholderPath}/users?id=${id}`);
  }
}