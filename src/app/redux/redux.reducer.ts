// import { Action, createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './redux.actions';

import { createReducer, on } from "@ngrx/store";
import { ListingData } from "../interfaces/backend-api.interface";
import { addPost, deletePost, loadPostsSuccess, updatePost } from "./redux.actions";
import { initialState } from "./redux.state"

// const initialState: PostsState[] = [];

// const _counterReducer = createReducer(
//   initialState,
//   on(increment, (state) => {
//     console.log(state + 1, 'reducer',"after changing=> 5");
//     return state + 1;
//   }),
//   on(decrement, (state) => {
//     console.log(state - 1, 'reducer',"=>4");
//     return state - 1;
//   }),
//   on(reset, (state) => {
//     console.log((state = 0), 'reducer',"=>4");
//     return (state = 0);
//   })
// );

// export function counterReducer(state: number | undefined, action: Action) {
//   console.log('state=>', state,"action=>", action,"=>2, 4");
//   return _counterReducer(state, action);
// }

const _postsReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = {...action.posts};
        post._id = (state.posts.length + 1).toString(); //state.post
        return {
            ...state,
            posts: [...state.posts, post], //state.post
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPosts = state.posts.map((post) => {
            const data = ((action.post._id === post._id) ? action.post : post);
            return data;
        });
        return {
            ...state,
            posts: updatedPosts
        };
    }),
    on(deletePost, (state, {_id}) => {
        const postToBeDeleted = state.posts.filter((post) => {
            return post._id;
            // const data = (post._id == _id);
            // return data;
        });
        return {
            ...state,
            posts: postToBeDeleted,
        };
    }),
    on(loadPostsSuccess, (state, action) => {
        return {
            ...state,
            posts: action.post,
        };
    })
);

export function postsReducer(state: any, action: any){
    return _postsReducer(state, action);
}