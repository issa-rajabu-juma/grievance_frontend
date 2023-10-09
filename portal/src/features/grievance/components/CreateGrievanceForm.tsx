import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { createGrievance } from '../grievanceSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectAllClients } from '../../client/clientSlice'
import { selectAllGrievers } from '../../griever/grieverSlice'


const clients = [{'id': 1, 'name':"Complaint"}, {'id': 2, 'name':"Refund"}, {'id': 3, 'name':"Theft"}]
const natures = [{'id': 1, 'name':"Complaint"}, {'id': 2, 'name':"Refund"}, {'id': 3, 'name':"Theft"}]
const severities = [{'id': 1, 'name':"Low"}, {'id': 2, 'name':"Medium"}, {'id': 3, 'name':"High"}]

const CreateGrievanceForm = () => {
    // define local state
    const [client, setClient] = useState('')
    const [nature, setNature] = useState('')
    const [severity, setSeverity] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [who, setWho] = useState('')
    const [where, setWhere] = useState('')
    const [what, setWhat] = useState('')
    const [result, setResult] = useState('')
    const [comment, setComment] = useState('')
    const [attachment, setAttachment] = useState('')
    const [date, setDate] = useState('')
    const [griever, setGriever] = useState('')
    const [channel, setChannel] = useState('')
    const [language, setLanguage] = useState('')
    const [grievance_status, setGrievanceStatus] = useState('')
    const [updated_date, setUpdatedDate] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [created_date, setCreatedDate] = useState('')
    const [updated_by, setUpdatedBy] = useState('')


    
    // declare dispatch
    const dispatch = useAppDispatch()

    // selectors
    const clientss = useAppSelector(selectAllClients)
    const grieverr = useAppSelector(selectAllGrievers)


    // set choices
    const clientOptions = (
         Object.keys(clientss.clients).map((clientee:any) => (
            <option value={clientss.clients[clientee].client_id} key={clientss.clients[clientee].client_id}>{clientss.clients[clientee].name}</option>
        ))
    )

    const natureOptions = (
        natures.map((nature:any) => (
            <option value={nature.id} key={nature.id}>{nature.name}</option>
        ))
    )

    const severityOptions = (
        severities.map((severity:any) => (
            <option value={severity.id} key={severity.id}>{severity.name}</option>
        ))
    )

    const canSave = Boolean(title) && Boolean(description) && Boolean(client)
    

    // handle on change to set out local state
    const onClientChange = (e: any) => setClient(e.target.value)
    const onSeverityChange = (e: any) => setSeverity(e.target.value)
    const onTitleChange = (e: any) => setTitle(e.target.value)
    const onNatureChange = (e: any) => setNature(e.target.value)
    const onDescritionChange = (e: any) => setDescription(e.target.value)
    const onWhoChange = (e: any) => setWho(e.target.value)
    const onWhatChange = (e: any) => setWhat(e.target.value)
    const onWhereChange = (e: any) => setWhere(e.target.value)
    const onCommentChange = (e: any) => setComment(e.target.value)
    const onResultChange = (e: any) => setResult(e.target.value)
    const onAttachmentChange = (e: any) => setAttachment(e.target.value)

    // submit form
    const onCreateGrievance = () => {
        if (title && client && nature && description && severity){
          

            dispatch(
                createGrievance(
                    date,
                    title,
                    description,
                    nature,
                    severity,
                    client,
                    who,
                    what,
                    where,
                    comment,
                    channel,
                    language,
                    result,
                    attachment,
                    griever,
                    grievance_status,
                    created_date,
                    updated_date,
                    created_by,
                    updated_by

                    )
            )

            setClient('')
            setSeverity('')
            setTitle('')
            setNature('')
            setDescription('')
            setWho('')
            setWhat('')
            setWhere('')
            setComment('')
            setResult('')
            setAttachment('')
            setDate('')
            setGriever('')
            setChannel('')
            setLanguage('')
            setGrievanceStatus('')
            setUpdatedDate('')
            setCreatedBy('')
            setCreatedDate('')
            setUpdatedBy('')


        }
    }

    
    return (
        <>
            <form style={{paddingTop:0.5 + 'em'}}>
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="clientName">
                                Client Name *
                            </label>
                            <select className="form-select form-select-sm" id="clientName" name='client' onChange={onClientChange}>
                                <option value={''}>Choose a client...</option>
                                {clientOptions}
                            </select>
                        </div>
                    </div>

                    <div className="col-5 col-md-5">
                        <div className="form-group">
                            <label className="form-label" htmlFor="nature">
                                Nature *
                            </label>
                            <select className="form-select form-select-sm" name='nature' id="nature" onChange={onNatureChange}>
                                <option value={''}>Choose nature of your grievance...</option>
                                {natureOptions}
                            </select>
                        </div>
                    </div>

                    <div className="col-7 col-md-7">
                        <div className="form-group">
                        <label className="form-label" htmlFor="severity">
                            Severity *
                        </label>
                        <select className="form-select form-select-sm" id="severity" name='severity' onChange={onSeverityChange}>
                            <option>Choose severity level...</option>
                            {severityOptions}
                        </select>
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="title">
                                Title *
                            </label>
                            <input className="form-control form-control-sm" id="title" type="text" placeholder="Title *" name='title' value={title} onChange={onTitleChange} required />
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="descrition">
                                Description *
                            </label>
                            <textarea  className="form-control form-control-sm" id="description" value={description} onChange={onDescritionChange} name="description" rows={4} cols={50}></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="form-group">
                            <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter" role="button" aria-expanded="false">Describe More </a>
                            <div className="row gx-5 collapse" id="collapseFilter">
                                <div className="col-4 pt-md-3">
                                    <label htmlFor="who">
                                        Who
                                    </label>
                                    <input className="form-control form-control-sm" id="who" name='who' value={who} onChange={onWhoChange} type="text" />
                                </div>

                                <div className="col-4 pt-md-3">
                                    <label htmlFor="what">
                                        Did What
                                    </label>
                                    <input className="form-control form-control-sm" id="what" name='what' value={what} onChange={onWhatChange} type="text" />
                                </div>

                                <div className="col-4 pt-md-3">
                                    <label  htmlFor="where">
                                        Where
                                    </label>
                                    <input className="form-control form-control-sm" id="where" name='where' value={where} onChange={onWhereChange} type="text" />
                                </div>

                                <div className="col-6 pt-md-3">
                                    <label  htmlFor="result">
                                        Result
                                    </label>
                                    <input className="form-control form-control-sm" id="result" name='result' value={result} onChange={onResultChange} type="text" />
                                </div>

                                <div className="col-6 pt-md-3">
                                    <label className="" htmlFor="comment">
                                        Comment
                                    </label>
                                    <input className="form-control form-control-sm" id="comment" name='comment' value={comment} onChange={onCommentChange} type="text" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="form-group mb-8">
                            <label className="form-label" htmlFor='attachment'>Attachment</label>
                            <input className="form-control form-control-sm" id="attachment" name='attachment' value={attachment} onChange={onAttachmentChange} type="file" />
                        </div>

                    </div>

                    <div className="col-12 text-center">
                        <button className="btn btn-dark" onClick={onCreateGrievance} disabled={!canSave}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateGrievanceForm