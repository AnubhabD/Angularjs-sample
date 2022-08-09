import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';

import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData[]> {
    const data = this.http.get<ApiData[]>(this.url).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
    return data;
  }
}