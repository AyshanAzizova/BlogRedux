import {
  configureStore
} from '@reduxjs/toolkit'
import BlogsSlice from '../Slice/BlogsSlice'
import BlogsCardSlice from '../Slice/BlogsCardSlice'
import CreatorSlice from '../Slice/CreatorSlice'



export const Store = configureStore({
  reducer: {
      blogs: BlogsSlice,
      blogsCard:BlogsCardSlice,
      creators:CreatorSlice
  }
})