import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import grievanceReducer from "../features/grievance/grievanceSlice"
import clientReducer from "../features/client/clientSlice"
import grieverReducer from "../features/griever/grieverSlice"
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    grievances: grievanceReducer,
    clients: clientReducer,
    grievers: grieverReducer,
    user: userReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
