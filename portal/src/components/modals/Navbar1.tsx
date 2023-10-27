import React from 'react'
import { Link } from 'react-router-dom'


const Navbar1 = () => {
  return (
    <>
        <nav className="navbar navbar-expand navbar-dark z-index-1">
          <div className="container">
        
            
            <Link className="navbar-brand" to="/">
              GRM.
            </Link>
        
            
            <ul className="navbar-nav d-none d-md-flex ms-auto">
              <li className="nav-item ms-lg-n4">
                <Link className="nav-link"  style={{color:'#ffffff'}} to="/login">
                  <i className="fa fa-right-to-bracket"></i>
                </Link>
              </li>
            </ul>
        
            
            <button className="navbar-toggler d-block ms-7" type="button" data-bs-toggle="offcanvas" data-bs-target="#modalSidebar">
              <span className="navbar-toggler-icon"></span>
            </button>
        
          </div>
        </nav>
    </>
  )
}

export default Navbar1