import React, { useEffect } from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import New from '../../trash/New'
import FaqMain from '../../trash/FaqList'
import FaqList from '../../trash/FaqList'
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
                       <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                          <li className="list-group-item">

                            
                            <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseOne" aria-expanded='true'>
                              1. Bring of had which their whose you're it own?
                            </a>

                            
                            <div className="collapse show" id="faqCollapseOne" data-bs-parent="#faqCollapseParentOne">
                              <div className="mt-5">
                                <p className="mb-0 fs-lg text-gray-500"  data-simplebar style={{maxHeight: 160 + "px"}}>
                                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                  hath rule creepeth own lesser years itself so seed fifth for grass.
                                </p>
                              </div>
                            </div>

                          </li>
                          <li className="list-group-item">

                            
                            <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseTwo">
                              2. Over shall air can't subdue fly divide him?
                            </a>

                            
                            <div className="collapse" id="faqCollapseTwo" data-bs-parent="#faqCollapseParentOne">
                              <div className="mt-5">
                                <p className="mb-0 fs-lg text-gray-500"  data-simplebar style={{maxHeight: 160 + "px"}}>
                                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                  hath rule creepeth own lesser years itself so seed fifth for grass.
                                </p>
                              </div>
                            </div>

                          </li>
                          <li className="list-group-item">

                            
                            <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseThree">
                              3. Waters one you'll creeping?
                            </a>

                            
                            <div className="collapse" id="faqCollapseThree" data-bs-parent="#faqCollapseParentOne">
                              <div className="mt-5">
                                <p className="mb-0 fs-lg text-gray-500"  data-simplebar style={{maxHeight: 160 + "px"}}>
                                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                  hath rule creepeth own lesser years itself so seed fifth for grass.
                                </p>
                              </div>
                            </div>

                          </li>
                          <li className="list-group-item">

                            
                            <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseFour">
                              4. Fowl, given morning seed fruitful kind beast be?
                            </a>

                            
                            <div className="collapse" id="faqCollapseFour" data-bs-parent="#faqCollapseParentOne">
                              <div className="mt-5">
                                <p className="mb-0 fs-lg text-gray-500"  data-simplebar style={{maxHeight: 160 + "px"}}>
                                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                                  hath rule creepeth own lesser years itself so seed fifth for grass.
                                </p>
                              </div>
                            </div>

                          </li>
                        </ul>
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