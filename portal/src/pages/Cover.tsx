import React from 'react'
import { Link } from 'react-router-dom'
import NavbarCover from '../components/NavbarCover'
import { store } from '../app/store'

const Cover = () => {
       // get global state
  const state = store.getState()
  let authenticated = false
  if(state.auth.isAuthenticated){
    authenticated = true
  }
  
  return (
    <>
        <NavbarCover />
        <section className="mt-n12" data-jarallax data-speed=".8" style={{backgroundImage: 'url(assets/img/covers/cov1.jpg)'}}>
          <div className="container d-flex flex-column">
            <div className="row justify-content-center align-items-center min-vh-100 pt-15 pb-12">
              <div className="col-12 col-md-7 col-lg-5 text-center text-white">
                <h1 className="display-4 mb-10">
                  Better Things In a Better Way
                </h1>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Cover