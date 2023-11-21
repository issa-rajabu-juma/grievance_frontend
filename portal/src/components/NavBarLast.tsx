import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { loadUser, logout, selectLoggedinUser } from '../features/user/userSlice'
import { store } from '../app/store'
import { fetchGrievers, selectAllGrievers, updateGriever } from '../features/griever/grieverSlice'
import { getItemByUID } from '../app/helpers'

const NavBarLast = () => {
  

   // get global state
  const state = store.getState()
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

      
      const dispatchInit = async () => {
        await Promise.all([
          dispatch(fetchGrievers()),
          dispatch(loadUser()),
        ])
      }

      useEffect( () => {
          dispatchInit()
      }, [])

  // const [avatar, setAvatar] = useState()
  const grievers = useAppSelector(selectAllGrievers)
  const user = useAppSelector(selectLoggedinUser)
  const userKeysList = Object.keys(user).length
  const grieverKeysList = Object.keys(grievers.grievers).length
  var griever: any
  
  if (grieverKeysList > 0 && userKeysList > 0) {
    var griever = getItemByUID(grievers.grievers, user.id)[0]
    // console.log(griever)
    // console.log(user)
  }
    
      
    // }

    console.log(griever)
    

   const loggout = (e: any) => {
        dispatch(logout())
        navigate('/login')
    }

  
  const handleAvatar = (e: any) => {
    var avatar = e.target.files[0]
    if (avatar) {
      //  console.log(avatar)
    // console.log(avatar.name)
    var extension = avatar.name.split('.')[1]
    // console.log(extension)
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
      console.log('file accepted')
     
      // more controls
      // console.log(griever)
       dispatch(updateGriever({griever_id: griever.griever_id, profile: avatar}, griever.griever_id))
    }else {
      console.log('not accepted')
    }
    }else {
      console.log('no file')
    }
   
  }


  const guestLinks = () => {  
    return (
      <>
        <li className="nav-item ms-lg-n4">
            <Link className="nav-link"  style={{color:'#474747'}} to="/register">
              REGISTER
            </Link>
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
       <li className="nav-item">
          <a className="nav-link" style={{color:'#474747'}} data-bs-toggle="offcanvas" href="#modalSearch">
            <i className="fa fa-search"></i>
          </a>
        </li>
        <li className="nav-item dropdown hovered">
            <Link className="nav-link"  style={{color:'#474747'}} to=""  data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="avatar avatar" style={{marginTop: -0 + 'px'}}>
                        <img src={(griever) ? griever.profile : "../assets/img/avatars/avatar-1.jpg"} alt="..." className="avatar-img rounded-circle" />
                    </div> 
            </Link>
            <div className="dropdown-menu">
              <div className="card">
                <div className="card-body">
                  <ul className="list-styled fs-sm">
                    

                    <li className="list-styled-item">
                      <Link className="list-styled-link" to="/profile"><i className="fa fa-user"></i> &nbsp; Profile</Link>
                    </li>
                    <li className="list-styled-item">
                      <Link className="list-styled-link" to="/ammendment"><i className="fa fa-pencil"></i> &nbsp; Edit Profile</Link>
                    </li>

                 

                    <li className="list-styled-item">

                      <label className="list-styled-link"> 
                        <input name="avatar" type="file" onChange={handleAvatar}  id="formId" hidden />
                        <span>
                            <div className="avatar avatar-xs" style={{marginTop: -0 + 'px'}}>
                                <img src={(griever) ? griever.profile : "../assets/img/avatars/avatar-1.jpg"} alt="..." className="avatar-img rounded-circle" />
                            </div> 
                        </span> 
                        &nbsp; Change Avatar</label>
                    </li>
                    <li className="list-styled-item">
                      <Link className="list-styled-link" to="/logout"><i className="fa fa-sign-out"></i> &nbsp; Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </li>
      </>
    )
  }

  let links
  if (sessionStorage.getItem('authenticated') === 'true') {
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
            
            {links}

           

            
            
            
           
            
          </ul>
    
        </div>
    
      </div>
    </nav>
    </>
  )
}

export default NavBarLast