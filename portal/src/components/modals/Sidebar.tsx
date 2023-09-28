import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     <div className="offcanvas offcanvas-end" id="modalSidebar" tabIndex={-1} role="dialog" aria-hidden="true">
        
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>
        
          <div className="offcanvas-body px-10 my-auto">
        
            <ul className="nav nav-vertical nav-unstyled fs-2" id="sidebarNav">
              


              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/grievance">GRIEVANCE</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/followup">PROGRESS</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/closed">CLOSURE</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQ</Link>
              </li>
            </ul>
        
          </div>
        
          <div className="moda-body px-10 py-9">
        
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link className="text-gray-350" to="#!">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-gray-350" to="#!">
                  <i className="fab fa-youtube"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-gray-350" to="#!">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-gray-350" to="#!">
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link className="text-gray-350" to="#!">
                  <i className="fab fa-medium-m"></i>
                </Link>
              </li>
            </ul>
        
            <div className="fs-xxs text-gray-350">
              © 2019 All rights reserved. Designed by Unvab.
            </div>
        
          </div>
        
        </div>
    </>
  )
}

export default Sidebar