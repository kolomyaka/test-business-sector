import { postApi } from "../../services/PostApi";
import { AppDispatch } from "../store";
import { postSlice } from '../slices/postSlice'

export const fetchPostsThunk = (page: number) => async (dispatch: AppDispatch) => {
  console.log('hello');
  
  try {
    dispatch(postSlice.actions.fetchPosts())
    const res = await postApi.fetchPosts(page);
    if (res.status === 200) {
      dispatch(postSlice.actions.fetchPostsSuccess(res))
    } else {
      dispatch(postSlice.actions.fetchPostsError(res))
    }
  } catch (error) {
    console.log(error);
    
  }
}