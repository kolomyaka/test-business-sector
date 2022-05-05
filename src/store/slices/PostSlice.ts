import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Post, postState, Response } from "../types/Types";


const initialState: postState = {
  posts: [],
  isLoading: false,
  response: {
    status: 0,
    statusText: ''
  }
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts(state) {
      state.isLoading = true;
    },
    fetchPostsSuccess(state, action: PayloadAction<AxiosResponse<Post[]>>) {
      state.isLoading = false;
      state.posts = action.payload.data;
      state.response = {
        status: action.payload.status,
        statusText: action.payload.statusText,
      }
    },
    fetchPostsError(state, action) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        statusText: action.payload.statusText
      }
    }
  }
})

export const { fetchPosts, fetchPostsSuccess, fetchPostsError} = postSlice.actions;

export default postSlice.reducer;