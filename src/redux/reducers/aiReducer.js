
import { createSlice } from '@reduxjs/toolkit'
import { fetchAIResults } from '../actions'

const aiReducer = createSlice({
     name: 'ai',
     initialState: {
         conditions: [],
         status: 'idle',
         error: null
     },
     reducers: {},
     extraReducers: (builder) => {
         builder
         .addCase(fetchAIResults.pending, (state) => {
             state.status = 'loading'
         })
         .addCase(fetchAIResults.fulfilled, (state, action) => {
             state.status = 'succeeded'
             state.conditions = action.payload
         })
         .addCase(fetchAIResults.rejected, (state, action) => {
             state.status = 'failed'
             state.error = action.payload
         })
     }
})

export default aiReducer.reducer