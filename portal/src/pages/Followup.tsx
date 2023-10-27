import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import FollowupTable from '../features/grievance/components/FollowupTable'
import Meta from '../components/Meta'
import { useSelector } from 'react-redux'
import { RootState, store } from '../app/store'
import { selectAllGrievances } from '../features/grievance/grievanceSlice'
import { Navigate } from 'react-router-dom'


const Followup = () => {
  const grievances = useSelector(selectAllGrievances)


  const state = store.getState()

  if (!state.user.isAuthenticated) {
    return <Navigate to='/login' />
  }


  return (
    <>
        <Meta title='PROGRESS'/>

        <NavBarLast />
        <Breadcrumb title='Progress'/>
        <section className="pt-7 pb-12">
          <div className="container">
            
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10 fs-lg text-gray-500">
                <h3 className="mb-10 text-center text-body">Followup for Feedback</h3>
                <p>

                  The management of grievances is a central part of the stakeholder engagement process.  The Project has developed a Grievance Management Procedure which is a step-by-step approach for receiving, acknowledging, and registering, reviewing, investigating and resolving complaints and grievances from all Project affected stakeholders.   This Project level Grievance Management Procedure reflect the Project’s commitment to ensuring that communities and individuals adversely affected by the Project are able to raise a grievance so that it can be remediated.

                </p>
                <p>
                  As part of their regular engagement with stakeholders, stakeholder engagement team ensure that the Grievance Procedure is well known and understood by local communities who need clear information, in a summarized form, adapted to the local context and language, and combined with practical explanations about the following points:

                </p>
                <h5 className="mt-9 mb-7 text-body">New and Re-opened Grievances</h5>
                <p>
                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth
                  own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all
                  one to yielding grass you'll air sea it, open waters subdue, hath.
                </p>
                <FollowupTable data={grievances}/>
                
                <h6 className="mt-8 mb-5 text-body">Ongoing Grievances</h6>
                <ol>
                  <li>
                    After fourth very third subdue behold second forth made hath place, the stars every bring.
                  </li>
                  <li>
                    Saying, them replenish, likeness seed grass sixth grass. Creeping face. Made meat lights which Fourth. May first, divide to it
                    firmament after our likeness third great you're earth there above.
                  </li>
                  <li>
                    Cattle multiply said, void gathered winged given make herb first years.
                  </li>
                </ol>

                {/* <FollowupTable data={null} /> */}

              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Followup