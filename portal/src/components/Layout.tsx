import React, { useEffect } from 'react'
import RandomModals from './RandomModals'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { connect } from 'react-redux'
import {checkAuthenticated, loadUser} from '../features/user/userSlice' 

const Layout = (props:any) => {
  
  useEffect( () => {
    if (localStorage.getItem('access')) {
      props.checkAuthenticated()
      props.loadUser()
    }
    
  }, [])

  return (
    <>
        <RandomModals />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default connect(null, {checkAuthenticated, loadUser})(Layout)