import React, { use } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out successfully.');
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>Item 3</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <RxHamburgerMenu size={20} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Career Code</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <p>{user?.email}</p>
                            <button onClick={handleSignOut} className="btn">Sign Out</button>
                        </>
                        :
                        <>
                            <NavLink to='/register' className="btn">Register</NavLink>
                            <NavLink to='/signin' className="btn">Sign In</NavLink>
                        </>
                }
            </div>
        </div>
    )
}

export default Navbar