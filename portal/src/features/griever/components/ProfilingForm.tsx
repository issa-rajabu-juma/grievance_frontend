import React, { useEffect, useMemo, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import  registerGriever, { fetchGrievers, newGriever, selectAllGrievers, updateGriever } from '../grieverSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
// import { registerUser } from '../userSlice'
import { useNavigate, Link } from 'react-router-dom'
import { checkAuthenticated, loadUser, selectLoggedinUser } from '../../user/userSlice'
import { getGriever, getItemByUID, getSingleItem } from '../../../app/helpers'


const ProfilingForm = (props: any) => {
    // hooks
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // states
    const [f_name, setFname] = useState('')
    const [m_name, setMname] = useState('')
    const [l_name, setLname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [ward, setWard] = useState('')
    const [district, setDistrict] = useState('')
    const [region, setRegion] = useState('')
    const [profile, setProfile] = useState('')
    const [marital_status, setMarital_status] = useState('')
    const [spouse, setSpouse] = useState('')
    const [next_kin, setNextkin] = useState('')

    // variables
    var form: any
    const canSave = Boolean(f_name) && Boolean(m_name) && Boolean(l_name)

    // props
    const grievers = props.data.grievers
    const user = props.data.user
    const griever = getItemByUID(grievers, user.id)

    // handlers
    const onFnameChange = (e: any) => setFname(e.target.value)
    const onMnameChange = (e: any) => setMname(e.target.value)
    const onLnameChange = (e: any) => setLname(e.target.value)
    const onGenderChange = (e: any) => setGender(e.target.value)
    const onAgeChange = (e: any) => setAge(e.target.value)
    const onMobileChange = (e: any) => setMobile_no(e.target.value)
    const onEmailChange = (e: any) => setEmail(e.target.value)
    const onStreetChange = (e: any) => setStreet(e.target.value)
    const onWardChange = (e: any) => setWard(e.target.value)
    const onDistrictChange = (e: any) => setDistrict(e.target.value)
    const onRegionChange = (e: any) => setRegion(e.target.value)
    const onMaritalChange = (e: any) => setMarital_status(e.target.value)
    const onSpouseChange = (e: any) => setSpouse(e.target.value)
    const onNextKinChange = (e: any) => setNextkin(e.target.value)
    


    // ragistration
    const onRegistration = (e: any) => {
        e.preventDefault()
       
            if (f_name && m_name && l_name){
                dispatch(newGriever({
                    anonymous: 0,
                    f_name,
                    l_name,
                    m_name,
                    gender,
                    age,
                    mobile_no,
                    street,
                    ward,
                    district,
                    region,
                    marital_status,
                    spouse,
                    next_kin,
                }))

                setFname('')
                setMname('')
                setLname('')
                setMobile_no('')
                setWard('')
                setDistrict('')
                setRegion('')
                setGender('')
                setAge('')
                setStreet('')
                setMarital_status('')
                setSpouse('')
                setNextkin('')
                
                navigate('/profile')
            }
                
    }
  
    // form 
    if (griever.length === 1) {
         form = (
                <form style={{paddingTop:0.5 + 'em', width:100 + "%", marginLeft: 0 + '%'}} >
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="fname" type="text" placeholder="First name" name='fname' value={f_name} onChange={onFnameChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="mname" type="text" placeholder="Middle name" name='mname' value={m_name} onChange={onMnameChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="lname" type="text" placeholder="Last name" name='lname' value={l_name} onChange={onLnameChange} required />
                            </div>
                        </div>   
                        <div className="col-12 col-md-5">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="mobile" type="text" placeholder="Mobile No" name='mobile' value={mobile_no} onChange={onMobileChange} required />
                            </div>
                        </div> 
                        <div className="col-12 col-md-7">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="email" type="email" placeholder="email@uvw.xyz" name='email' value={email} onChange={onEmailChange} required />
                            </div>
                        </div>  
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="region" type="text" placeholder="Region" name='region' value={region} onChange={onRegionChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="district" type="text" placeholder="District" name='district' value={district} onChange={onDistrictChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="ward" type="text" placeholder="Ward" name='ward' value={ward} onChange={onWardChange} required />
                            </div>
                        </div>  
                        <div className="col-12 col-md-5">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="street" type="text" placeholder="Street" name='street' value={street} onChange={onStreetChange} required />
                            </div>
                        </div>  
                        <div className="col-12 col-md-2">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="age" type="text" placeholder="Age" name='age' value={age} onChange={onAgeChange} required />
                            </div>
                        </div>  
                        <div className="col-12 col-md-3">
                            <div className="form-group">
                                <select className="form-select" onChange={onGenderChange}>
                                    <option defaultValue=''>Gender</option>
                                    <option defaultValue="1">Male</option>
                                    <option defaultValue="2">Female</option>
                                    <option defaultValue="3">Other</option>
                                </select>
                            </div>
                        </div>  
                        <div className="col-12 col-md-4">
                            <div className="form-group">
                                <select className="form-select" onChange={onMaritalChange}>
                                    <option defaultValue=''>Marital Status</option>
                                    <option defaultValue="1">Single</option>
                                    <option defaultValue="2">Mariaged</option>
                                    <option defaultValue="3">Devoced</option>
                                    <option defaultValue="3">Widow</option>
                                </select>
                            </div>
                        </div>   
                        <div className="col-12 col-md-3">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="spouse" type="text" placeholder="Spouse" name='spouse' value={spouse} onChange={onSpouseChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="kin" type="text" placeholder="Next of kin" name='kin' value={next_kin} onChange={onNextKinChange} required />
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-12">
                            <div className="form-group">
                                <input className="form-control form-control-sm" id="profile" type="file"  name='profile' value={profile} onChange={onProfileChange} />
                            </div>
                        </div> */}
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12">
                            <button className="btn btn-lg w-100 btn-outline-dark" type='submit' onClick={onRegistration}>
                            Save Changes
                            </button>
                        </div>
                    </div>
                </form>
            )
    }else{
        navigate('/profile')
    }   
    
    return (
        <>
           {form}            
        </>
    )
}

export default ProfilingForm