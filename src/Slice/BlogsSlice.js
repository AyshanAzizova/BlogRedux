import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const apiUrl = 'http://localhost:3003/blogs';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await axios.get(apiUrl)
  return response.data
})

export const BlogsSlice = createSlice({
  name: 'blog',
  initialState: {
      items: [],
      status: "nothing"
  },
  reducer: {},
  extraReducers: (builder) => {
      builder
          .addCase(fetchBlogs.pending, (state, action) => {
              state.status = 'loading'
          })
          .addCase(fetchBlogs.fulfilled, (state, action) => {
              state.status = 'succeed'
              state.items = action.payload
          })
          .addCase(fetchBlogs.rejected, (state, action) => {
              state.status = 'failed'
          })
  }
})
export default BlogsSlice.reducer