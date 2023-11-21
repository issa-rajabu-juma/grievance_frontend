import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks'
import { selectAllClients } from '../../client/clientSlice'


const AttachmentTable = (props:any) => {
  let tableHead: any
  let tableRow:any
  
  // const clients = Array(useAppSelector(selectAllClients))[0].clients
  // let client = clients.find(client => client.client_id === '1')
  // // console.log(client)

  // let grievances = props.data.grievances

  // let single_client: any
  // for (let index = 0; index < grievances.length; index++) {
  //   if (clients.find(client => client.client_id === grievances[index].client)){
  //     single_client = clients.find(client => client.client_id === grievances[index].client)
  //     break
  //   }

  // }

  
  // const fetchGrievance = (e: any) => {
  //   console.log(e)
  // }

  
  // if (props.data.grievances !== null){
  
  //     tableHead = (
  //                   <tr>
  //                     <th >Icon</th>
  //                     <th>File name</th>
  //                     <th>File type</th>
  //                     <th>File Size</th>
                      
  //                   </tr>
  //                 )
        
  //     tableRow = props.data.grievances.map( (grievance: any) => 
  //       (
          
  //         <tr key={grievance.grievance_id}>
  //             <td>
  //               <Link to="/single">{grievance.grievance_id}</Link>
  //             </td>
  //             <td>
  //               {grievance.title}
  //             </td>
  //             <td>
  //               {single_client?.name}
  //             </td>
  //             <td>
  //               {grievance.severity}
  //             </td>
             
  //           </tr>
  //         )
  //       )
  //   }
  

  return (
    <div className="card shadow">
          <div className="card-body" style={{alignContent:'center'}}>
            <table className="table table-responsive" style={{tableLayout: 'auto', width: 100 + '%', fontSize: 13 + 'px'}}>
            <thead>
                 <tr>
                     <th >Icon</th>
                      <th>File name</th>
                       <th>File type</th>
                       <th>File Size</th>
                      
                     </tr>
            </thead>
            <tbody>
                {/* {tableRow} */}
            </tbody>
            </table>
        </div>
    </div>
  )
}

export default AttachmentTable