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

  let grievances = props.data.grievances

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
        
      tableRow = props.data.grievances.map( (grievance: any) => 
        (
          
          <tr key={grievance.grievance_id}>
              <td>
                <Link to="/single">{grievance.grievance_id}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {single_client?.name}
              </td>
              <td>
                {grievance.severity}
              </td>
              <td>
                {grievance.grievance_status}
              </td>
              <td style={{alignContent: 'center'}}>  
                    <Link data-bs-toggle="offcanvas" to="#modalShoppingCart" onClick={fetchGrievance}><i className="fa-regular fa-eye"></i></Link>
              </td>
            </tr>
          )
        )
    }
  

  return (
    <div className="card shadow" data-simplebar="">
          <div className="card-body" style={{alignContent:'center'}}>
            <table className="table table-responsive" style={{tableLayout: 'auto', width: 100 + '%', fontSize: 13 + 'px'}}>
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