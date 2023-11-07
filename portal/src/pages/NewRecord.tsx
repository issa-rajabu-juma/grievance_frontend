import React from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Create from '../features/grievance/components/records/Create'
import { Navigate, Outlet } from 'react-router-dom'
import New from '../features/grievance/components/records/pages/New'
import { store } from '../app/store'


const NewRecord = () => {
  const state = store.getState()

  if (!state.auth.isAuthenticated) {
    return <Navigate to='/login' />
  }
  return (
    <>
        <Meta title='Create New'/>
        <NavBarLast />
        <Breadcrumb title='Create New'/>
       <section className="">
        <div className="container">
          <Heading heading='Grieving' />
          <div className="row" style={{marginTop:60 + 'px'}}>
            <div className="col-12 col-md-3">
              <RightNav title='Create New'/>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1" data-simplebar style={{maxHeight: 'auto', marginTop: 0 + '%'}}>
                
                <section>
                  {/* <div className="container">
                    <div className="row">
                      <div className="col-12"> */}

                        <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
                          
                        </div>

                        <div className="tab-content">
                          <div className="tab-pane fade active show" id="descriptionTab">
                            <div className="row justify-content-center py-6">
                              <div className="col-12 col-lg-10 col-xl-10">
                                <New />
                              </div>
                            </div>
                          </div>
                          
                        </div>

                      {/* </div>
                    </div>
                  </div> */}
                </section>
            
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default NewRecord
