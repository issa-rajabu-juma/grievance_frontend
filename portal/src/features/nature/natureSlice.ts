// IMPORTS
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";

const base_url = 'http://127.0.0.1:8000/nature/'

// INITIAL STATE
const initialState = {
    natures: {},
    status: 'idle',
    errors: {}
}

// LOGICS
export const fetchNatures = createAsyncThunk('nature/fetchNatures', async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const response = await axios.get(base_url, config)
    return response.data
})

// SLICE
export const natureSlice = createSlice({
    name: 'nature',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchNatures.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchNatures.fulfilled, (state, action) => {
            state.natures = action.payload
            state.status = 'client fetching succeeded'
        })
        .addCase(fetchNatures.rejected, (state, action) => {
            state.status = 'failed to fetch'
            state.errors = action.error
        })
    }
})

// EXPORTS
// actions

// selectors
export const selectAllNatures = (state: RootState) => state.natures

// reducers
export default natureSlice.reducer