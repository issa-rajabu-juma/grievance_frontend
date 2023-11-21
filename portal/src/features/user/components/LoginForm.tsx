import { useState } from 'react'
import { useAppDispatch } from "../../../app/hooks"
import { fetchClients } from '../../client/clientSlice'
import { fetchGrievers } from '../../griever/grieverSlice'
import { login, checkAuthenticated, loadUser } from '../userSlice'
import { useNavigate, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { RootState } from '../../../app/store'
import { fetchNatures } from '../../nature/natureSlice'
import { fetchSeverities } from '../../severity/severitySlice'



const LoginForm = (props: any) => {
    // define local state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // handle on change functions
    const onEmailChange = (e: any) => setEmail(e.target.value)
    const onPasswordChange = (e: any) => setPassword(e.target.value)

    // Other variables
    const canSave = Boolean(email) && Boolean(password)

    // declare hooks
    const dispatch = useAppDispatch()

    // submit form
    const onLogin = async (e: any) => {
        e.preventDefault()
      
        if (email && password){
            await dispatch(login({email, password}))
            .then(() => dispatch(loadUser()))
            .then(() => dispatch(checkAuthenticated()))
            .then(() => dispatch(fetchGrievers()))
            .then(() => {
                setEmail('')
                setPassword('')
               
            })
        }
    }

    if (props.isAuthenticated) {
        const url = sessionStorage.getItem('current_location')
        console.log(url)
         if (url) {
            return <Navigate to={url} />
        }else{
            return <Navigate to='/home' />
        }
    }

    return (
        <>
            <form style={{paddingTop:0.5 + 'em', width:80 + "%", marginLeft: 12 + '%'}} >
                <div className="row">

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
                    <div className="col-12 text-center">
                        <button className="btn btn-link" onClick={onLogin}>Login</button>
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