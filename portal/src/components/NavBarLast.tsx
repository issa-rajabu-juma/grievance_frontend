import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLast = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
    
        <Link className="navbar-brand" to="/">
          GRM.
        </Link>
    
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarCollapse">
    
          
          <ul className="navbar-nav mx-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to="/home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">GRIEVE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/open">RECORDS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/closure">CLOSURE</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq">FAQ</Link>
            </li>
          </ul>
    
          
          <ul className="navbar-nav flex-row">
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
    
        </div>
    
      </div>
    </nav>
    </>
  )
}

export default NavBarLast