import React from 'react'
import { Link } from 'react-router-dom'

const RightNav = () => {
  return (
    <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
            <Link className="list-group-item list-group-item-action dropend-toggle active" to='/new'>Create New</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle " to='/open'>All Open</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle " to='/ongoing'> Ongoing Grievances</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle " to='/closure'> Closed Grievances</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle " to='/faq'> Frequently Asked Questions</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle" to='/'>Leave</Link>
        </div>
    </nav>
  )
}

export default RightNav