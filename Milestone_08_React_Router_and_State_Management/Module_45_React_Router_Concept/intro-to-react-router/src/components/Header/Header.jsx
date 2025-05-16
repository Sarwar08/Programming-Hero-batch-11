import React from 'react'
import { Link, NavLink } from 'react-router'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <h3>This is Header</h3>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mobiles">Mobiles</NavLink>
            <NavLink to="/Laptops">Laptops</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/users2sus">Users2Suspense</NavLink>
            <NavLink to="/users2axios">Users2Axios</NavLink>


            <NavLink to="/about">AboutUs</NavLink>
            <NavLink to="/about/history">History</NavLink>
        </nav>
    </div>
  )
}

export default Header