import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Basic Calculator';

  num1: number = 10;
  num2: number = 20;

  receiveChildData(data: any) {
    console.log(data);
  }

  // onsubmit(){}
}