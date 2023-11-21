import React, { useEffect } from 'react'
import NavBarLast from '../components/NavBarLast'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../features/grievance/components/records/Heading'
import { Link, Navigate, useLocation } from 'react-router-dom'
import LeftProfile from '../features/griever/components/LeftProfile'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchGrievers, selectAllGrievers } from '../features/griever/grieverSlice'
import { loadUser, selectLoggedinUser } from '../features/user/userSlice'
import MainProfile from '../features/griever/components/MainProfile'

const Profile = () => {
  const location = useLocation()

  if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
  }else{
    sessionStorage.setItem('current_location', location.pathname)

    const dispatch = useAppDispatch()
    
    const dispatchInit = async () => {
      await Promise.all([
        dispatch(fetchGrievers()),
        dispatch(loadUser()),
      ])
    }

    useEffect( () => {
        dispatchInit()
    }, [])
  }



  return (
    <>
      <Meta title='Profile'/>
      <NavBarLast />
      <Breadcrumb title='Profile'/>

      <MainProfile />
    </>
  )
}

export default Profile