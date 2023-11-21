import React from 'react'
import LeftProfile from './LeftProfile'
import { useAppSelector } from '../../../app/hooks'
import { selectAllGrievers } from '../grieverSlice'
import { selectLoggedinUser } from '../../user/userSlice'
import { Link } from 'react-router-dom'
// import getItemByUID from '../../../app/helpers'

const MainProfile = () => {
    const grievers = useAppSelector(selectAllGrievers).grievers
    const user = useAppSelector(selectLoggedinUser)
   

    let grv = Array()
    let tableBody: any
    let aside: any
 

    if (grievers !== null) {
      for (const key in grievers) {
        if (Object.prototype.hasOwnProperty.call(grievers, key)) {
          const griever = grievers[key];
          if (griever.user === user.id) {
            grv.push(griever)
            break
          }
        }
      }

      tableBody = grv.map((griever: any) => (
        <tbody  key={griever.griever_id}>
        <tr>
            <td>Marital Status</td>
            <td>{griever.marital_status}</td>
        </tr>
            <tr>
            <td>Spouse</td>
            <td>{griever.spouse}</td>
        </tr>
            <tr>
            <td>Next of Kin</td>
            <td>{griever.next_kin}</td>
        </tr>
        <tr>
            <td>Region</td>
            <td>{griever.region}</td>
        </tr>
            <tr>
            <td>District</td>
            <td>{griever.district}</td>
        </tr>
            <tr>
            <td>Ward</td>
            <td>{griever.ward}</td>
        </tr>
            <tr>
            <td>Street</td>
            <td>{griever.street}</td>
        </tr>
        </tbody>
      ))

      aside = grv.map((griever: any) => (
        <aside className="mb-9 mb-md-0" key={griever.griever_id}>
            <h6 className="mb-6">
                <i className="fe fe-phone text-primary me-4"></i> Personal Info:
            </h6>
            <p className="text-gray-500">
                Please confirm your personal Information for correctness.
            </p>
            <p className='mb-3'>
                <strong>Full Name:</strong><br />
                <a className="text-gray-500" href="#">{griever.f_name + ' ' + griever.m_name + ' ' + griever.l_name}</a>
            </p>
            <p className="mb-3">
                <strong>Gender:</strong><br />
                <a className="text-gray-500" href="#">{griever.gender}</a>
            </p>
            <p className="mb-3">
                <strong>Age:</strong><br />
                <a className="text-gray-500" href="#">{griever.age} Years Old</a>
            </p>
            <hr />
            <h6 className="mb-6">
                <i className="fe fe-mail text-primary me-4"></i> Contact Info:
            </h6>
            <p className="text-gray-500">
                The contact can be made anytime within 24 hours.
            </p>
            <p className="mb-3">
                <strong>Mobile No:</strong><br />
                <a className="text-gray-500" href="#">{griever.mobile_no}</a>
            </p>
            <p className="mb-3">
                <strong>Email Address:</strong><br />
                <a className="text-gray-500" href="mailto:careers@example.com">{(griever.email) ? griever.email : 'admin@admin.com'}</a>
            </p>
        </aside>
      ))
    }


    return (
        <section className="pt-7 pb-12 mt-8">
            <div className="container">
               
                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 col-xl-3">
                        {aside}
                    </div>
                    <div className="col-12 col-md-8">
                        <table className="table table-bordered">
                           
                            {tableBody}
                        </table>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default MainProfile