// IMPORTS
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'

// // INTERFACES
// interface Griever {
//     fname: string
//     lname: String
//     mname: string
//     gender: String
//     age: string
//     mobile_no: string
//     street: string
//     ward: string
//     district: string
//     region: string
//     marital_status: string
//     spouse: string
//     kin: string
    
    
    
// }

// export interface GrieverState{
//     griever: Griever[],
//     status: any,
//     errors: any
// }

// INITIAL STATE
const initialState = {
    griever: {},
    status: 'idle',
    errors: '',
}

// LOGICS
export const newGriever:any = createAsyncThunk('griever/newGriever', async (data:any) => {
    console.log(data)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/griever/', data, config)
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
            state.griever = action.payload
        })
        .addCase(newGriever.rejected, (state, action) => {
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