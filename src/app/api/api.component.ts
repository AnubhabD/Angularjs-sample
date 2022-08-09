import { Component, OnInit } from '@angular/core';
import { ApiData } from '../interfaces/api.interface';
import { ApiService } from './api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {
  apiData: ApiData[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getData().subscribe((data: ApiData[]) => {
      this.apiData = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}