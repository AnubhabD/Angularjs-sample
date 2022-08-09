import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
   url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData[]> {
    return this.http.get<ApiData[]>(this.url);
  }
}