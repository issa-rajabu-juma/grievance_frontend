import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../../app/hooks";

const base_url = 'http://127.0.0.1:8000/grievance/'



// INITIAL STATE
const initialState= {
    grievances: {},
    status: "idle",
    errors: {}
}



// LOGICS
export const fetchGrievances = createAsyncThunk('grievance/fetchGrievances', async () => {
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

export const newGrievance = createAsyncThunk('grievance/newGrievance', async (data: any, {dispatch}) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const response = await axios.post(base_url, data, config)
    return (await dispatch(fetchGrievances())).payload
})

// SLICE
export const grievanceSlice = createSlice({
    name: "Grievance",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGrievances.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchGrievances.fulfilled, (state, action) => {
            state.grievances = action.payload
            state.status = 'succeeded'
        })
        .addCase(fetchGrievances.rejected, (state, action) => {
            state.status = 'failed to fetch'
            state.errors = action.error
        })
        .addCase(newGrievance.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(newGrievance.fulfilled, (state, action) => {
           state.grievances = action.payload
        })
        .addCase(newGrievance.rejected, (state, action) => {
            state.status = 'failed to record a new grievance'
            state.errors = action.error
        })
    }
})


// EXPORT

// actions

// selectors
export const selectAllGrievances = (state: RootState) => state.grievances.grievances
export const selectGrievanceStatus = (state: RootState) => state.grievances.status
export const selectGrievanceError = (state: RootState) => state.grievances.errors


// reducers
export default grievanceSlice.reducer
