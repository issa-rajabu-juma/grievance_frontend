// IMPORTS
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";



const base_url = 'http://127.0.0.1:8000/severity/'

// INITIAL STATE
const initialState = {
    severities: {},
    status: 'idle',
    errors: {}
}

// LOGICS
export const fetchSeverities = createAsyncThunk('severity/fetchSeverities', async () => {
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
export const severitySlice = createSlice({
    name: 'client',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchSeverities.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchSeverities.fulfilled, (state, action) => {
            state.severities = action.payload
            state.status = 'severities fetching succeeded'
        })
        .addCase(fetchSeverities.rejected, (state, action) => {
            state.status = 'failed to fetch severities'
            state.errors = action.error
        })
    }
})

// EXPORTS
// actions

// selectors
export const selectAllSeverities = (state: RootState) => state.severities

// reducers
export default severitySlice.reducer