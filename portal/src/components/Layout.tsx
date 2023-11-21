import React, { useEffect } from 'react'
import RandomModals from './RandomModals'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { connect } from 'react-redux'
import {checkAuthenticated, loadUser} from '../features/user/userSlice' 
import {fetchClients} from '../features/client/clientSlice'
import { store } from '../app/store'
import { useAppDispatch } from '../app/hooks'
import { fetchSeverities } from '../features/severity/severitySlice'
import { fetchNatures } from '../features/nature/natureSlice'
import { fetchGrievers } from '../features/griever/grieverSlice'

const Layout = () => {
  const dispatch = useAppDispatch()
  
  const dispatchInit =async () => {
    await Promise.all([
      dispatch(checkAuthenticated()),
      dispatch(loadUser()),
    ])
  }

  
  useEffect( () => {
    if (localStorage.getItem('access')) {
        dispatchInit()
    }
  }, [])


  return (
    <>
        <RandomModals />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default Layout