import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import postsSliceReducer from './slices/postSlice';


const rootReducer = combineReducers({
  posts: postsSliceReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }))
}) 

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()