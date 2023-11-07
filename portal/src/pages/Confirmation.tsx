import React from 'react'
import NavBarLast from '../components/NavBarLast'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'

const Confirmation = () => {
  return (
    <>
        <Meta title='Confirmation'/>
        <NavBarLast />
        <section className="py-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">

                        <div className="mb-7 fs-1">😎</div>

                        <h2 className="mb-5">Congratulation</h2>

                        <p className="mb-7 text-gray-500">
                            User Account Registered Successfully; Please visit your mail address to activate your account...
                        </p>

                        <Link className="btn btn-dark" to="/">
                            Continue
                        </Link>

                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default Confirmation