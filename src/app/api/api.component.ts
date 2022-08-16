import { Component, OnInit } from '@angular/core';

import { ApiData } from '../interfaces/api.interface';

import { ApiService } from '../service/api.service';

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
  errorMsg: string = 'Page Not Found';

  constructor(private apiService: ApiService) {
    this.apiService.getData()
    .subscribe({
      next: (response: ApiData[]) => {
        this.apiData = response;
        console.log(response);
      },
      error: (response) => {
        this.error = response.status + ' Error';
        // this.errorMsg = res.message;
      },
    });
  }

  ngOnInit(): void {}
}