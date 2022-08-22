// import { Action, createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './redux.actions';

import { createReducer, on } from "@ngrx/store";
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
        let post = {...action.post};
        post._id = (state.posts.length + 1).toString(); //state.post
        return {
            ...state,
            posts: [...state.posts, post], //state.post
        }
    }),
    // on(updatePost, (state, action) => {
    //     const updatedPosts = state.posts.map((post) => {
    //         return action.post._id = post._id ? action.post : post;
    //     });
    //     return {
    //         ...state,
    //         posts: updatedPosts
    //     };
    // }),
    // on(deletePost, (state, {id}) => {
    //     const updatedPosts = state.posts.filter((post: { id: string; }) => {
    //         return post.id !== id;
    //     });
    //     return {
    //         ...state,
    //         posts: updatedPosts,
    //     };
    // }),
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