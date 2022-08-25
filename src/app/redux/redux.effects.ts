import { Injectable } from '@angular/core';
import { ApiService } from '../service/api.service';

import {
  // addPost,
  loadPosts,
  loadPostsSuccess,
  // addPostSuccess,
} from './redux.actions';

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

  // apiDataPosts$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(addPost),
  //       mergeMap((action) => {
  //         return this.postsService.getPosts().pipe(
  //           map((posts: any) => {
  //             console.log('---------->', posts);
  //             return addPostSuccess({ posts });
  //           })
  //         );
  //       })
  //     );
  //   }
  //   // { dispatch: false }
  // );
}