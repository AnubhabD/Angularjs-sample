import { BackendApiData, ListingData } from "../interfaces/backend-api.interface";

export interface PostsState {
    posts: ListingData[];
};

export const initialState: PostsState = {
    posts: [],
};