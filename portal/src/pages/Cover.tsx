import React from 'react'
import { Link } from 'react-router-dom'
import Navbar1 from '../components/modals/Navbar1'


const Cover = () => {
  return (
    <>
        <Navbar1 />

        <section className="mt-n12" data-jarallax data-speed=".8" style={{backgroundImage: 'url(assets/img/covers/cov1.jpg)'}}>
          <div className="container d-flex flex-column">
            <div className="row justify-content-center align-items-center min-vh-100 pt-15 pb-12">
              <div className="col-12 col-md-7 col-lg-5 text-center text-white">

                <h1 className="display-4 mb-10">
                  Better Things In a Better Way
                </h1>

                <Link className="link-underline text-reset mx-4 my-4" to="/home">HOME</Link>
                <Link className="link-underline text-reset mx-4 my-4" to="/open">RECORDS</Link>
                <Link className="link-underline text-reset mx-4 my-4" to="/closure">CLOSURE</Link>
                <Link className="link-underline text-reset mx-4 my-4" to="/faq">FAQ</Link>

              </div>
            </div>
          </div>
        </section>

    </>
  )
}

export default Cover