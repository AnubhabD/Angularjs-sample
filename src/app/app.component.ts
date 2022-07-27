import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Basic Calculator';

  num1: number = 20;
  num2: number = 40;

  num3!: number;

  receiveChildData(data: any) {
    console.log(data);
    this.num3 = data;
  }
}