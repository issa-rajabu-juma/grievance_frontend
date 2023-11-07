import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { checkAuthenticated, logout } from "../../../user/userSlice";
import { useAppDispatch } from '../../../../app/hooks';

function classNames(...args: any[]) {
  return args.filter(Boolean).join(' ')
}



const RightNav = (props: any) => {
    const dispatch = useAppDispatch()


    //  const loggout = (e: any) => {
    //     dispatch(logout())
    //     // if (true) {
    //     //   return <Navigate to='/login' />
    //     // }

    // }
  return (
    <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
           
            <Link className={classNames("list-group-item", "list-group-item-action", "dropend-toggle", props['title'] === 'Create New' && 'active')} to='/new'>Grieve</Link>
            <Link className={classNames("list-group-item", "list-group-item-action", "dropend-toggle", props['title'] === 'Open' && 'active')} to='/open'>All Open</Link>
            <Link className={classNames("list-group-item", "list-group-item-action", "dropend-toggle", props['title'] === 'Ongoing' && 'active')} to='/ongoing'> Ongoing Grievances</Link>
            <Link className={classNames("list-group-item", "list-group-item-action", "dropend-toggle", props['title'] === 'Closure' && 'active')} to='/closure'> Closed Grievances</Link>
            <Link className={classNames("list-group-item", "list-group-item-action", "dropend-toggle", props['title'] === 'Faq' && 'active')} to='/faq'> Frequently Asked Questions</Link>
            <Link className="list-group-item list-group-item-action dropend-toggle" to='/logout'>Logout</Link>
        </div>
    </nav>
  )
}

export default RightNav