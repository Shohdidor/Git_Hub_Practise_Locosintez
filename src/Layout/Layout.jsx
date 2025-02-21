import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
    let { pathname } = useLocation ()
  return (
    <div>
        <ul>
            <Link to="/">
            <li>
                Home
            </li>
            </Link>
            <Link to="/about">
            <li>
                About
            </li>
            </Link>
            <Link to="/contact">
            <li>
                Contact
            </li>
            </Link>
        </ul>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout