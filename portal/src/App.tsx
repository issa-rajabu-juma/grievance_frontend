import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Grievance from "./pages/Grievance"
import Followup from "./pages/Followup"
import Faq from "./pages/Faq"
import Closed from "./pages/Closed"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="grievance" element={<Grievance />} />
            <Route path="followup" element={<Followup />} />
            <Route path="faq" element={<Faq />} />
            <Route path="closed" element={<Closed />} />
          </Route>  
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
