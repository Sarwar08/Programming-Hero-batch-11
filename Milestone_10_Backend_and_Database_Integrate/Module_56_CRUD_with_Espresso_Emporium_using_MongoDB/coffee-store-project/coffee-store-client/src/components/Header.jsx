import React from 'react'
import { Link, NavLink } from 'react-router'

const Header = () => {

    return (
        <nav className='flex justify-between items-center border-b border-yellow-900 shadow shadow-amber-700 px-4 py-2'>
            <div className=''>
                <h1 className='text-4xl text-amber-500 '>Coffee Store</h1>
            </div>
            <div className='space-x-5 text-2xl'>
                <NavLink to='/' className=''>Home</NavLink>
                <NavLink to='/addCoffee' >Add New Coffee</NavLink>
                <NavLink to='/users'> Users </NavLink>
            </div>
            <div className='space-x-2'>
                <Link to='/signup' className='text-2xl text-amber-200' >Sign Up</Link>
                <Link to='/signin' className='text-2xl text-amber-200' >Sign In</Link>
            </div>
        </nav>
    )
}

export default Header