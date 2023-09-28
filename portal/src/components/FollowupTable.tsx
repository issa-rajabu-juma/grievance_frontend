import React from 'react'
import { Link } from 'react-router-dom'


const FollowupTable = (props:any) => {
  let tableHead: any
  let tableRow:any
  

  
  if (props.data.grievances !== null){
      console.log(props.data.grievances)
      console.log(props.data.status)

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
          <tr>
              <td>
                <Link data-bs-toggle="offcanvas" to="#modalShoppingCart">{grievance.grievance_id}</Link>
              </td>
              <td>
                {grievance.title}
              </td>
              <td>
                {grievance.nature}
              </td>
              <td>
                {grievance.severity}
              </td>
              <td>
                {grievance.channel}
              </td>
              <td style={{alignContent: 'center'}}>  
                <div className='row'>
                  <div className='col-4' style={{marginLeft:-6, marginRight:-6}}>
                    <Link data-bs-toggle="offcanvas" to="#modalShoppingCart"><i className="fa-regular fa-eye"></i></Link>
                  </div>
                  <div className='col-4' style={{marginRight:-6, marginLeft:-6,}}>
                    <Link data-bs-toggle="offcanvas" to="#modalShoppingCart"><i className="fa-regular fa-pen-to-square"></i></Link>
                  </div>
                  <div className='col-4' style={{marginLeft:-6,marginRight:-6,}}>
                    <Link data-bs-toggle="offcanvas" to="#modalShoppingCart"> <i className="fa-solid fa-trash-can"></i></Link>
                  </div>
                </div>
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