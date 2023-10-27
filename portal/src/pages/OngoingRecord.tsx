import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Ongoing from '../features/grievance/components/records/pages/Ongoing'
import { store } from '../app/store'
import { Navigate } from 'react-router-dom'


const OngoingRecord = () => {

  const state = store.getState()

  if (!state.user.isAuthenticated) {
    return <Navigate to='/login' />
  }

  return (
     <>
        <Meta title='Ongoing'/>
        <NavBarLast />
        <Breadcrumb title='Ongoing'/>
       <section className="pt-7 pb-12">
          <div className="container">
            <Heading heading='Ongoing Grievances'  />
            <div className="row">
              <div className="col-12 col-md-3">
                <RightNav  title='Ongoing'/>
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                  <Ongoing />
              </div>
            </div>
          </div>
        </section>
      </>

    
  )
}

export default OngoingRecord