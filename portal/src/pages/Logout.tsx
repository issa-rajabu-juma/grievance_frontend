import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { logout } from '../features/user/userSlice'
import { Navigate, useNavigate } from 'react-router-dom'
const Logout = (props:any) => {
    const navigate = useNavigate()
    useEffect( () => {
        props.logout()
        navigate('/login')
    }, [])
  return (
    <div>Logout</div>
  )
}

export default connect(null, {logout})( Logout)