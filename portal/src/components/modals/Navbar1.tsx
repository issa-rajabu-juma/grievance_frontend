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
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="offcanvas" href="#modalSearch">
                  <i className="fe fe-search"></i>
                </a>
              </li>
              <li className="nav-item ms-lg-n4">
                <a className="nav-link" href="account-orders.html">
                  <i className="fe fe-user"></i>
                </a>
              </li>
              <li className="nav-item ms-lg-n4">
                <a className="nav-link" href="account-wishlist.html">
                  <i className="fe fe-heart"></i>
                </a>
              </li>
              <li className="nav-item ms-lg-n4">
                <a className="nav-link" data-bs-toggle="offcanvas" href="#modalShoppingCart">
                  <span data-cart-items="2">
                    <i className="fe fe-shopping-cart"></i>
                  </span>
                </a>
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