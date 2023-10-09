// IMPORTS
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// INTERFACES
export interface Client {
    client_id: string
    name: string
    type: string
    phone: string
    address: string
    region: string
    country: string
    created_date: string
    updated_date: string
    created_by: string
    updated_by: string
}

export interface ClientState {
    clients: Client[],
    status: 'idle' | 'loading' | 'failed'
}

// INITIAL STATE
const initialState: ClientState = {
    clients: [
        {
            "client_id": '1',
            "name": "TANESCO",
            "type": "COMPANY",
            "phone": "12345",
            "address": "1111",
            "region": "DSM",
            "country": "TZ",
            "created_date": "01/01/2023",
            "updated_date": "01/01/2023",
            "created_by": "",
            "updated_by": ""
        },
        {
            "client_id": '2',
            "name": "CMS",
            "type": "PROJECT",
            "phone": "123456",
            "address": "1112",
            "region": "DOM",
            "country": "TZ",
            "created_date": "2023-09-18 07:41:54.382207",
            "updated_date": "01/01/2023",
            "created_by": "",
            "updated_by": ""
        },
        {
            "client_id": '3',
            "name": "DIT",
            "type": "INSTITUTE",
            "phone": "1234567",
            "address": "1113",
            "region": "SGD",
            "country": "TZ",
            "created_date": "2023-09-18 00:30:17.206804",
            "updated_date": "01/01/2023",
            "created_by": "",
            "updated_by": ""
        },
    ],
    status: 'idle'
}

// LOGICS


// SLICE
export const clientSlice = createSlice({
    name: 'Client',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

// EXPORTS
// actions

// selectors
export const selectAllClients = (state: RootState) => state.clients

// reducers
export default clientSlice.reducer