import {
    createAsyncThunk,
    createSlice
  } from "@reduxjs/toolkit"
  import axios from "axios";
  
  const apiUrl = 'http://localhost:3003/creators';
  
  export const fetchCreators = createAsyncThunk('creators/fetchCreators', async () => {
    const response = await axios.get(apiUrl)
    return response.data
  })
  
  export const CreatorSlice = createSlice({
    name: 'creators',
    initialState: {
        items: [],
        status: "nothing"
    },
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCreators.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCreators.fulfilled, (state, action) => {
                state.status = 'succeed'
                state.items = action.payload
            })
            .addCase(fetchCreators.rejected, (state, action) => {
                state.status = 'failed'
            })
    }
  })
  export default CreatorSlice.reducer