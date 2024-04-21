import {
  configureStore
} from '@reduxjs/toolkit'
import BlogsSlice from '../Slice/BlogsSlice'



export const Store = configureStore({
  reducer: {
      blogs: BlogsSlice,
  }
})