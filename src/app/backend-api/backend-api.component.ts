import { Component, OnInit } from '@angular/core';

import { BackendApiData } from '../interfaces/backend-api.interface';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-backend-api',
  templateUrl: './backend-api.component.html',
  styleUrls: ['./backend-api.component.scss'],
})
export class BackendApiComponent implements OnInit {
  apiData: BackendApiData = {
    data: {
      list: [],
    },
  };
  error: string = '';
  booleanData: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDataFromPostApi()
    .subscribe({
      next: (response: BackendApiData) => {
        console.log(response.data.list);
        this.apiData.data.list = response?.data.list;
        this.booleanData = true;
      },
      error: (response) => {
        this.error = response.status + ' ' + response.statusText;
      },
      complete: () => console.info('API called successfully'),
    });
  }
}