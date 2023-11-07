import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../features/grievance/components/records/Heading'
import { Link } from 'react-router-dom'
import LeftProfile from '../features/griever/components/LeftProfile'

const Profile = () => {
  return (
    <>
      <Meta title='Confirmation'/>
      <NavBarLast />
      {/* <Breadcrumb title='Profile'/> */}

    <section className="pt-7 pb-12">
      <div className="container">
        {/* <Heading heading='My Profile' /> */}
        <div className="avatar avatar-xxl center  mt-8">
                <img src="../assets/img/avatars/avatar-1.jpg" alt="..." className="avatar-img rounded-circle" />
              </div>

        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-xl-3">
            <LeftProfile />
          </div>
          <div className="col-12 col-md-8">
           
            <table className="table table-bordered">
              
              <tbody>
                <tr>
                  <td>Marital Status</td>
                  <td>Single</td>
                </tr>
                 <tr>
                  <td>Spouse</td>
                  <td>N/A</td>
                </tr>
                 <tr>
                  <td>Next of Kin</td>
                  <td>Malaika Issa</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>Tanga</td>
                </tr>
                 <tr>
                  <td>District</td>
                  <td>Muheza</td>
                </tr>
                 <tr>
                  <td>Ward</td>
                  <td>Hale</td>
                </tr>
                 <tr>
                  <td>Street</td>
                  <td>Msikitini Kwa Omary</td>
                </tr>
              </tbody>
            </table>


            <div className="row mt-9">
              <div className="col-12 col-md-6">

                <Link className="btn btn-lg w-100 btn-outline-dark" to="/edit-profile">
                  Edit Your Profile
                </Link>

              </div>
              <div className="col-12 col-md-6">

                <a className="btn btn-lg w-100 btn-outline-dark" href="contact-us.html">
                  Change Your Profile Picture
                </a>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Profile