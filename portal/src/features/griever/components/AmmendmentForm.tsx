import React, { useEffect, useMemo, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import  registerGriever, { fetchGrievers, newGriever, selectAllGrievers, updateGriever } from '../grieverSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
// import { registerUser } from '../userSlice'
import { useNavigate, Link } from 'react-router-dom'
import { checkAuthenticated, loadUser, selectLoggedinUser } from '../../user/userSlice'
import { getGriever, getItemByUID, getSingleItem } from '../../../app/helpers'


const AmmendmentForm = (props: any) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
     
    const grievers = props.data.grievers
    const user = props.data.user
    const grieversList = Object.keys(grievers)
    var griever: any
    var grv: any
    var form: any

    if (grieversList.length > 0 ) {
        griever = getItemByUID(grievers, user.id)[0]
        grv = getItemByUID(grievers, user.id)

    }

    const [updateFormData, setUpdateFormData] = useState({...griever})
    const onUpdateChange = (e: any) => setUpdateFormData({...updateFormData, [e.target.name]: e.target.value})

    if (grieversList.length > 0 ) {
        const onUpdate = (e: any) => {
            e.preventDefault()
           if (griever.user === user.id) {
                // update
                 dispatch(updateGriever({
                    griever_id: updateFormData.griever_id,
                    anonymous: 0,
                    f_name: updateFormData.f_name,
                    l_name: updateFormData.l_name,
                    m_name: updateFormData.m_name,
                    gender: updateFormData.gender,
                    age: updateFormData.age,
                    mobile_no: updateFormData.mobile_no,
                    email: updateFormData.email,
                    postal_address: updateFormData.postal_address,
                    street: updateFormData.street,
                    ward: updateFormData.ward,
                    district: updateFormData.district,
                    region: updateFormData.region,
                    marital_status: updateFormData.marital_status,
                    spouse: updateFormData.spouse,
                    next_kin: updateFormData.next_kin,
                    user: updateFormData.user
                }, griever.griever_id))

                    setUpdateFormData({})
                                
                navigate('/profile')
            }
        }

        if (grv.length === 1) {
            form = grv.map((g: any) => (
                <form style={{paddingTop:0.5 + 'em', width:100 + "%", marginLeft: 0 + '%'}} key={griever.griever_id}>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="fname">
                                    First Name
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="fname" type="text" placeholder="First name" name='f_name' value={updateFormData.f_name} onChange={onUpdateChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="mname">
                                    Middle Name
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="mname" type="text" placeholder="Middle name" name='m_name' value={updateFormData.m_name} onChange={onUpdateChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label htmlFor="lname">
                                    Last Name
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="lname" type="text" placeholder="Last name" name='l_name' value={updateFormData.l_name} onChange={onUpdateChange} required />
                            </div>
                        </div> 
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="">
                                    Gender
                                </label>
                                <select className="form-select form-control-underline" >
                                    <option defaultValue=''></option>
                                    <option defaultValue="1">Male</option>
                                    <option defaultValue="2">Female</option>
                                    <option defaultValue="3">Other</option>
                                </select>
                            </div>
                        </div> 
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="age">
                                    Age
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="age" type="text" placeholder="Age" name='age' value={updateFormData.age}onChange={onUpdateChange} required />
                            </div>
                        </div>  
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="spouse">
                                    Marital Status
                                </label>
                                <select className="form-select form-control-underline">
                                    <option defaultValue=''></option>
                                    <option defaultValue="1">Single</option>
                                    <option defaultValue="2">Mariaged</option>
                                    <option defaultValue="3">Devoced</option>
                                    <option defaultValue="3">Widow</option>
                                </select>
                            </div>
                        </div> 
                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="spouse">
                                    Spouse
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="spouse" type="text" placeholder="Spouse" name='spouse' value={updateFormData.spouse} onChange={onUpdateChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            <div className="form-group">
                                <label htmlFor="kin">
                                    Next Kin
                                </label>
                                <input className="form-control form-control-sm form-control-underline" id="kin" type="text" placeholder="Next of kin" name='kin' value={updateFormData.next_kin} onChange={onUpdateChange} required />
                            </div>
                        </div>
                        <div className="col-12 col-lg-12">
                            <div className="form-group">
                                <a className="text-body collapsed dropdown-toggle" data-bs-toggle="collapse" href="#collapseFilter" role="button" aria-expanded="false" style={{fontWeight: 800}}>Contact Info</a>
                                <div className="row gx-5 collapse mt-3" id="collapseFilter">
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="region">
                                                Region
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="region" type="text" placeholder="Region" name='region' value={updateFormData.region} onChange={onUpdateChange} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="district">
                                                District
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="district" type="text" placeholder="District" name='district' value={updateFormData.district} onChange={onUpdateChange} required />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="ward">
                                                Ward
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="ward" type="text" placeholder="Ward" name='ward' value={updateFormData.ward} onChange={onUpdateChange} required />
                                        </div>
                                    </div>  
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="street">
                                                Street
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="street" type="text" placeholder="Street" name='street' value={updateFormData.street} onChange={onUpdateChange} required />
                                        </div>
                                    </div> 
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="mobile">
                                                Mobile Number
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="mobile" type="text" placeholder="Mobile No" name='mobile_no' value={updateFormData.mobile_no} onChange={onUpdateChange} required />
                                        </div>
                                    </div> 
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="email" type="email" placeholder="" name="email"  value={updateFormData.email} onChange={onUpdateChange} />
                                        </div>
                                    </div>  
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="postal_address">
                                                Postal Address
                                            </label>
                                            <input className="form-control form-control-sm form-control-underline" id="postal_address" type="text" placeholder="" name="postal_address"  value={updateFormData.postal_address} onChange={onUpdateChange} />
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 text-center">
                            <button className="btn btn-lg  btn-dark" type='submit' onClick={onUpdate}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            ))
        }
    }
    
    return (
        <>
           {form}            
        </>
    )
}

export default AmmendmentForm