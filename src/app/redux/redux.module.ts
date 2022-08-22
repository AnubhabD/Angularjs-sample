import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { counterReducer } from './redux.reducer';
import { ReduxComponent } from './redux.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'

import { PostsEffect } from './redux.effects';
import { postsReducer } from './redux.reducer';

@NgModule({
  declarations: [ReduxComponent],
  imports: [
    CommonModule,
    // StoreModule.forRoot({ count: counterReducer })
    // StoreModule.forFeature({POST_STATE_NAME, postsReducer}),
    StoreModule.forRoot({ count: postsReducer }), //POST_STATE_NAME,
    EffectsModule.forRoot([PostsEffect]),
],
})
export class ReduxModule {}

// console.log("reduxmodule=>","1");