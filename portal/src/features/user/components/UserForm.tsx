import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { ActionFromReducer, nanoid } from '@reduxjs/toolkit'
import { createGrievance } from '../../grievance/grievanceSlice'
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectAllClients } from '../../client/clientSlice'
import { selectAllGrievers } from '../../griever/grieverSlice'
import { login, checkAuthenticated, loadUser, registerUser } from '../userSlice'
import { useNavigate, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../../app/store'


const clients = [{'id': 1, 'name':"Complaint"}, {'id': 2, 'name':"Refund"}, {'id': 3, 'name':"Theft"}]
const natures = [{'id': 1, 'name':"Complaint"}, {'id': 2, 'name':"Refund"}, {'id': 3, 'name':"Theft"}]
const severities = [{'id': 1, 'name':"Low"}, {'id': 2, 'name':"Medium"}, {'id': 3, 'name':"High"}]

// interface Props {
//     login: any,
//     authenticated: any
// }

const LoginForm = (props: any) => {
    // define local state
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [re_password, setRePassword] = useState('')
    
    // declare hooks
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // selectors
    const canSave = Boolean(email) && Boolean(password)
    
    // handle on change functions
    const onUsernameChange = (e: any) => setUsername(e.target.value)
    const onEmailChange = (e: any) => setEmail(e.target.value)
    const onPasswordChange = (e: any) => setPassword(e.target.value)
    const onRePasswordChange = (e: any) => setRePassword(e.target.value)

    // submit form
    const onRegister = (e: any) => {
        e.preventDefault()
        if (username && email && password && re_password ){

            dispatch(registerUser({username, email, password, re_password}))
            
            setUsername('')
            setEmail('')
            setPassword('')
            setRePassword('')
            navigate('/confirmation')
        
        }

    }

    if (props.isAuthenticated) {
        return <Navigate to='/home' />
    }

    
    return (
        <>
            <form style={{paddingTop:0.5 + 'em', width:80 + "%", marginLeft: 12 + '%'}} >
                <div className="row">

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            
                            <input className="form-control form-control-sm" id="username" type="username" placeholder="username" name='username' value={username} onChange={onUsernameChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                            
                            <input className="form-control form-control-sm" id="email" type="email" placeholder="email" name='email' value={email} onChange={onEmailChange} required />
                        </div>
                    </div>

                    <div className="col-12 col-md-12">
                        <div className="form-group">
                           
                            <input className="form-control form-control-sm" id="password" type="password" placeholder="Password" name='password' value={password} onChange={onPasswordChange} required />
                        </div>
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="form-group">
                           
                            <input className="form-control form-control-sm" id="re_password" type="password" placeholder="Repeat Password" name='re_password' value={re_password} onChange={onRePasswordChange} required />
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-link" onClick={onRegister}>Register</button>
                    </div>
                </div>
            </form>
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {checkAuthenticated, login})(LoginForm)