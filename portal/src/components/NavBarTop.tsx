import React from 'react'

const NavBarTop = () => {
  return (
    <>
        <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
      <div className="container">
    
        <div className="me-xl-8">
          <i className="fe fe-truck me-2"></i> <span className="heading-xxxs">Grievance Redress Mechanism Portal</span>
        </div>
    
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        
        <div className="collapse navbar-collapse" id="topbarCollapse">
    
          
          <ul className="nav nav-divided navbar-nav me-auto">
            <li className="nav-item dropdown">
    
              
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">
                <img className="mb-1 me-1" src="assets/img/flags/usa.svg" alt="..." /> United States
              </a>
    
              
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src="assets/img/flags/tz.png" alt="USA" />United States
                </a>
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src="assets/img/flags/canada.svg" alt="Canada" />Canada
                </a>
                <a className="dropdown-item" href="#!">
                  <img className="mb-1 me-2" src="assets/img/flags/germany.svg" alt="Germany" />Germany
                </a>
              </div>
    
            </li>
            <li className="nav-item dropdown">
    
              
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">DOM</a>
    
              
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#!">USD</a>
                <a className="dropdown-item" href="#!">EUR</a>
              </div>
    
            </li>
            <li className="nav-item dropdown">
    
              
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">English</a>
    
              
              <div className="dropdown-menu min-w-0">
                <a className="dropdown-item" href="#">English</a>
                <a className="dropdown-item" href="#">French</a>
                <a className="dropdown-item" href="#">German</a>
              </div>
    
            </li>
          </ul>
    
          
          <ul className="nav navbar-nav me-8">
            <li className="nav-item">
              <a className="nav-link" href="shipping-and-returns.html">Shipping</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="faq.html">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact-us.html">Contact</a>
            </li>
          </ul>
    
          
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item ms-xl-n4">
              <a className="nav-link text-gray-350" href="#!">
                <i className="fab fa-medium"></i>
              </a>
            </li>
          </ul>
    
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBarTop