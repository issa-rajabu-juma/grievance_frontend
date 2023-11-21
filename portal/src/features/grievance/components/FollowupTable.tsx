import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectAllClients } from '../../client/clientSlice'
import { selectAllGrievances } from '../grievanceSlice'


const FollowupTable = () => {
  let tableHead: any
  let tableRow:any
  let clients = useAppSelector(selectAllClients).clients
  const grievances = useAppSelector(selectAllGrievances)

  let data = Array()


  if (grievances !== null){
      tableHead = (
                    <tr>
                      <th >Reference</th>
                      <th>Title</th>
                      <th>Griever</th>
                      <th>Client</th>
                      <th>Agent</th>
                      <th>Status</th>
                    </tr>
                  )
      
      for (const key in grievances) {
        if (Object.prototype.hasOwnProperty.call(grievances, key)) {
          const grievance = grievances[key];
          data.push(grievance)
        }
      }

        
      tableRow = data.map((grievance: any) => 
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
                {tableRow}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default FollowupTable