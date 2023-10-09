import React from 'react'
import FollowupTable from '../../FollowupTable'
import { useSelector } from 'react-redux'
import { selectAllGrievances } from '../../../grievanceSlice'


const FaqList = () => {
  const grievances = useSelector(selectAllGrievances)

  return (
    <>
      <h5 className="mb-7">Orders:</h5>
      <ul className="list-group list-group-flush-x mb-9" id="faqCollapseParentOne">
        <li className="list-group-item">

          
          <a className="dropdown-toggle d-block fs-lg fw-bold text-reset" data-bs-toggle="collapse" href="#faqCollapseOne">
            1. Bring of had which their whose you're it own?
          </a>

          
          <div className="collapse" id="faqCollapseOne" data-bs-parent="#faqCollapseParentOne">
            <div className="mt-5">
              <p className="mb-0 fs-lg text-gray-500">
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
              <p className="mb-0 fs-lg text-gray-500">
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
              <p className="mb-0 fs-lg text-gray-500">
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
              <p className="mb-0 fs-lg text-gray-500">
                Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth
                hath rule creepeth own lesser years itself so seed fifth for grass.
              </p>
            </div>
          </div>

        </li>
      </ul>
    </>
  )
}

export default FaqList