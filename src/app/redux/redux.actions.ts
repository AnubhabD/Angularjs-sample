import { createAction, props } from '@ngrx/store';
import { BackendApiData, ListingData } from '../interfaces/backend-api.interface';

// export const increment = createAction('increment');
// console.log(increment,"ings");

// export const decrement = createAction('decrement');
// export const reset = createAction('reset');

export const ADD_POST_ACTION = 'add post';
export const UPDATE_POST_ACTION = 'update post';
export const DELETE_POST_ACTION = 'delete post';
export const LOAD_POSTS = 'load posts';
export const LOAD_POSTS_SUCCESS = 'load posts success';

export const addPost = createAction(ADD_POST_ACTION, props<{posts: ListingData}>());
// export const addPostSuccess = createAction(LOAD_POSTS_SUCCESS, props<{posts: ListingData}>());
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post: ListingData}>());
export const deletePost = createAction(DELETE_POST_ACTION, props<{_id: ListingData}>());

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{post: ListingData[]}>());