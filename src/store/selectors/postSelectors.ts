import { RootState } from "../store";
import { Post, postState } from "../types/Types";


export const selectPosts = (state: RootState): postState => state.posts;

export const selectPostsItem = (state: RootState): Post[] => selectPosts(state).posts;

export const selectLoadingStatus = (state: RootState): boolean => selectPosts(state).isLoading;