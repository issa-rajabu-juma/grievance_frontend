import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Cover from "./pages/Cover"
import Home from "./pages/Home"
import Followup from "./pages/Followup"
import Closed from "./pages/Closed"
import GrievanceSingle from "./pages/Single"
import NewRecord from "./pages/NewRecord"
import OpenRecord from "./pages/OpenRecord"
import OngoingRecord from "./pages/OngoingRecord"
import FaqMin from "./pages/FaqMin"
import ClosedRecord from "./pages/ClosedRecord"
import Single from "./pages/Single"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
            <Route path="closed" element={<Closed />} />
          </Route>  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
