import React, { useEffect } from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Ongoing from '../features/grievance/components/records/pages/Ongoing'
import { store } from '../app/store'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchClients } from '../features/client/clientSlice'
import { fetchGrievers } from '../features/griever/grieverSlice'
import { fetchGrievances, selectAllGrievances } from '../features/grievance/grievanceSlice'
import FollowupTable from '../features/grievance/components/FollowupTable'


const OngoingRecord = () => {

 const location = useLocation()

 if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
 }else{
    sessionStorage.setItem('current_location', location.pathname)

    const dispatch = useAppDispatch()
    
    const dispatchInit = async () => {
      await Promise.all([
        dispatch(fetchClients()),
        dispatch(fetchGrievers()),
        dispatch(fetchGrievances()),
      ])
    }

    useEffect( () => {
        dispatchInit()
    }, [])
  }

  return (
     <>
        <Meta title='Ongoing'/>
        <NavBarLast />
        <Breadcrumb title='Ongoing'/>
       <section className="pt-7 pb-12">
          <div className="container">
            {/* <Heading heading='Ongoing Grievances'  /> */}
            <div className="row mt-8" >
              <div className="col-12 col-md-3">
                <RightNav  title='Ongoing'/>
              </div>
              <div className="col-12 col-md-9 col-lg-8 offset-lg-1" style={{maxHeight: 'auto'}}>
                   <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
                    <li className="list-group-item">

                      
                      <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseOne" aria-expanded="true">
                        Ongoing Grievances
                      </a>

                      
                      <div className="collapse show" id="faqCollapseOne" data-bs-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                         <FollowupTable />
                        </div>
                      </div>

                    </li>

                     <li className="list-group-item">

                      
                      <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseOne">
                        Resolved Grievances
                      </a>

                      
                      <div className="collapse" id="faqCollapseOne" data-bs-parent="#faqCollapseParentOne">
                        <div className="mt-5">
                         <FollowupTable />
                        </div>
                      </div>

                    </li>
                    
                   
                  </ul>
              </div>
            </div>
          </div>
        </section>
      </>

    
  )
}

export default OngoingRecord