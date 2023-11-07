import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = 'http://127.0.0.1:8000/grievance'




// INTERFACES
// interface Grievance {
//     grievance_id: string
//     ref: String
//     start_date: string
//     end_date: String
//     title: string
//     description: string
//     what: string
//     where: string
//     who: string
//     result: string
//     comment: string
//     nature: string
//     severity: string
//     channel: string
//     operational_status: String
//     language: string
//     assignment_date: String
//     time_spent: String
//     last_pending_date: String
//     pending_reason: String
//     resolution_date: String
//     conclusion: String
//     satisfaction_level: String
//     satisfaction_comment: String
//     pending_started: String
//     pending_last_start: String
//     pending_stopped: String
//     pending_time_spent: String
//     client: string
//     workforce: String
//     team: String
//     agent: String
//     griever: string
//     parent: String
//     child: String
//     created_by: string
//     updated_by: string
//     created_date: string
//     updated_date:string
//     attachments: string
    
// }

// export interface GrievanceState{
//     grievances: Grievance[]
//     status: any,
//     errors: any
// }

// INITIAL STATE
const initialState= {
    grievances: {},
    status: "idle",
    errors: {}
}

// LOGICS

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

export const newGrievance = createAsyncThunk('grievance/newGrievance', async (data: any) => {
    console.log(data)
   
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
            console.log(action.payload)
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
           console.log(action.payload)
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
