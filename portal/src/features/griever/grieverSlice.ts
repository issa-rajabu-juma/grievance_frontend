// IMPORTS
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'


// INTEFACE
interface Griever{
    griever_id: string
    f_name: string
    m_name: string
    l_name: string
    gender: string
    age: string
    mobile_no: string
    street: string
    ward: string
    district: string
    region: string
    anonymous: string
    marital_status: string
    spouse: string
    next_kin: string
    created_date: string
    updated_date: string
    created_by: string
    updated_by: string
}

export interface GrieverState {
    grievers: Griever[],
    status: 'idle' | 'loading' | 'failed'
}

// INITIAL STATE
const initialState: GrieverState = {
    grievers: [
        {
            "griever_id": '1',
            "f_name": "TAJR",
            "m_name": "RICKSON",
            "l_name": "NTUKYU",
            "gender": "MALE",
            "age": "27",
            "mobile_no": "12345",
            "street": "MWONGOZO",
            "ward": "BAMBA",
            "district": "KGM",
            "region": "DSM",
            "anonymous": "0",
            "marital_status": "1",
            "spouse": "MARIA",
            "next_kin": "ROJA",
            "created_date": "01/01/2023",
            "updated_date": "01/01/2023",
            "created_by": "1",
            "updated_by": "1"
        },

        {
            "griever_id": '2',
            "f_name": "ds",
            "m_name": "ds",
            "l_name": "fdf",
            "gender": "MALE",
            "age": "27",
            "mobile_no": "12345",
            "street": "MWONGOZO",
            "ward": "BAMBA",
            "district": "KGM",
            "region": "DSM",
            "anonymous": "0",
            "marital_status": "1",
            "spouse": "MARIA",
            "next_kin": "ROJA",
            "created_date": "01/01/2023",
            "updated_date": "01/01/2023",
            "created_by": "1",
            "updated_by": "1"
        }
    
    ],
    status: 'idle'
}

// LOGICS


// SLICE
export const grieverSlice = createSlice({
    name: 'Griever',
    initialState,
    reducers: {},
    extraReducers: {}
})

// EXPORTS
// actions

// selectors
export const selectAllGrievers = (state: RootState) => state.grievers

// reducer
export default grieverSlice.reducer