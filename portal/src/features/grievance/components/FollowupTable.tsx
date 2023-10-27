import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectAllClients } from '../../client/clientSlice'


const FollowupTable = (props:any) => {
  let tableHead: any
  let tableRow:any
  
  const clients = Array(useAppSelector(selectAllClients))[0].clients
  let client = clients.find(client => client.client_id === '1')
  // console.log(client)

  let grievances = props.data
  console.log(grievances)

  let single_client: any
  for (let index = 0; index < grievances.length; index++) {
    if (clients.find(client => client.client_id === grievances[index].client)){
      single_client = clients.find(client => client.client_id === grievances[index].client)
      break
    }

  }

  
  const fetchGrievance = (e: any) => {
    console.log(e)
  }

  
  if (props.data.grievances !== null){
  
      tableHead = (
                    <tr>
                      <th >Index</th>
                      <th>Grievance</th>
                      <th>Client</th>
                      <th>Agent</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  )
        
      tableRow = props.data.map( (grievance: any) => 
        (
          
          <tr key={grievance[0].grievance_id}>
              <td>
                <Link to="/single">{grievance[0].grievance_id}</Link>
              </td>
              <td>
                {grievance[0].title}
              </td>
              <td>
                {single_client?.name}
              </td>
              <td>
                {grievance[0].severity}
              </td>
              <td>
                {grievance[0].grievance_status}
              </td>
              <td style={{alignContent: 'center'}}>  
                    {/* <Link to='/single'><i className="fa-regular fa-eye"></i></Link>
                    &nbsp;
                    &nbsp; */}
                    <Link data-bs-toggle="offcanvas" to="#modalShoppingCart" onClick={fetchGrievance}><i className="fa-regular fa-message"></i></Link>


              </td>
            </tr>
          )
        )
    }
  

  return (
    <div className="card shadow" data-simplebar="">
          <div className="card-body" style={{alignContent:'center'}}>
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