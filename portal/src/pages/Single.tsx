import React, { useEffect } from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import FollowupTable from '../features/grievance/components/FollowupTable'
import { fetchGrievances, selectAllGrievances } from '../features/grievance/grievanceSlice'
import AttachmentTable from '../features/grievance/components/AttachmentTable'
import { store } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchClients } from '../features/client/clientSlice'
import { fetchGrievers } from '../features/griever/grieverSlice'


const Single = (props: any) => {
 const location = useLocation()
 

 

  if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
  }else{
    sessionStorage.setItem('current_location', location.pathname)
  
  }

  const grievance = location.state.grievance
  const clients = location.state.clients
  console.log(clients)
  let clt
  // let data = Array()
  if (clients !== null){
    for (const key in clients) {
      if (Object.prototype.hasOwnProperty.call(clients, key)) {
        const client = clients[key];
        if (grievance.client === client.client_id) {
          clt = client
          break
        }
      }
    }
  }
  console.log(clt)
  console.log(grievance)
   
  return (
    <>
        <Meta title='Single'/>
        <NavBarLast />
        <Breadcrumb title='Single'/>
        <section className="pt-7 pb-12">
          <div className="container">
            <Heading heading={'Grievance Details'} />
            <div className="row">
              <div className="col-12 col-md-3">
                <RightNav />
              </div>

              <div className="col-12 col-md-9 col-lg-8 offset-lg-1"  data-simplebar style={{maxHeight: 700 + "px"}}>
                <div className="row">
                  <div className="col-12 col-lg-12">

                    
                    <div className="card card-lg bg-light mb-8">
                      <div className="card-body">
                        
                        <div className="row">

                          <div className="col-md-12">
                            <h6 className="mb-2">Title</h6>
                            <p className="text-muted mb-3">
                              {grievance.title}
                            </p>

                            <h6 className="mb-2">Description</h6>
                            <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                              {grievance.description}
                            </p>

                            <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter" role="button" aria-expanded="false" style={{fontWeight: 800}}>More Description </a>
                            <div className="row gx-5 collapse mt-3" id="collapseFilter">
                                <div className="col-md-4">
                                  <p className="mb-2" style={{fontWeight:800}}>Who</p>
                                    <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                                      { (grievance.who !== null) ? grievance.who : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-8">
                                  <p className="mb-2" style={{fontWeight:800}}>Did What</p>
                                    <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                                      {(grievance.what !== null) ? grievance.what : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-4">
                                  <p className="mb-2" style={{fontWeight:800}}>Where</p>
                                    <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                                      {(grievance.where !== null) ? grievance.where : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-4">
                                  <p className="mb-2" style={{fontWeight:800}}>Result</p>
                                    <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                                      {(grievance.result !== null) ? grievance.result : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-4">
                                  <p className="mb-2" style={{fontWeight:800}}>Comment</p>
                                    <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                                      {(grievance.comments !== null) ? grievance.comments : 'N/A'}
                                    </p>
                                </div>
                            </div>
                          </div>

                          <div className="card card-sm mt-3">
                            <div className="card-body ">
                              <div className="row">
                                <div className="col-6 col-lg-3">

                                  <h6 className="heading-xxxs text-muted">Start date</h6>

                                  <p className="mb-lg-0 fs-sm fw-bold">
                                    <time>
                                      {grievance.start_date.split('T')[0]}
                                    </time>
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  <h6 className="heading-xxxs text-muted">Priority:</h6>

                                  
                                  <p className="mb-lg-0 fs-sm fw-bold">
                                    <time>
                                      {(grievance.severity === '1') ? 'Low' : (grievance.severity === '2') ? 'Medium' : 'High' }
                                    </time>
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  
                                  <h6 className="heading-xxxs text-muted">Status:</h6>

                                
                                  <p className="mb-0 fs-sm fw-bold">
                                    {grievance.operational_status}
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  
                                  <h6 className="heading-xxxs text-muted">Agent:</h6>

                                
                                  <p className="mb-0 fs-sm fw-bold">
                                    {(grievance.agent !== null) ? grievance.agent : 'Not Assigned'}
                                  </p>

                                </div>
                              </div>
                            </div>
                          </div>
                         
                        </div>
                        
                        

                        
                        <div className="card-action card-action-end">
                         <Link className="btn btn-xs btn-circle btn-white-primary" to="/new">
                            <i className="fe fe-edit-2"></i>
                          </Link>
                          
                          <Link className="btn btn-xs btn-circle btn-white-primary" data-bs-toggle="offcanvas" to="#modalShoppingCart">
                            <i className="fa-regular fa-message"></i>
                            </Link>

                          <button className="btn btn-xs btn-circle btn-white-primary">
                            <i className="fe fe-x"></i>
                          </button>

                        </div>

                      </div>
                    </div>

                  </div>

                 
                </div>

                <div className="row">
                  <div className="col-12 col-lg-6">

                    
                    <div className="card card-lg bg-light mb-8">
                      <div className="card-body">

                         <h6 className="mb-6">
                              Client
                            </h6>

                          
                            <p className="text-muted mb-0">
                                {clt.name.toUpperCase()} <br />
                                {clt.address + ' ' + clt.region.toUpperCase()}  <br />
                                {clt.type} <br />
                                {clt.phone} <br />
                                Tanzania <br />
                            </p>


                        
                       

                      </div>
                    </div>

                  </div>

                  <div className="col-12 col-lg-6">

                    
                    <div className="card card-lg bg-light mb-8">
                      <div className="card-body">

                        
                        <h6 className="mb-6">
                          Workforce
                        </h6>

                        
                        <p className="text-muted mb-0">
                          {grievance.workforce}<br />
                          Communication & Internal Affairs <br />
                          Head Office <br />
                          23 floor <br />
                          Board room 2 <br />
                        </p>

                        

                      </div>
                    </div>

                  </div>
                </div>



                 {/* <div className="col-12 col-lg-12">

                    
                    <div className="card card-lg bg-light mb-8">
                      <div className="card-body">

                        
                        <h6 className="mb-6">
                          Attachments
                        </h6>

                        
                        <p className="text-muted mb-0">
                          <AttachmentTable data={grievances} />
                        </p>

                       

                      </div>
                    </div>

                  </div> */}
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Single
