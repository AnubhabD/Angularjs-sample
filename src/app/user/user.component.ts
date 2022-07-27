import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor() {}

  @Input()
  num1!: number;

  @Input()
  num2!: number;

  @Output()
  outputFromChild: EventEmitter<number> = new EventEmitter();
  num3!: number;

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