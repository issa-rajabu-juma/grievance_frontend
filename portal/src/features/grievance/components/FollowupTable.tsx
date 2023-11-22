import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectAllClients } from '../../client/clientSlice'
import { selectAllGrievances } from '../grievanceSlice'
import { object2array, segmentGrievances } from '../../../app/helpers'


const FollowupTable = (props: any) => {
  let tableHead = (
                  <tr>
                    <th >Reference</th>
                    <th>Title</th>
                    <th>Griever</th>
                    <th>Client</th>
                    <th>Agent</th>
                    <th>Status</th>
                  </tr>
                )
  let defaultRow:any
  let anonymousRow:any
  let ongoingRow:any
  let resolvedRow:any
  let closedRow:any
  let reopenedRow:any
  let tableRow:any
  let clients = props.data.clients.clients
  const grievances = props.data.grievances.grievances
  const grievancesKeyList = Object.keys(grievances)
  const clientsKeyList = Object.keys(clients)

 
  var bin = props.data.bin
  var defaultData = segmentGrievances(grievances, 'default')
  var anonymousData = segmentGrievances(grievances, 'anonymous')
  var ongoingData = segmentGrievances(grievances, 'ongoing')
  var resolvedData = segmentGrievances(grievances, 'resolved')
  var closedData = segmentGrievances(grievances, 'closed')
  var reopenedData = segmentGrievances(grievances, 'reopened')


  if (grievancesKeyList.length > 0 && clientsKeyList.length > 0){

    if (bin === 'default') {
      const grcz = object2array(defaultData)
      defaultRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }
    
    if (bin === 'anonymous') {
      const grcz = object2array(anonymousData)
      anonymousRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }

     if (bin === 'ongoing') {
      const grcz = object2array(ongoingData)
      ongoingRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }
   

     if (bin === 'resolved') {
      const grcz = object2array(resolvedData)
      resolvedRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }
   

     if (bin === 'closed') {
      const grcz = object2array(closedData)
      closedRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }
   

     if (bin === 'reopened') {
      const grcz = object2array(reopenedData)
      reopenedRow = grcz.map((grievance: any) => 
        (
          <tr key={grievance.grievance_id}>
              <td>
                <Link to='/single' state={{'grievance': grievance, 'clients': clients}}>{grievance.ref}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.griever}
              </td>
              <td>
                {grievance.client}
              </td>
              <td>
                {grievance.agent}
              </td>
              <td>
                {grievance.operational_status}
              </td>
            </tr>
          )
        )
    }
   
   
  }




 

  return (
    <div className="card shadow" data-simplebar="">
          <div className="card-body" style={{alignContent:'center'}}>
            {/* 
            <div className="row mb-6">
              <div className="col-md-6">
                <select className="form-select form-control form-control-xxs" style={{width:25 + '%'}}>
                  <option defaultValue={'20'}>20</option>
                  <option defaultValue={'50'}>30</option>
                  <option defaultValue={'100'}>100</option>
                  <option defaultValue={'All'}>All</option>
                </select>
              </div>
              <div className="col-md-6">

                <div className="input-group input-group-merge"  style={{width:50 + '%', marginLeft:50 + '%'}}>
                  <input className="form-control form-control-xxs" type="search" placeholder="" />
                  <div className="input-group-append">
                    <button className="btn btn-outline-border form-control-xxs" type="submit">
                      <i className="fe fe-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div> 
            */}
            <table className="table table-responsive" style={{tableLayout: 'auto', width: 100 + '%', fontSize: 15 + 'px'}}>
            <thead>
                {tableHead}
            </thead>
            <tbody>
                {(props.data.bin === 'default') ? defaultRow : (props.data.bin === 'anonymous') ? anonymousRow: (props.data.bin === 'ongoing') ? ongoingRow: (props.data.bin === 'resolved') ? resolvedRow: (props.data.bin === 'closed') ? closedRow: (props.data.bin === 'reopened') ? reopenedRow: tableRow}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default FollowupTable