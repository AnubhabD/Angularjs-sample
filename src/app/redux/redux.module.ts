import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { counterReducer } from './redux.reducer';
import { ReduxComponent } from './redux.component';

import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ReduxComponent],
  imports: [CommonModule, StoreModule.forRoot({ count: counterReducer })],
})
export class ReduxModule {}

console.log("reduxmodule=>","1");