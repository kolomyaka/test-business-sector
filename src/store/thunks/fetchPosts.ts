import postSlice from '../slices/postSlice';
import { AppDispatch } from "../store";


export const fetchPosts = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(postSlice.actions.fetchPosts())
  } catch (error) {
    
  }
}