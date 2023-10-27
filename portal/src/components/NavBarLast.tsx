import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { logout } from '../features/user/userSlice'
import { store } from '../app/store'

const NavBarLast = () => {

   // get global state
  const state = store.getState()
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

   const loggout = (e: any) => {
        dispatch(logout())
        navigate('/login')
    }


  const guestLinks = () => {
    return (
      <>
        <li className="nav-item ms-lg-n4">
            <a className="nav-link"  style={{color:'#474747'}} href="/register">
              REGISTER
            </a>
          </li>

          <li className="nav-item ms-lg-n4">
            <Link className="nav-link"  style={{color:'#474747'}} to="/login">
              LOGIN
            </Link>
          </li>
      </>
    )
  }

  const authLinks = () => {
    return (
      <>
          <li className="nav-item ms-lg-n4">
            <Link className="nav-link"  style={{color:'#474747'}} to="">
             PROFILE
            </Link>
          </li>

          <li className="nav-item ms-lg-n4">
            <Link className="nav-link"  style={{color:'#474747'}} to="/logout">
              LOGOUT
            </Link>
          </li>
      </>
    )
  }

  let links
  if (state.user.isAuthenticated) {
     links = authLinks()
  }else{
    links = guestLinks()
  }


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
              <a className="nav-link" style={{color:'#474747'}} data-bs-toggle="offcanvas" href="#modalSearch">
                <i className="fa fa-search"></i>
              </a>
            </li>

            {links}

           

            
            
            
           
            
          </ul>
    
        </div>
    
      </div>
    </nav>
    </>
  )
}

export default NavBarLast