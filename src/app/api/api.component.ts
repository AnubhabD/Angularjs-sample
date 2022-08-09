import { Component, OnInit } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {
  apiData: ApiData[] = [
    {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    },
  ];
  error: string = '';

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe({
      next: (data: ApiData[]) => {
        this.apiData = data;
        console.log(data);
      },
      error: (e) => {
        console.log(e, ' error message');
        this.error = e.message;
      },
    });
  }

  ngOnInit(): void {}
}