import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'

const Logout = (props:any) => {
    const navigate = useNavigate()

     const dispatch = useAppDispatch()
    
    const dispatchInit = async () => {
      await Promise.all([
        dispatch(logout())
      ])
      navigate('/login')

    }

    useEffect( () => {
        dispatchInit()
    }, [])

  
    
  return (
      <div className="spinner-grow text-primary mb-1" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
  )
}

export default Logout