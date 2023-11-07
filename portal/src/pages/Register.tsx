import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import RegistrationForm from '../features/user/components/RegistrationForm'
import NavBarLast from '../components/NavBarLast'
import UserForm from '../features/user/components/UserForm'

const Register = () => {
  return (
    <>
        <Meta title='Register'/>
        <NavBarLast />
        <section className="py-12">
          <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center" style={{marginTop:2 + '%'}}>
                    <div className="mb-7 fs-1"><i className="fa fa-user"></i></div>
                      <UserForm />
                      <div className="row pt-3">
                      
                      <div className="col-md-6">
                        <Link className="btn btn-link" to="/login">User Login</Link>
                      </div>
                      <div className="col-md-6">
                        <Link className="btn btn-link" to="/reset">Reset Password</Link>
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