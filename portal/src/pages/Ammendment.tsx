import React, { useEffect } from 'react'
import { loadUser } from '../features/user/userSlice'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../app/hooks'
import { fetchGrievers } from '../features/griever/grieverSlice'
import Meta from '../components/Meta'
import NavBarLast from '../components/NavBarLast'
import Breadcrumb from '../components/Breadcrumb'
import LeftProfile from '../features/griever/components/LeftProfile'
import { RootState } from '../app/store'
import { connect } from 'react-redux'
import AmmendmentForm from '../features/griever/components/AmmendmentForm'


const Ammendment = (props: any) => {
    const location = useLocation()

 if (sessionStorage.getItem('authenticated') !== 'true') {
    sessionStorage.setItem('current_location', location.pathname)
    return <Navigate to='/login' />
 }else{
    sessionStorage.setItem('current_location', location.pathname)

    const dispatch = useAppDispatch()
    
    const dispatchInit = async () => {
      await Promise.all([
        dispatch(loadUser()),
        dispatch(fetchGrievers()),
      ])
    }

    useEffect( () => {
        dispatchInit()
    }, [])
  }


  return (
      <>
      <Meta title='Edit Profile'/>
      <NavBarLast />
      <Breadcrumb title='Profile'/>

    <section className="pt-7 pb-12 mt-8">
      <div className="container">
        {/* <Heading heading='My Profile' /> */}
       
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 col-xl-3">
            <LeftProfile />
            

          </div>
          <div className="col-12 col-md-8">
            <AmmendmentForm data={{grievers: props.grievers, user: props.user}} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    grievers: state.grievers.grievers,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null) (Ammendment)