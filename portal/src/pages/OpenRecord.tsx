import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Open from '../features/grievance/components/records/pages/Open'


const OpenRecord = () => {
  return (
     <>
        <Meta title='Open'/>
        <NavBarLast />
        <Breadcrumb title='Open'/>
       <section className="pt-7 pb-12">
          <div className="container">
            <Heading />
            <div className="row">
              <div className="col-12 col-md-3">
                <RightNav />
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
                  <Open />
              </div>
            </div>
          </div>
        </section>
      </>

    
  )
}

export default OpenRecord