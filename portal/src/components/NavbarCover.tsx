import React from 'react'
import { Link } from 'react-router-dom'
import { store } from '../app/store'

const NavbarCover = () => {
     // get global state
  // const state = store.getState()

  const guestLinks = () => {
    return (
      <>
        <Link className="navbar-toggler d-flex " style={{fontWeight: 700, marginLeft: 80 + '%'}} to="/register">REGISTER</Link>
        <Link className="navbar-toggler d-flex ms-7" style={{fontWeight: 700}} to="/login">LOGIN </Link>
      </>
    )
  }

  const authLinks = () => {
    return (
      <>
        <Link className="navbar-toggler d-flex " style={{fontWeight: 700, marginLeft: 80 + '%'}} to="/profile">PROFILE</Link>
        <Link className="navbar-toggler d-flex ms-7" style={{fontWeight: 700}} to="/logout">LOGOUT </Link>
      </>
    )
  }

  let links
    if (localStorage.getItem('authenticated') === 'true') {
      links = authLinks()
    }else{
      links = guestLinks()
    }

    console.log(localStorage.getItem('authenticated'))

  return (
    <>
        <nav className="navbar navbar-expand navbar-dark z-index-1">
          <div className="container">
            <Link className="navbar-brand" to="/">
              GRM.
            </Link>
            {links}
          </div>
        </nav>
    </>
  )
}

export default NavbarCover