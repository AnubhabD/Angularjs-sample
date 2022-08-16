import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';
import { BackendApiData } from '../interfaces/backend-api.interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<ApiData[]> {

    let url = 'https://jsonplaceholder.typicode.com/users';
    const api_data = this.http.get<ApiData[]>(url);

    return api_data;
  }

  postDataToApi(data: BackendApiData): Observable<BackendApiData> {

    let url = 'http://localhost:6020/admin/user-api/user';
    const api_data = this.http.post<BackendApiData>(url, data);

    return api_data;
  }

  getDataFromPostApi(): Observable<BackendApiData> {

    let url = 'http://localhost:6020/admin/user-api/user';
    const api_data = this.http.get<BackendApiData>(url);
    // .pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     console.info('Error in get of post => ', JSON.stringify(err));
    //     throw new Error(`${err.status}:${err.statusText}`);
    //   })
    // );
    return api_data;
  }
}