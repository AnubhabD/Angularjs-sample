import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './redux.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log(state + 1, 'reducer',"after changing=> 5");
    return state + 1;
  }),
  on(decrement, (state) => {
    console.log(state - 1, 'reducer',"=>4");
    return state - 1;
  }),
  on(reset, (state) => {
    console.log((state = 0), 'reducer',"=>4");
    return (state = 0);
  })
);

export function counterReducer(state: number | undefined, action: Action) {
  console.log('state=>', state,"action=>", action,"=>2, 4");
  return _counterReducer(state, action);
}

// export function counterReducer = createReducer()