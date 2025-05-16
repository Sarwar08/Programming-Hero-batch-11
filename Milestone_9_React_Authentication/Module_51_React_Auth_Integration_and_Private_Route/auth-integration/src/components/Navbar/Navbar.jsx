import React, { use } from 'react'
import { Link, NavLink } from 'react-router'
import './Navbar.css'
import { AuthContext } from '../../contexts/AuthContext'

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Signed Out Successfully.');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        {
            user && <>
                <li><NavLink to='/orders'>Orders</NavLink></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        }
    </>

    return (
        <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <span>{user.email}</span>
                        <a onClick={handleSignOut} className="btn">Sign Out</a>
                    </>
                    :
                    <Link className='btn' to="/login" >Log In</Link>}
            </div>
        </nav>
    )
}

export default Navbar