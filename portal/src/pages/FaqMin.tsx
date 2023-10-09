import React from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Create from '../features/grievance/components/records/Create'
import { Outlet } from 'react-router-dom'
import New from '../features/grievance/components/records/pages/New'
import FaqMain from '../features/grievance/components/records/pages/FaqList'
import FaqList from '../features/grievance/components/records/pages/FaqList'


const FaqMin = () => {
  return (
     <>
        <Meta title='GRIEVANCE'/>
        <NavBarLast />
        <Breadcrumb title='Grievance'/>
       <section className="pt-7 pb-12">
        <div className="container">
          
          <Heading />

          <div className="row">
            <div className="col-12 col-md-3">
              <RightNav />
            </div>
            <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10 col-xl-8">
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