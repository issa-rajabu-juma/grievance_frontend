import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    
    <div className="topnav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="topnav-menu-content">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link arrow-none" to="/dashboard" id="topnav-dashboards">
                                        <i className="uil-dashboard"></i>Dashboard 
                                    </NavLink>
                                    
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-apps" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="uil-apps"></i>Grievers <div className="arrow-down"></div>
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="topnav-apps">
                                        <Link to="/" className="dropdown-item">Overview</Link>
                                        <Link to="/" className="dropdown-item">New griever</Link>
                                        <Link to="/grievers" className="dropdown-item">Grievers</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-pages" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="uil-copy-alt"></i>Grievance <div className="arrow-down"></div>
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="topnav-pages">
                                        <Link to="/" className="dropdown-item">Overview</Link>
                                        <Link to="/" className="dropdown-item">New grievance</Link>
                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Tracker <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/grievances" className="dropdown-item">Open grievances</Link>
                                                <Link to="/grievances" className="dropdown-item">Grievances to attend</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </li>
                                
                                <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-layouts" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="uil-window"></i>Meetings <div className="arrow-down"></div>
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layouts">
                                        <Link to="/" className="dropdown-item" >Overview</Link>
                                        <Link to="/" className="dropdown-item" >New meeting</Link>
                                        <Link to="/" className="dropdown-item" >Meeting calenda</Link>
                                    </div>
                                </li>
                                 <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-layouts" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="uil-window"></i>Reports <div className="arrow-down"></div>
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layouts">
                                        <Link to="/" className="dropdown-item" >Analytical reports</Link>
                                        <Link to="/" className="dropdown-item" >Standard reports</Link>
                                        <Link to="/" className="dropdown-item" >Complex reports</Link>
                                    </div>
                                </li>

                                 <li className="nav-item dropdown">
                                    <NavLink className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-layouts" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="uil-window"></i>Manager <div className="arrow-down"></div>
                                    </NavLink>
                                    <div className="dropdown-menu" aria-labelledby="topnav-layouts">

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                User <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/" className="dropdown-item">Overview</Link>
                                                <Link to="/" className="dropdown-item">New user</Link>
                                                <Link to="/users" className="dropdown-item">User list</Link>
                                                <Link to="/" className="dropdown-item">Roles</Link>
                                                <Link to="/" className="dropdown-item">Permissions</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Client <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/" className="dropdown-item">Overview</Link>
                                                <Link to="/" className="dropdown-item">New client</Link>
                                                <Link to="/clients" className="dropdown-item">Client list</Link>
                                               
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Workforce <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/" className="dropdown-item">Overview</Link>
                                                <Link to="/" className="dropdown-item">New workforce</Link>
                                                <Link to="/workforces" className="dropdown-item">Workforce list</Link>
                                                
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Committee <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/" className="dropdown-item">Overview</Link>
                                                <Link to="/" className="dropdown-item">New committee</Link>
                                                <Link to="/committees" className="dropdown-item">Committee list</Link>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <Link className="dropdown-item dropdown-toggle arrow-none" to="#" id="topnav-auth" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Team <div className="arrow-down"></div>
                                            </Link>
                                            <div className="dropdown-menu" aria-labelledby="topnav-auth">
                                                <Link to="/" className="dropdown-item">Overview</Link>
                                                <Link to="/" className="dropdown-item">New team</Link>
                                                <Link to="/teams" className="dropdown-item">Team list</Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    
    </>
  )
}

export default NavBar