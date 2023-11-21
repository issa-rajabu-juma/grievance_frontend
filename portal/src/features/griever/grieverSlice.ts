// IMPORTS
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'

const base_url = 'http://localhost:8000/griever/'


// INITIAL STATE
const initialState = {
    grievers: {},
    status: 'idle',
    errors: '',
}

// LOGICS
export const newGriever:any = createAsyncThunk('griever/newGriever', async (data:any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    const response = await axios.post(base_url, data, config)
    return response.data
})

export const fetchGrievers = createAsyncThunk('griever/fetchGrievers', async () => {
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

export const updateGriever:any = createAsyncThunk('griever/updateGriever', async (data:any) => {
    console.log(data)
    const id = data.griever_id
    delete data.griever_id
    console.log(data)
    console.log(id)
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    const response = await axios.put(base_url + id + '/', data, config)
    return response.data
})


// SLICE
export const grieverSlice = createSlice({
    name: 'griever',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(newGriever.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(newGriever.fulfilled, (state, action) => {
            state.status = 'griever added'
            state.grievers = action.payload
        })
        .addCase(newGriever.rejected, (state, action) => {
            state.status = 'failed'
            state.errors = 'error'
        })
        .addCase(fetchGrievers.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchGrievers.fulfilled, (state, action) => {
            state.status = 'success'
            state.grievers = action.payload
        })
        .addCase(fetchGrievers.rejected, (state, action) => {
            state.status = 'failed'
            state.errors = 'error'
        })
        .addCase(updateGriever.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(updateGriever.fulfilled, (state, action) => {
            state.status = 'success'
            // state.grievers = action.payload
            console.log(action.payload)
        })
        .addCase(updateGriever.rejected, (state, action) => {
            state.status = 'failed'
            state.errors = 'error'
        })
    }
})

// EXPORTS
// actions
// export const { registerGriever } = grieverSlice.actions

// selectors
export const selectAllGrievers = (state: RootState) => state.grievers

// reducer
export default grieverSlice.reducer