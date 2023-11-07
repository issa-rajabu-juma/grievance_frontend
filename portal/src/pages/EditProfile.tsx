import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../features/grievance/components/records/Heading'
import ProfileForm from '../features/griever/components/ProfileForm'
import LeftProfile from '../features/griever/components/LeftProfile'

const EditProfile = () => {
  return (
    <>
      <Meta title='Edit Profile'/>
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
            <ProfileForm />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditProfile