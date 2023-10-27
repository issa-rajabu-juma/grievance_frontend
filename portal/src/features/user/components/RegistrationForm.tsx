import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { registerGriever } from '../../griever/grieverSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
// import { registerUser } from '../userSlice'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    // user states
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [last_login, setLlogin] = useState('')
    const [email, setEmail] = useState('')
    const [is_superuser, setSuperuser] = useState('')
    const [is_staff, setStaff] = useState('')
    const [date_joined, setDjoined] = useState('')
    const [is_active, setActive] = useState('')

    // griever states
    const [f_name, setF_name] = useState('')
    const [m_name, setM_name] = useState('')
    const [l_name, setL_name] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [street, setStreet] = useState('')
    const [ward, setWard] = useState('')
    const [district, setDistrict] = useState('')
    const [region, setRegion] = useState('')
    const [anonymous, setAnonymous] = useState('')
    const [marital_status, setMarital_status] = useState('')
    const [spouse, setSpouse] = useState('')
    const [next_kin, setNext_kin] = useState('')
    const [updated_date, setUpdatedDate] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [created_date, setCreatedDate] = useState('')
    const [updated_by, setUpdatedBy] = useState('')


    
    // declare hooks
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // selectors


    // set choices
 



    const canSave = Boolean(f_name) && Boolean(m_name) && Boolean(l_name)
    

    // handle on change to set out local state
    const onUsernameChange = (e: any) => setUsername(e.target.value)
    const onPasswordChange = (e: any) => setPassword(e.target.value)
    const onRepasswordChange = (e: any) => setRepassword(e.target.value)
    const onEmailChange = (e: any) => setEmail(e.target.value)
    const onFnameChange = (e: any) => setF_name(e.target.value)
    const onMnameChange = (e: any) => setM_name(e.target.value)
    const onLnameChange = (e: any) => setL_name(e.target.value)
    const onMobileChange = (e: any) => setMobile_no(e.target.value)
    const onWardChange = (e: any) => setWard(e.target.value)
    const onDistrictChange = (e: any) => setDistrict(e.target.value)
    const onRegionChange = (e: any) => setRegion(e.target.value)
  

    // submit form
    const onRegistration = (e: any) => {
        e.preventDefault()
        if (f_name && m_name && l_name){
            // register user
            // dispatch(
            //     registerUser(
            //         password,
            //         last_login,
            //         is_superuser,
            //         username,
            //         f_name,
            //         l_name,
            //         email,
            //         is_staff,
            //         is_active,
            //         date_joined
            //     )
            // )

            // register griever
            dispatch(
                registerGriever(
                    f_name,
                    m_name,
                    l_name,
                    gender,
                    age,
                    mobile_no,
                    street,
                    ward,
                    district,
                    region,
                    anonymous,
                    marital_status,
                    spouse,
                    next_kin,
                    created_date,
                    updated_date,
                    created_by,
                    updated_by
                    )
            )

            setUsername('')
            setPassword('')
            setRepassword('')
            setEmail('')
            setF_name('')
            setM_name('')
            setL_name('')
            setMobile_no('')
            setWard('')
            setDistrict('')
            setRegion('')
            
            navigate('/login')

            
        }
    }

    
    return (
        <>
            <form style={{paddingTop:0.5 + 'em', width:100 + "%", marginLeft: 0 + '%'}} >
                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="f_name" type="text" placeholder="First name" name='f_name' value={f_name} onChange={onFnameChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                           
                            <input className="form-control form-control-sm" id="m_name" type="text" placeholder="Middle name" name='m_name' value={m_name} onChange={onMnameChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="l_name" type="text" placeholder="Last name" name='l_name' value={l_name} onChange={onLnameChange} required />
                        </div>
                    </div>   
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="username" type="text" placeholder="Username" name='username' value={username} onChange={onUsernameChange} required />
                        </div>
                    </div> 
                     <div className="col-12 col-md-7">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="email" type="email" placeholder="email@uvw.xyz" name='email' value={email} onChange={onEmailChange} required />
                        </div>
                    </div>  
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="password" type="password" placeholder="Password" name='password' value={password} onChange={onPasswordChange} required />
                        </div>
                    </div>  
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="repassword" type="password" placeholder="Repeat Password" name='repassword' value={repassword} onChange={onRepasswordChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="region" type="text" placeholder="Region" name='region' value={region} onChange={onRegionChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="district" type="text" placeholder="District" name='district' value={district} onChange={onDistrictChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="ward" type="text" placeholder="Ward" name='ward' value={ward} onChange={onWardChange} required />
                        </div>
                    </div>   
                      <div className="col-12 col-md-12">
                        <div className="form-group">
                            <input className="form-control form-control-sm" id="mobile" type="text" placeholder="Mobile number" name='mobile' value={mobile_no} onChange={onMobileChange} required />
                        </div>
                    </div>
                    
                    <div className="col-12 text-center">
                        <button className="btn btn-link" onClick={onRegistration}>Register</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RegistrationForm