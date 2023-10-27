import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import RegistrationForm from '../features/user/components/RegistrationForm'
import NavBarLast from '../components/NavBarLast'

const Register = () => {
  return (
    <>
        <Meta title='Register'/>
        <NavBarLast />

        <section className="py-12">
        <div className="container">
                {/* <Link className="btn btn-link" to="/login">Click here to login</Link> */}

            <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center" style={{marginTop:2 + '%'}}>
                <div className="mb-7 fs-1"><i className="fa fa-user"></i></div>
                <RegistrationForm />
                  <div className="row">
                    <div className="col-md-4">
                      <Link className="btn btn-link" to='/home'>Grieve Anonymously</Link>
                    </div>
                    <div className="col-md-4">
                      <Link className="btn btn-link" to="/register">Reset Password</Link>
                    </div>
                    <div className="col-md-4">
                      <Link className="btn btn-link" to="/login">System Login</Link>
                    </div>
                  </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Register