import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Closed from '../features/grievance/components/records/pages/Closure'


const ClosedRecord = () => {
  return (
     <>
        <Meta title='Closure'/>
        <NavBarLast />
        <Breadcrumb title='Closure'/>
       <section className="pt-7 pb-12">
          <div className="container">
            <Heading />
            <div className="row">
              <div className="col-12 col-md-3">
                <RightNav />
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                  <Closed />
              </div>
            </div>
          </div>
        </section>
      </>

    
  )
}

export default ClosedRecord