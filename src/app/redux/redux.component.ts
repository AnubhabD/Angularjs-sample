import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './redux.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './redux.component.html',
})
export class ReduxComponent {
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
    console.log("action=>",this.count$,"=>3");
  }

  increment() {
    console.log("click increment")
    this.store.dispatch(increment());
    console.log("action=>",increment(),"after changing=> 6");
  }

  decrement() {
    this.store.dispatch(decrement());
    console.log("action=>",decrement());
  }

  reset() {
    this.store.dispatch(reset());
    console.log("action=>",reset());
  }

  // getDataFromPostApi(){
  //   this.store.dispatch(getDataFromPostApi());
  // }
}