// IMPORTS
import { PayloadAction, createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import { useAppDispatch } from '../../app/hooks'

// INITIAL STATE
const initialState = {
    user: {},
    isAuthenticated: false,
    status: 'idle',
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
}

// LOGICS
export const registerUser = createAsyncThunk('auth/registerUser', async (data:any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/auth/users/', JSON.stringify(data), config)
    return response.data
})


export const login = createAsyncThunk('auth/login', async (data:any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/auth/jwt/create/', JSON.stringify(data), config)
    return response.data
})

export const logout = createAsyncThunk('auth/logout', async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/auth/user/logout/', config)
    return response.data
})

export const checkAuthenticated = createAsyncThunk('auth/authenticated', async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (localStorage.getItem('access')) {
        console.log(localStorage.getItem('access'))
        const token = localStorage.getItem('access')
        const response = await axios.post('http://localhost:8000/auth/jwt/verify/', JSON.stringify({token: token}), config)
        
        if (response.data.code !== 'token_not_valid') {
            return response.data
        }
    }
   
})

export const loadUser = createAsyncThunk('auth/loadUser', async () => {
    if (localStorage.getItem('access')) {
         const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        const response = await axios.get('http://localhost:8000/auth/users/me/', config)
        return response.data
    }
})

// SLICE
export const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(login.pending, (state, action) => {
            state.status = 'login loading'
        })
        
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'login success'
            localStorage.setItem('access', action.payload.access)
            state.access = action.payload.access
            state.refresh = action.payload.refresh
        })
         .addCase(login.rejected, (state, action) => {
            state.status = 'idle'
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('authenticated')
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
            state.user = {}
        })
        .addCase(loadUser.pending, (state, action) => {
            state.status = 'user loading '
        })
         
        
        .addCase(loadUser.fulfilled, (state, action) => {
            state.status = 'user loaded'
            state.user = action.payload
            console.log(state.user)
        })
        .addCase(loadUser.rejected, (state, action) => {
            state.status = 'user failed'
            state.user = {}
        })
        .addCase(checkAuthenticated.pending, (state, action) => {
            state.status = 'authenticating'
        })
        .addCase(checkAuthenticated.fulfilled, (state, action) => {
            state.status = 'authenticated'
            state.isAuthenticated = true
             localStorage.setItem('authenticated', 'true')
            // console.log(action.payload)
        })
        .addCase(checkAuthenticated.rejected, (state, action) => {
            state.status = 'not authenticated'
            state.isAuthenticated = false
        })
        .addCase(registerUser.pending, (state, action) => {
            state.status = 'User Registration Pending'
        })
       .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'User Registered Successfully'
            // state.user = action.payload
            console.log(action.payload)
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = 'User Registration Failed'
        })
        
        
        .addCase(logout.pending, (state, action) => {
            state.status = 'logging out'
            state.isAuthenticated = false
            
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.status = 'idle'
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            localStorage.removeItem('authenticated')
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
            state.user = {}
        })
        .addCase(logout.rejected, (state, action) => {
            state.status = 'logout failed'
        })
    }
})

// EXPORTS
// actions
// export const { registerUser, loginUser } = userSlice.actions

// selectors
export const selectLoggedinUser = (state: RootState) => state.auth.user

// reducer
export default userSlice.reducer