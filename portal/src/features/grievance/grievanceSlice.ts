import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { nanoid } from "@reduxjs/toolkit";


// INTERFACES
interface Grievance {
    grievance_id: string
    date: string
    title: string
    description: string
    nature: string
    severity: string
    client: string
    who: string
    what: string
    where: string
    result: string
    comment: string
    channel: string
    language: string
    attachment: string
    griever: string
    grievance_status: string
    created_date: string
    updated_date:string
    created_by: string
    updated_by: string
    
}

export interface GrievanceState{
    grievances: Grievance[]
    status: 'idle' | 'loading' | 'failed'
}

// INITIAL STATE
const initialState: GrievanceState = {
    grievances: [
                    {
                        "grievance_id": '1',
                        "date": "12/03/2023",
                        "title": "Maoni yangu yametupiliwa mbali",
                        "description": "tokea mwaka juzi sijapaata feedback please comply",
                        "nature": "complaint",
                        "severity": "5",
                        "client": "1",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "a.png",
                        "griever": "1",
                        "grievance_status": "1",
                        'created_date': '',
                        'updated_date': '',
                        'created_by': '',
                        'updated_by': ''

                        
                    },

                    {
                        "grievance_id": '2',
                        "date": "12/03/2023",
                        "title": "Uchafuzi wa mazingira",
                        "description": "Hali mbaya ya dunia huku mwongozo",
                        "nature": "complaint",
                        "severity": "5",
                        "client": "2",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "b.png",
                        "griever": "1",
                        "grievance_status": "1",
                        'created_date': '',
                        'updated_date': '',
                        'created_by': '',
                        'updated_by': ''

                    },

                    {
                        "grievance_id": '3',
                        "date": "12/03/2023",
                        "title": "Maji kujaa majumbani",
                        "description": "Maji hayo yanaletwa na kiwanda kimoja hivi sikitaji",
                        "nature": "complaint",
                        "severity": "5",
                        "client": "3",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "c.png",
                        "griever": "1",
                        "grievance_status": "1",
                        'created_date': '',
                        'updated_date': '',
                        'created_by': '',
                        'updated_by': ''

                        
                    },
                    {
                        "grievance_id": '4',
                        "date": "12/03/2023",
                        "title": "Umeme",
                        "description": "imekuwa tatizo kubwa sana",
                        "nature": "complaint",
                        "severity": "5",
                        "client": "3",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "d.png",
                        "griever": "1",
                        "grievance_status": "1",
                        'created_date': '',
                        'updated_date': '',
                        'created_by': '',
                        'updated_by': ''
                      
                    }
                ],
    status: "idle"
}

// LOGICS




// SLICE
export const grievanceSlice = createSlice({
    name: "Grievance",
    initialState,
    reducers: {
        createGrievance: {
            reducer: (state, action: PayloadAction<Grievance>) => {
                console.log(action.payload)
                let data = action.payload
           
                let grievance = {
                    'grievance_id': nanoid(),
                    'date': data.date,
                    'title': data.title,
                    'description': data.description,
                    'nature': data.nature,
                    'severity': data.severity,
                    'client': data.client,
                    'who': data.who,
                    'what': data.what,
                    'where': data.where,
                    'result': data.result,
                    'comment': data.comment,
                    'channel': data.channel,
                    'language': data.language,
                    'attachment': data.attachment,
                    'griever': data.griever,
                    'grievance_status': data.grievance_status,
                    'created_date': '',
                    'updated_date': '',
                    'created_by': '',
                    'updated_by': ''

                }
                state.grievances.push(grievance)

                
                // define tracker payload
                let tracker = {
                    'tracker_id': nanoid(),
                    'griever': grievance.griever,
                    'grievance': grievance.grievance_id,
                    'client': data.client,
                    'start_date': Date.now(),
                }

                console.log(grievance)
                console.log()
                console.log(tracker)


            }, 
            prepare: ( date, title, description, nature, severity, client, who, what, where, result, comment, channel, language, attachment, griever, grievance_status, created_date, updated_date, created_by, updated_by) =>{
                return {
                    payload: {
                        grievance_id: nanoid(),
                        date,
                        title,
                        description,
                        nature,
                        severity,
                        client,
                        who,
                        what,
                        where,
                        result,
                        comment,
                        channel,
                        language,
                        attachment,
                        griever,
                        grievance_status,
                        created_date,
                        updated_date,
                        created_by,
                        updated_by
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {

    }
})


// EXPORT

// actions
export const { createGrievance } = grievanceSlice.actions

// selectors
export const selectAllGrievances = (state: RootState) => state.grievances


// reducers
export default grievanceSlice.reducer
