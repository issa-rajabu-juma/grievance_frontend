import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Layout from "./components/Layout"
import Cover from "./pages/Cover"
import Home from "./pages/Home"
import Followup from "./pages/Followup"
import GrievanceSingle from "./pages/Single"
import NewRecord from "./pages/NewRecord"
import OpenRecord from "./pages/OpenRecord"
import OngoingRecord from "./pages/OngoingRecord"
import FaqMin from "./pages/FaqMin"
import ClosedRecord from "./pages/ClosedRecord"
import Single from "./pages/Single"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useAppDispatch } from "./app/hooks"
import { loadUser } from "./features/user/userSlice"
import Logout from "./pages/Logout"
import Confirmation from "./pages/Confirmation"
import Profile from "./pages/Profile"
import EditProfile from "./pages/EditProfile"
import { store } from "./app/store"
import { fetchNatures } from "./features/nature/natureSlice"
import { fetchSeverities } from "./features/severity/severitySlice"
import { fetchClients } from "./features/client/clientSlice"
import { fetchGrievers } from "./features/griever/grieverSlice"
import { useEffect } from "react"
import Ammendment from "./pages/Ammendment"
import Profiling from "./pages/Profiling"

function App() {

  // const state = store.getState()

  // useEffect(() => {
  //   //  if (state.auth.isAuthenticated) {
  //   //     console.log('mambo')
  //   //   }
  //   console.log(state.auth.isAuthenticated)
  
  // }, [])
  
  // if (state.auth.isAuthenticated) {
  //   console.log(first)
  // }

  // const dispatch = useAppDispatch()
  // // dispatch(fetchNatures())
  // const dispatchInit =async () => {
  //   await Promise.all([
  //     dispatch(fetchNatures()),
  //     dispatch(fetchSeverities()),
  //     dispatch(fetchClients()),
  //     dispatch(fetchGrievers()),
  //   ])
  // }

  // dispatchInit()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Cover />} />
          <Route path="/home" element={<Home />} />
          <Route path='/new' element={<NewRecord />} /> 
          <Route path='/open' element={<OpenRecord />} /> 
          <Route path='/ongoing' element={<OngoingRecord />} /> 
          <Route path='/closure' element={<ClosedRecord />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiling" element={<Profiling />} />
          <Route path="/ammendment" element={<Ammendment />} />
          <Route path="/faq" element={<FaqMin />} />
          <Route path="/single" element={<Single />} />

          {/* <Route path="/" element={<Layout />}>
            <Route path="/" element={<Cover />} />
            <Route path="home" element={<Home />} />
            <Route path='detail' element={<GrievanceSingle />} />
            <Route path='new' element={<NewRecord />} /> 
            <Route path='open' element={<OpenRecord />} /> 
            <Route path='ongoing' element={<OngoingRecord />} /> 
            <Route path='closure' element={<ClosedRecord />} /> 
            <Route path="followup" element={<Followup />} />
            <Route path="single" element={<Single />} />
            <Route path="faq" element={<FaqMin />} />
            <Route path="logout" element={<Logout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit-profile" element={<EditProfile />} />
          </Route>   */}
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
