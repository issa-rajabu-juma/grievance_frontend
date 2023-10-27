// IMPORTS
import { PayloadAction, createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import { useAppDispatch } from '../../app/hooks'

// INITIAL STATE
const initialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle',
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
}

// LOGICS
export const login = createAsyncThunk('user/login', async (data:any) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/auth/jwt/create/', JSON.stringify(data), config)
    return response.data
})

export const logout = createAsyncThunk('user/logout', async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post('http://localhost:8000/auth/user/logout/', config)
    return response.data
})

export const checkAuthenticated = createAsyncThunk('user/authenticated', async () => {
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

export const loadUser = createAsyncThunk('user/loadUser', async () => {
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
    name: 'User',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(login.pending, (state, action) => {
            state.status = 'login loading'
        })
        .addCase(loadUser.pending, (state, action) => {
            state.status = 'user loading '
        })
         .addCase(checkAuthenticated.pending, (state, action) => {
            state.status = 'authenticating'
        })
        .addCase(login.fulfilled, (state, action) => {
            state.status = 'login success'
            localStorage.setItem('access', action.payload.access)
            state.access = action.payload.access
            state.refresh = action.payload.refresh
        })
        
        .addCase(loadUser.fulfilled, (state, action) => {
            state.status = 'user loaded'
            state.user = action.payload
        })
        .addCase(checkAuthenticated.fulfilled, (state, action) => {
            state.status = 'authenticated'
            state.isAuthenticated = true
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'idle'
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
        })
        .addCase(loadUser.rejected, (state, action) => {
            state.status = 'user failed'
            state.user = null
        })
        .addCase(checkAuthenticated.rejected, (state, action) => {
            state.status = 'not authenticated'
            state.isAuthenticated = false
        })
        .addCase(logout.pending, (state, action) => {
            state.status = 'logging out'
            state.isAuthenticated = false
            
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.status = 'idle'
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
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
export const selectLoggedinUser = (state: RootState) => state.user

// reducer
export default userSlice.reducer