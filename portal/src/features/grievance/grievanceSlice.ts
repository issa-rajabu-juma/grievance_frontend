import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const base_url = 'http://127.0.0.1:8000/grievance'




// INTERFACES
interface Grievance {
    grievance_id: string
    ref: String
    start_date: string
    end_date: String
    title: string
    description: string
    what: string
    where: string
    who: string
    result: string
    comment: string
    nature: string
    severity: string
    channel: string
    operational_status: String
    language: string
    assignment_date: String
    time_spent: String
    last_pending_date: String
    pending_reason: String
    resolution_date: String
    conclusion: String
    satisfaction_level: String
    satisfaction_comment: String
    pending_started: String
    pending_last_start: String
    pending_stopped: String
    pending_time_spent: String
    client: string
    workforce: String
    team: String
    agent: String
    griever: string
    parent: String
    child: String
    created_by: string
    updated_by: string
    created_date: string
    updated_date:string
    attachments: string
    
}

export interface GrievanceState{
    grievances: Grievance[]
    status: any,
    errors: any
}

// INITIAL STATE
const initialState: GrievanceState = {
    grievances: [],
    status: "idle",
    errors: null
}

// LOGICS

// LOGICS
export const fetchGrievances = createAsyncThunk('grievance/fetchGrievances', async () => {
    const response = await axios.get(base_url)
    return response.data
})

export const newGrievance = createAsyncThunk('grievance/newGrievance', async (grievance: any) => {
    const response = await axios.post(base_url, grievance)
    return response.data
})

 
// SLICE
export const grievanceSlice = createSlice({
    name: "Grievance",
    initialState,
    reducers: {
        createGrievance: {
            reducer: (state, action: PayloadAction<Grievance>) => {
                console.log(action.payload)
                
            }, 
            prepare: ( start_date, end_date, title, description, what, where, who, result, comment, nature, severity, channel, operational_status, language, assignment_date, time_spent, last_pending_date, pending_reason, resolution_date, conclusion, satisfaction_level, satisfaction_comment, pending_started, pending_last_start, pending_stopped, pending_time_spent, client, workforce, team, agent, griever, parent, child, created_by, updated_by, created_date, updated_date, attachments) =>{
                return {
                    payload: {
                        grievance_id: nanoid(),
                        ref: nanoid(),
                        start_date,
                        end_date,
                        title,
                        description,
                        what,
                        where,
                        who,
                        result,
                        comment,
                        nature,
                        severity,
                        channel,
                        operational_status,
                        language,
                        assignment_date,
                        time_spent,
                        last_pending_date,
                        pending_reason,
                        resolution_date,
                        conclusion,
                        satisfaction_level,
                        satisfaction_comment,
                        pending_started,
                        pending_last_start,
                        pending_stopped,
                        pending_time_spent,
                        client,
                        workforce,
                        team,
                        agent,
                        griever,
                        parent,
                        child,
                        created_by,
                        updated_by,
                        created_date,
                        updated_date,
                        attachments
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGrievances.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchGrievances.fulfilled, (state, action) => {
            console.log(action.payload)
            state.grievances.push(action.payload)
            state.status = 'succeeded'
        })
        .addCase(fetchGrievances.rejected, (state, action) => {
            state.status = 'failed'
            state.errors = action.error
        })
        .addCase(newGrievance.fulfilled, (state, action) => {
           console.log(action.payload)
           state.grievances.push(action.payload)
        })
    }
})


// EXPORT

// actions
export const { createGrievance } = grievanceSlice.actions

// selectors
export const selectAllGrievances = (state: RootState) => state.grievances.grievances
export const selectGrievanceStatus = (state: RootState) => state.grievances.status
export const selectGrievanceError = (state: RootState) => state.grievances.errors


// reducers
export default grievanceSlice.reducer
