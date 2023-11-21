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

export const checkAuthenticated = createAsyncThunk('auth/checkAuthenticated', async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (localStorage.getItem('access')) {
        const token = localStorage.getItem('access')
        const response = await axios.post('http://localhost:8000/auth/jwt/verify/', JSON.stringify({token: token}), config)
        
        if (response.data.code !== 'token_not_valid') {
            return response.data
        }
    }else {
        return 'failed'
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
            state.status = 'loading'
        })
        
        .addCase(login.fulfilled, (state, action) => {
            if (action.payload) {
                state.status = 'success'
                localStorage.setItem('access', action.payload.access)
                state.access = action.payload.access
                state.refresh = action.payload.refresh
            } else {
                state.status = 'idle'
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                sessionStorage.removeItem('authenticated') 
                localStorage.removeItem('isAuthenticated')
                state.access = null
                state.refresh = null
                state.isAuthenticated = false
                state.user = {}
            }
           
        })
         .addCase(login.rejected, (state, action) => {
            state.status = 'idle'
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            sessionStorage.removeItem('authenticated') 
            localStorage.removeItem('isAuthenticated')
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
            state.user = {}
        })
        .addCase(loadUser.pending, (state, action) => {
            state.status = 'loading '
        })
        .addCase(loadUser.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload
        })
        .addCase(loadUser.rejected, (state, action) => {
            state.status = 'idle'
            state.user = {}
        })
        .addCase(checkAuthenticated.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(checkAuthenticated.fulfilled, (state, action) => {
            console.log(action.payload)
            if (action.payload !== 'failed') {
                state.status = 'success'
                state.isAuthenticated = true
                sessionStorage.setItem('authenticated', 'true')
            } else {
                state.status = 'idle'
                state.isAuthenticated = false
            }
          
        })
        .addCase(checkAuthenticated.rejected, (state, action) => {
            state.status = 'idle'
            state.isAuthenticated = false
        })
        .addCase(registerUser.pending, (state, action) => {
            state.status = 'loading'
        })
       .addCase(registerUser.fulfilled, (state, action) => {
            state.status = 'success'
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.status = 'idle'
        })
        
        
        .addCase(logout.pending, (state, action) => {
            state.status = 'loading'
            state.isAuthenticated = false
            
        })
        .addCase(logout.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = 'idle'

            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            sessionStorage.removeItem('authenticated')
            
            state.access = null
            state.refresh = null
            state.isAuthenticated = false
            state.user = {}
        })
        .addCase(logout.rejected, (state, action) => {
            if (action.payload === undefined) {
                state.status = 'idle'
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
                sessionStorage.removeItem('authenticated')
                
                state.access = null
                state.refresh = null
                state.isAuthenticated = false
                state.user = {}
                
            } else {
                state.status = 'idle'
            }

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