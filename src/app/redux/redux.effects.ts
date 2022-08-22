import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

import { loadPosts, loadPostsSuccess } from './redux.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class PostsEffect {
  constructor(private actions$: Actions, private postsService: ApiService) {}

  loadPosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts),
        mergeMap((action) => {
          return this.postsService.getPosts().pipe(
            map((post) => {
              console.log('---------->', post);
              return loadPostsSuccess({ post });
            })
          );
        })
      );
    }
    // { dispatch: false }
  );
}