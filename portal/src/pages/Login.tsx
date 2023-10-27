import React from 'react'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Heading from '../features/grievance/components/records/Heading'
import LoginForm from '../features/user/components/LoginForm'
import NavBarLast from '../components/NavBarLast'

const Login = () => {
  return (
    <>
        <Meta title='Login'/>
        <NavBarLast />

        <section className="py-12">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center" style={{marginTop:2 + '%'}}>
                <div className="mb-7 fs-1"><i className="fa fa-user"></i></div>
                <LoginForm />
                <div className="row">
                  <div className="col-md-4">
                    <Link className="btn btn-link" to='/home'>Grieve Anonymously</Link>
                  </div>
                  <div className="col-md-4">
                    <Link className="btn btn-link" to="/register">Reset Password</Link>
                  </div>
                  <div className="col-md-4">
                    <Link className="btn btn-link" to="/register">Create Account</Link>
                  </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Login