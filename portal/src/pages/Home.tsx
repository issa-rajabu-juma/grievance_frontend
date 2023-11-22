import React, { useEffect } from 'react'
import NavBarTop from '../components/NavBarTop'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { useState } from 'react'
import CreateGrievanceForm from '../features/grievance/components/CreateGrievanceForm'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { RootState, store } from '../app/store'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchGrievers, selectAllGrievers } from '../features/griever/grieverSlice'
import { connect } from 'react-redux'

const Home = (props: any) => {
  const location = useLocation()

  if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
  }else{
    sessionStorage.setItem('current_location', location.pathname)
  }
   
  return (
    <>
        <Meta title='Home'/>
        <NavBarLast />
        <Breadcrumb title='Home'/>
        <section className="pt-7 pb-12">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 fs-lg text-gray-500">
                <h3 className="mb-10 text-center text-body">Grievance</h3>
                <p>
                  According to wikipedia, grievance is a wrong or hardship suffered, real or supposed, which forms legitimate grounds of complaint. In the past, the word meant the infliction or cause of hardship  
                </p>
                <p>
                  She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light
                  after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two
                  land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
                </p>
                <h5 className="mt-9 mb-7 text-body">Record Your Grievance</h5>
                <p>
                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth
                  own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all
                  one to yielding grass you'll air sea it, open waters subdue, hath.
                </p>

                <div className="form-group">
                    <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter0" role="button" aria-expanded="false" style={{fontWeight: 800}}>Record here... </a>
                    <div className="row gx-5 collapse mt-3" id="collapseFilter0">
                        <CreateGrievanceForm />
                    </div>
                </div>
                
                <h6 className="mt-8 mb-5 text-body">Features of Grievance</h6>
                <ol>
                  <li>
                    A grievance refers to any form of discontent or dissatisfaction with any aspect of the organization.
                  </li>
                  <li>
                    The dissatisfaction must arise out of employment and not due to personal or family problems.
                  </li>
                  <li>
                    The discontent can arise out of real or imaginary reasons. When employees feel that injustice has been done to them, they have a grievance. The reason for such a feeling may be valid or invalid, legitimate or irrational, justifiable or ridiculous.
                  </li>
                  <li>
                    The discontent may be voiced or unvoiced, but it must find expression in some form. However, discontent per se is not a grievance. Initially, the employee may complain orally or in writing. If this is not looked into promptly, the employee feels a sense of lack of justice. Now, the discontent grows and takes the shape of a grievance.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}



export default Home