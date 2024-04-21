import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios";
  
  const apiUrl = 'http://localhost:3003/blogsCard';
  
  export const fetchBlogsCard = createAsyncThunk('blogsCard/fetchBlogsCard', async () => {
    const response = await axios.get(apiUrl)
    return response.data
  })
  
  export const BlogsCardSlice = createSlice({
    name: 'blogsCard',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlogsCard.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchBlogsCard.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchBlogsCard.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
  })
  export default BlogsCardSlice.reducer