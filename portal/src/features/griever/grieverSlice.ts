// IMPORTS
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
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
    status: any,
    errors: any

}

// INITIAL STATE
const initialState: GrieverState = {
    grievers: [],
    status: 'idle',
    errors: null
}

// LOGICS


// SLICE
export const grieverSlice = createSlice({
    name: 'Griever',
    initialState,
    reducers: {
        registerGriever: {
            reducer: (state, action: PayloadAction<Griever>) => {
                console.log(action.payload)
            },
            prepare: (f_name, m_name, l_name, gender, age,  mobile_no, street, ward, district, region, anonymous, marital_status, spouse, next_kin, created_date, updated_date, created_by, updated_by) => {
                return {
                    payload: {
                        griever_id: nanoid(),
                        f_name,
                        m_name,
                        l_name,
                        gender,
                        age,
                        mobile_no,
                        street,
                        ward,
                        district,
                        region,
                        anonymous,
                        marital_status,
                        spouse,
                        next_kin,
                        created_date,
                        updated_date,
                        created_by,
                        updated_by
}
                    }
                }
            }
        }
    ,
    extraReducers: (builder) =>{}
})

// EXPORTS
// actions
export const { registerGriever } = grieverSlice.actions

// selectors
export const selectAllGrievers = (state: RootState) => state.grievers

// reducer
export default grieverSlice.reducer