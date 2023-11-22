import React, { useEffect } from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { fetchNatures } from '../features/nature/natureSlice'
import { fetchSeverities } from '../features/severity/severitySlice'
import { fetchGrievers } from '../features/griever/grieverSlice'
import { fetchClients } from '../features/client/clientSlice'
import CreateGrievanceForm from '../features/grievance/components/CreateGrievanceForm'


const NewRecord = () => {
  const location = useLocation()

  if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
  }else{
    sessionStorage.setItem('current_location', location.pathname)
    const dispatch = useAppDispatch()
    
    const dispatchInit = async () => {
      await Promise.all([
        dispatch(fetchNatures()),
        dispatch(fetchSeverities()),
        dispatch(fetchClients()),
        dispatch(fetchGrievers()),
      ])
    }

    useEffect( () => {
          dispatchInit()
    }, [])

  }
  return (
    <>
        <Meta title='Create New'/>
        <NavBarLast />
        <Breadcrumb title='Create New'/>
       <section className="">
        <div className="container">
          {/* <Heading heading='Grieving' /> */}
          <div className="row mt-8">
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
                              <div className="col-12 col-lg-10 col-xl-10" data-simplebar style={{maxHeight: 800 + "px"}}>
                                <CreateGrievanceForm />
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
