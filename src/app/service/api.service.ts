import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';
import { BackendApiData, ListingData } from '../interfaces/backend-api.interface';

import { catchError, map, Observable } from 'rxjs';

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

   getPosts(): Observable<ListingData[]> {

    let url = 'http://localhost:6020/admin/user-api/user';
    const api_data = this.http.get<ListingData[]>(url)
    // .pipe(
    //   map((data) => {
    //     const posts: ListingData[] = [];
    //     for(let key in data){
    //       posts.push({...data[key], _id: key});
    //     }
    //     return posts;
    //   }),
    //   catchError((err: HttpErrorResponse) => {
    //     console.info('Error in get of post => ', JSON.stringify(err));
    //     throw new Error(`${err.status}:${err.statusText}`);
    //   })
    // );
    return api_data;
  }
}