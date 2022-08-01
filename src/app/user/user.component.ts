import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnChanges {
  constructor() {}

  @Input()
  num1!: number;

  @Input()
  num2!: number;

  @Output()
  outputFromChild: EventEmitter<number> = new EventEmitter();
  num3!: number;

  // changeMethod(value: string): void {
  //   if(value === 'add'){
  //     this.add();
  //   }
  //   if(value === 'sub'){
  //     this.sub();
  //   }
  //   if(value === 'multiply'){
  //     this.multiply();
  //   }
  //   if(value === 'divide'){
  //     this.divide();
  //   }
  // }

  // add(): number {
  //   this.num3 = this.num1 + this.num2;
  //   this.outputFromChild.emit(this.num3);
  //   return this.num3;
  // }

  // sub(): number {
  //   this.num3 = this.num1 - this.num2;
  //   this.outputFromChild.emit(this.num3);
  //   return this.num3;
  // }

  // multiply(): number {
  //   this.num3 = this.num1 * this.num2;
  //   this.outputFromChild.emit(this.num3);
  //   return this.num3;
  // }

  // divide(): number {
  //   this.num3 = this.num1 / this.num2;
  //   this.outputFromChild.emit(this.num3);
  //   return this.num3;
  // }

  onClick(): number{
    if(this.num1 > 0 && this.num2 > 0){
      this.num3 = this.num1 * this.num2;
    }
    if(this.num1 < 0 || this.num2 < 0){
      this.num3 = this.num1 / this.num2;
    }
    this.outputFromChild.emit(this.num3);
    return this.num3;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes[this.num1]){
    //   this.num1 = changes[this.num1].currentValue;
    // }
    // if(changes[this.num2]){
    //   this.num2 = changes[this.num2].currentValue;
    // }
    console.log(changes);
  }

  ngOnInit(): void {}
}