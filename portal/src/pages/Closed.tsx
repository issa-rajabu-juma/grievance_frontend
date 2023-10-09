import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import FollowupTable from '../features/grievance/components/FollowupTable'
import Meta from '../components/Meta'

const Closed = () => {
  return (
     <>
        <Meta title='CLOSURE'/>

        <NavBarLast />
        <Breadcrumb title='Closure' />
        <section className="pt-7 pb-12">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 fs-lg text-gray-500">

            <h3 className="mb-10 text-center text-body">Closure and Re-opening</h3>

            <p>

              The grievance outcome should notify the individual of their right to appeal. The appeal hearing chair should then establish why the employee is appealing the decision and what resolution the employee is seeking.


            </p>
            <p>
              The case should be reviewed, the grounds for appeal investigated and fairly considered before an appeal outcome is reached. The appeal is usually the final stage of the grievance process.

            </p>

            
            <h5 className="mt-9 mb-7 text-body">Resolved Grievances</h5>

            <p>
              Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth
              own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all
              one to yielding grass you'll air sea it, open waters subdue, hath.
            </p>


            <FollowupTable />
            

            
            <h6 className="mt-8 mb-5 text-body">Closed Grievances</h6>

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

             <FollowupTable />


          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Closed