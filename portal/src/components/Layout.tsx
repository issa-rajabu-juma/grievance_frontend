import React from 'react'
import RandomModals from './RandomModals'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <RandomModals />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default Layout