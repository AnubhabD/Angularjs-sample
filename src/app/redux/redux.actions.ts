import { createAction } from '@ngrx/store';

export const increment = createAction('increment');
console.log(increment,"ings");

export const decrement = createAction('decrement');
export const reset = createAction('reset');