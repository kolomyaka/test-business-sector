import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Post, Response } from "../types/Types";

type postState = {
  posts: Post[],
  isLoading: boolean,
  response: Response
}

const initialState: postState = {
  posts: [],
  isLoading: false,
  response: {
    status: 0,
    statusText: ''
  }
}

const postSlice = createSlice({
  name: 'postSlice',
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

export const { fetchPosts, fetchPostsSuccess, fetchPostsError } = postSlice.actions;

export default postSlice.reducer;