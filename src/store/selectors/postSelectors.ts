import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { postState } from "../types/Types";


export const selectPosts = (state: RootState): postState => state.posts;

export const selectPostsItem = createSelector(selectPosts, posts => posts.posts);

export const selectLoadingStatus = (state: RootState): boolean => selectPosts(state).isLoading;