import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  Method: any = ['Addition', 'Subtraction', 'Multiplication', 'Division'];

  @Input()
  num1!: number;

  @Input()
  num2!: number;

  @Output()
  outputFromChild: EventEmitter<number> = new EventEmitter();
  num3!: number;

  changeMethod(value: string) {
    if(value === 'add'){
      this.add();
    }
    if(value === 'sub'){
      this.sub();
    }
    if(value === 'multiply'){
      this.multiply();
    }
    if(value === 'divide'){
      this.divide();
    }
  }

  add() {
    this.num3 = this.num1 + this.num2;
    this.outputFromChild.emit(this.num3);
    return this.num3;
  }

  sub() {
    this.num3 = this.num1 - this.num2;
    this.outputFromChild.emit(this.num3);
    return this.num3;
  }

  multiply() {
    this.num3 = this.num1 * this.num2;
    this.outputFromChild.emit(this.num3);
    return this.num3;
  }

  divide() {
    this.num3 = this.num1 / this.num2;
    this.outputFromChild.emit(this.num3);
    return this.num3;
  }

  ngOnInit(): void {}
}