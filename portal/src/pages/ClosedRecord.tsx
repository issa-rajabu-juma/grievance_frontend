import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Heading from '../features/grievance/components/records/Heading'
import RightNav from '../features/grievance/components/records/RightNav'
import Closed from '../features/grievance/components/records/pages/Closure'
import { store } from '../app/store'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const ClosedRecord = () => {
  const store_state = store.getState()
  const location = useLocation()
  const navigate = useNavigate()
  
console.log(location)
  if (!store_state.auth.isAuthenticated) {

    navigate('/login', {state: {loc:location.pathname}})
    console.log(location)
  }
  
  return (
     <>
        <Meta title='Closure'/>
        <NavBarLast />
        <Breadcrumb title='Closure'/>
       <section className="pt-7 pb-12">
          <div className="container">
            <Heading heading='Closed Grievances'  />
            <div className="row">
              <div className="col-12 col-md-3">
                <RightNav title='Closure'/>
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