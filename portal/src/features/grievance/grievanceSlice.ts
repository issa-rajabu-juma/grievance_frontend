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
    who: string
    what: string
    where: string
    result: string
    comment: string
    channel: string
    language: string
    attachment: string
    griever: string
    status: string

    
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
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "a.png",
                        "griever": "1",
                        "status": "1",


                        
                    },

                    {
                        "grievance_id": '2',
                        "date": "12/03/2023",
                        "title": "Uchafuzi wa mazingira",
                        "description": "Hali mbaya ya dunia huku mwongozo",
                        "nature": "complaint",
                        "severity": "5",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "b.png",
                        "griever": "1",
                        "status": "1",
                        

                    },

                    {
                        "grievance_id": '3',
                        "date": "12/03/2023",
                        "title": "Maji kujaa majumbani",
                        "description": "Maji hayo yanaletwa na kiwanda kimoja hivi sikitaji",
                        "nature": "complaint",
                        "severity": "5",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "c.png",
                        "griever": "1",
                        "status": "1",


                        
                    },
                    {
                        "grievance_id": '4',
                        "date": "12/03/2023",
                        "title": "Umeme",
                        "description": "imekuwa tatizo kubwa sana",
                        "nature": "complaint",
                        "severity": "5",
                        "who": "2023-09-28 00:57:52.322984",
                        "what": "12/03/2023",
                        "where": "1",
                        "result": "1",
                        "comment": "1",
                        "channel": "portal",
                        "language": "swaheng",
                        "attachment": "d.png",
                        "griever": "1",
                        "status": "1",
                      
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
        createGrievance(state, action){
            let data = action.payload
           
            let grievance = {
                'grievance_id': nanoid(),
                'date': String(Date.now()),
                'title': data.title,
                'description': data.description,
                'nature': data.nature,
                'severity': data.severity,
                'who': data.who,
                'what': data.what,
                'where': data.where,
                'result': data.result,
                'comment': data.comment,
                'channel': 'Portal',
                'language': 'Swahili',
                'attachment': data.attachment,
                'griever': nanoid(),
                'status': 'New',

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
