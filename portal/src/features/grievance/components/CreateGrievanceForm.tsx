import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { nanoid } from '@reduxjs/toolkit'
import { nanoid, customAlphabet } from 'nanoid'
import { newGrievance } from '../grievanceSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchClients, selectAllClients } from '../../client/clientSlice'
import { fetchGrievers, selectAllGrievers } from '../../griever/grieverSlice'
import { useNavigate } from 'react-router-dom'
import { fetchNatures, selectAllNatures } from '../../nature/natureSlice'
import { fetchSeverities, selectAllSeverities } from '../../severity/severitySlice'
import { connect } from 'react-redux'
import { selectLoggedinUser } from '../../user/userSlice'
import AttachmentTable from './AttachmentTable'


const CreateGrievanceForm = (props: any) => {
    

    
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
    const [channel, setChannel] = useState('')
    const [language, setLanguage] = useState('')
    const [anonymous, setAnonymous] = useState(0)
    const [grievance_status, setGrievanceStatus] = useState('')
    const [updated_date, setUpdatedDate] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [created_date, setCreatedDate] = useState('')
    const [updated_by, setUpdatedBy] = useState('')
    const [newGrievanceStatus, setNewGrievanceStatus] = useState('idle')

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
    const onAnonymousChange = (e: any) => {
        if (anonymous === 0) {
            setAnonymous(1)
        }
        if (anonymous === 1) {
            setAnonymous(0)
        }
    }

    // Other variables
    const canSave = [title, description, client].every(Boolean) && newGrievanceStatus === 'idle'
    const nanoid = customAlphabet('1234567890', 4)

     // hooks
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
       
    // selectors
    const clients = useAppSelector(selectAllClients)
    const natures = useAppSelector(selectAllNatures)
    const severities = useAppSelector(selectAllSeverities)
    const grievers = useAppSelector(selectAllGrievers)
    const user = useAppSelector(selectLoggedinUser)

    // Logics
    // clients
    let cls = Array(clients.clients)
 
    const clientOptions = (cls.map((clients: any) => (
        Object.values(clients).map((client:any) => (
            <option value={client.client_id} key={client.client_id}>{client.name}</option>
        ))
    )))

    // natures
    let nts = Array(natures.natures)
 
    const natureOptions = (nts.map((natures: any) => (
        Object.values(natures).map((nature:any) => (
            <option value={nature.nature_id} key={nature.nature_id}>{nature.name}</option>
        ))
    )))

      // natures
    let svt = Array(severities.severities)
 
    const severityOptions = (svt.map((severities: any) => (
        Object.values(severities).map((severity:any) => (
            <option value={severity.severity_id} key={severity.severity_id}>{severity.name}</option>
        ))
    )))
  
    // griver handling
    const grv = grievers.grievers
    let griever: any

    for(const key in grv){
        if (grv.hasOwnProperty(key)) {
            const value = grv[key]
            if (anonymous === 1) {
                if (value.f_name === 'Anonymous') {
                    griever = value.griever_id
                    break
                }
            }
            
            if(anonymous === 0){
                if (value.user === user.id) {
                    griever = value.griever_id
                    break
                }
                }
            
        }
    }

    // submit form
    const onCreateGrievance = () => {
        
        if (canSave){
          try {
            setNewGrievanceStatus('pending')
            dispatch(newGrievance({
                title,
                description,
                client,
                what,
                who,
                where,
                result,
                comment,
                severity,
                nature,
                anonymous,
                ref: 'GRM-' + nanoid(),
                language: 'English',
                operational_status: 'New',
                channel: 'Portal',
                start_date: new Date(),
                griever: griever
            })).unwrap()

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
            setGrievanceStatus('')
            setUpdatedDate('')
            setCreatedBy('')
            setCreatedDate('')
            setUpdatedBy('')
            navigate('/open')

          } catch (error) {
            console.error('Failed to create new grievance', error)
          }finally{
            setNewGrievanceStatus('idle')
          }
        }
    }
    
    return (
        <>
            <form style={{paddingTop:0 + 'em'}}>
                <div className="row">

                    
                    


                    <div className="col-12 col-md-12">

                        <div className="form-group">
                            <label className="form-label" htmlFor="clientName">
                                Client *
                            </label>
                            <select className="form-select form-select-sm form-control-underline" id="clientName" name='client' onChange={onClientChange}>
                                <option value={''} key='0'></option>
                                {clientOptions}
                            </select>
                        </div>
                    </div>

                    <div className="col-5 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="nature">
                                Nature *
                            </label>
                            <select className="form-select form-select-sm form-control-underline" name='nature' id="nature" onChange={onNatureChange}>
                                <option value={''}></option>
                                {natureOptions}
                            </select>
                        </div>
                    </div>

                    <div className="col-7 col-md-6">
                        <div className="form-group">
                        <label className="form-label" htmlFor="severity">
                            Severity *
                        </label>
                        <select className="form-select form-select-sm form-control-underline" id="severity" name='severity' onChange={onSeverityChange}>
                            <option  value={''}></option>
                            {severityOptions}
                        </select>
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="title">
                                Title *
                            </label>
                            <input className="form-control form-control-sm form-control-underline" id="title" type="text" name='title' value={title} onChange={onTitleChange} required />
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="descrition">
                                Description *
                            </label>
                            <textarea  className="form-control form-control-sm form-control-underline" id="description" value={description} onChange={onDescritionChange} name="description" rows={4} cols={50}></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="form-group">
                            <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter" role="button" aria-expanded="false" style={{fontWeight: 800}}>More Description</a>
                            <div className="row gx-5 collapse" id="collapseFilter">
                                <div className="col-4 pt-md-3">
                                    <label htmlFor="who">
                                        Who
                                    </label>
                                    <input className="form-control form-control-sm form-control-underline" id="who" name='who'  value={who} onChange={onWhoChange} type="text" />
                                </div>

                                <div className="col-4 pt-md-3">
                                    <label htmlFor="what">
                                        Did What
                                    </label>
                                    <input className="form-control form-control-sm form-control-underline" id="what" name='what' value={what} onChange={onWhatChange} type="text" />
                                </div>

                                <div className="col-4 pt-md-3">
                                    <label  htmlFor="where">
                                        Where
                                    </label>
                                    <input className="form-control form-control-sm form-control-underline" id="where" name='where' value={where} onChange={onWhereChange} type="text" />
                                </div>

                                <div className="col-6 pt-md-3">
                                    <label  htmlFor="result">
                                        Result
                                    </label>
                                    <input className="form-control form-control-sm form-control-underline " id="result" name='result' value={result} onChange={onResultChange} type="text" />
                                </div>

                                <div className="col-6 pt-md-3">
                                    <label className="" htmlFor="comment">
                                        Comment
                                    </label>
                                    <input className="form-control form-control-sm form-control-underline" id="comment" name='comment' value={comment} onChange={onCommentChange} type="text" />
                                </div>

                                


                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="form-group">
                            <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter1" role="button" aria-expanded="false" style={{fontWeight: 800}}>Attachments </a>
                            <div className="row gx-5 collapse" id="collapseFilter1">
                                <div className="col-12 col-lg-12 mt-3">

                                    <div className="form-group" style={{marginBottom: -20 + 'px'}}>
                                       
                                        <label className='btn btn-link' htmlFor='attachment'>
                                        <input className="form-control form-control-sm form-control-underline" id="attachment" hidden  name='attachment' value={attachment} onChange={onAttachmentChange} type="file" multiple />

                                           <i className="fa fa-paperclip"></i> Attach

                                        </label>
                                    </div>
                                     
                                    <AttachmentTable />
                                        

                                </div>


                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="form-group">
                        
                    <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter2" role="button" aria-expanded="false" style={{fontWeight: 800}}>Grieve Anonymously </a>
                    <div className="row gx-5 collapse mt-3" id="collapseFilter2">
                        
                        <div className="col-12 col-md-6 ">
                            <div className="form-group card card-sm border">
                                <div className="card-body">
                                    <div className="form-check custom-radio">
                                        <input className="form-check-input collapsed" id="checkoutPaymentCard" name="anonymous" type="radio" defaultChecked value={anonymous} onChange={onAnonymousChange} />
                                        <label className="form-check-label d-flex justify-content-between w-100 fs-sm text-body text-nowrap" htmlFor="checkoutPaymentCard">
                                            Default
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group card card-sm border">
                                <div className="card-body">
                                    <div className="form-check custom-radio">
                                        <input className="form-check-input" id="checkoutPaymentPaypal" name="anonymous" type="radio" value={anonymous} onChange={onAnonymousChange} />
                                        <label className="form-check-label d-flex justify-content-between w-100 fs-sm text-body text-nowrap" htmlFor="checkoutPaymentPaypal">
                                            Anonymous
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
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