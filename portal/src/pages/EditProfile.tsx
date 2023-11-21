import React, { useEffect } from 'react'
import NavBarLast from '../components/NavBarLast'
import Meta from '../components/Meta'
import Breadcrumb from '../components/Breadcrumb'
import Heading from '../features/grievance/components/records/Heading'
import ProfileForm from '../features/griever/components/AmmendmentForm'
import LeftProfile from '../features/griever/components/LeftProfile'
import { loadUser } from '../features/user/userSlice'
import { fetchGrievers, selectAllGrievers } from '../features/griever/grieverSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Navigate, useLocation } from 'react-router-dom'
import { AppDispatch, RootState } from '../app/store'
import { connect } from 'react-redux'

const EditProfile = (props: any) => {
  


    // const dispatch = useAppDispatch()
    
    props.fetchGrievers()
    props.fetchUser()
    console.log(props)
  console.log(props.grievers)

    useEffect(() => {
        
    }, [])
  

    



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
            {/* <ProfileForm data={props} /> */}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
const mapStateToProps = (state: RootState) => {
  return {
    grievers: state.grievers,
    user: state.auth.user
  }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    fetchUser: () => dispatch(loadUser),
    fetchGrievers:  () => dispatch(fetchGrievers)
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditProfile)