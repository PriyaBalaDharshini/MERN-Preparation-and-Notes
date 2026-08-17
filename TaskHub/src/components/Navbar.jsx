import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link
                to="/">TaskHub - NavBar</Link>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
            <NavLink
                to="/tasks"
                className={({ isActive }) => (isActive ? "active" : "")}>Tasks</NavLink>
            <NavLink
                to="/notes"
                className={({ isActive }) => (isActive ? "active" : "")}>Notes</NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        </nav>
    )
}

export default Navbar