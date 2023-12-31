// IMPORTS
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import axios from "axios";



const base_url = 'http://127.0.0.1:8000/client/'

// INITIAL STATE
const initialState = {
    clients: {},
    status: 'idle',
    errors: {}
}


// LOGICS
export const fetchClients = createAsyncThunk('client/fetchClients', async () => {
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
export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchClients.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchClients.fulfilled, (state, action) => {
            state.clients = action.payload
            state.status = 'client fetching succeeded'
        })
        .addCase(fetchClients.rejected, (state, action) => {
            state.status = 'failed to fetch'
            state.errors = action.error
        })
    }
})

// EXPORTS
// actions

// selectors
export const selectAllClients = (state: RootState) => state.clients

// reducers
export default clientSlice.reducer