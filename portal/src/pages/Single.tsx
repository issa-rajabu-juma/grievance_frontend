import React from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import { Link, Navigate } from 'react-router-dom'
import FollowupTable from '../features/grievance/components/FollowupTable'
import { selectAllGrievances } from '../features/grievance/grievanceSlice'
import AttachmentTable from '../features/grievance/components/AttachmentTable'
import { store } from '../app/store'


const Single = () => {
  const state = store.getState()

  if (!state.user.isAuthenticated) {
    return <Navigate to='/login' />
  }
   const grievances = useSelector(selectAllGrievances)
   
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
                              Malalamiko ya mishahara
                            </p>

                            <h6 className="mb-2">Description</h6>
                            <p className="text-muted mb-6" style={{justifyContent:'center'}}>
                               She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light
                              after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two
                              land of creepeth there second fruitful, waters. Make don't void
                            </p>
                          </div>

                          <div className="card card-sm">
                            <div className="card-body ">
                              <div className="row">
                                <div className="col-6 col-lg-3">

                                  <h6 className="heading-xxxs text-muted">Start date</h6>

                                  <p className="mb-lg-0 fs-sm fw-bold">
                                    <time datetime="2019-10-01">
                                      01 Oct, 2019
                                    </time>
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  <h6 className="heading-xxxs text-muted">Priority:</h6>

                                  
                                  <p className="mb-lg-0 fs-sm fw-bold">
                                    <time datetime="2019-10-01">
                                      High
                                    </time>
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  
                                  <h6 className="heading-xxxs text-muted">Status:</h6>

                                
                                  <p className="mb-0 fs-sm fw-bold">
                                    New
                                  </p>

                                </div>
                                <div className="col-6 col-lg-3">

                                  
                                  <h6 className="heading-xxxs text-muted">Agent:</h6>

                                
                                  <p className="mb-0 fs-sm fw-bold">
                                    Issa Rajabu Juma
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
                              Client details
                            </h6>

                          
                            <p className="text-muted mb-0">
                                Tanesco <br />
                                3997 Dodoma <br />
                                Mji wa serikari <br />
                                45644 <br />
                                Tanzania <br />
                              {/* <FollowupTable data={grievances}/> */}
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
                          Tanesco<br />
                          Communication & Internal Affairs <br />
                          Head Office <br />
                          23 floor <br />
                          Board room 2 <br />
                        </p>

                        

                      </div>
                    </div>

                  </div>
                </div>



                 <div className="col-12 col-lg-12">

                    
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

                  </div>
              </div>

            </div>
          </div>
        </section>
    </>
  )
}

export default Single
