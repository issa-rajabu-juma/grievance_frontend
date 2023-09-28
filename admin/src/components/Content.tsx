import React from 'react'
import Dashboard from '../pages/Dashboard'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <>
    
            <div className="content-page">
                
                {/* content */}
                <Outlet />

                {/* footer */}
                <Footer />
                

            </div>

    </>
  )
}

export default Content