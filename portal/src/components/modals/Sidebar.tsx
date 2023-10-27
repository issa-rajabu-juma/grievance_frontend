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
                <Link className="nav-link" to="/home">Home</Link>
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
               <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
        
          </div>
        
         
        </div>
    </>
  )
}

export default Sidebar