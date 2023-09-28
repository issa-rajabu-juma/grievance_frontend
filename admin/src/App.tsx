import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Client from "./pages/manager/client/Client"
import Griever from "./pages/griever/Griever"
import Grievance from "./pages/grievance/Grievance"
import Meeting from "./pages/meeting/Meeting"
import Manager from "./pages/manager/Manager"
import Report from "./pages/report/Report"
import GrieverList from "./pages/griever/GrieverList"
import GrievanceList from "./pages/grievance/GrievanceList"
import ClientList from "./pages/manager/client/ClientList"
import UserList from "./pages/manager/user/UserList"
import WorkforceList from "./pages/manager/workforce/WorkforceList"
import TeamList from "./pages/manager/team/TeamList"
import CommitteeList from "./pages/manager/committee/CommitteeList"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="client" element={<Client />} />
              <Route path="clients" element={<ClientList />} />
              <Route path="griever" element={<Griever />} />
              <Route path="grievers" element={<GrieverList />} />
              <Route path="grievance" element={<Grievance />} />
              <Route path="grievances" element={<GrievanceList />} />
              <Route path="users" element={<UserList />} />
              <Route path="workforces" element={<WorkforceList />} />
              <Route path="teams" element={<TeamList />} />
              <Route path="grievances" element={<GrievanceList />} />
              <Route path="grievances" element={<GrievanceList />} />
              <Route path="committees" element={<CommitteeList />} />
              <Route path="meeting" element={<Meeting />} />
              <Route path="manager" element={<Manager />} />
              <Route path="report" element={<Report />} />
              {/* <Route path="report" element={<Dashboard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
