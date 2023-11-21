import React, { useEffect } from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Create from '../features/grievance/components/records/Create'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import New from '../features/grievance/components/records/pages/New'
import FaqMain from '../features/grievance/components/records/pages/FaqList'
import FaqList from '../features/grievance/components/records/pages/FaqList'
import { store } from '../app/store'


const FaqMin = () => {


 const location = useLocation()

  if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
  }else{
    sessionStorage.setItem('current_location', location.pathname)

  }
  
  return (
     <>
        <Meta title='Faq'/>
        <NavBarLast />
        <Breadcrumb title='Faq'/>
       <section className="pt-7 pb-12">
        <div className="container">
          
          {/* <Heading  heading='Frequently Asked Questions'  /> */}

          <div className="row mt-8">
            <div className="col-12 col-md-3">
              <RightNav title='Faq'/>
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1" data-simplebar style={{maxHeight: 700 + "px"}}>
                <div className="row ">
                  <div className="col-12 col-lg-12 col-xl-12">
                      <FaqList />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
</>
    
  )
}

export default FaqMin