import React, { useState } from 'react'
import Link from './Link'
import { Menu, X } from 'lucide-react'

const navData = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className='flex justify-between items-center mx-10 mt-4 bg-amber-600 px-4 py-4 rounded-lg text-xl' onClick={() => setOpen(!open)}>
            <span className='flex justify-center items-center'>
            
            {open ? <X className='md:hidden' /> : <Menu className='md:hidden' />}
                
                <ul className={`md:hidden absolute duration-1000 
                    ${open ? "top-19" : "-top-40"}
                    bg-amber-200 text-black -ml-16`}>
                    {links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>
            </span>
            <ul className='md:flex hidden'>
                {links}
            </ul>
            <button>Sign In</button>
        </nav>
    )
}

export default NavBar
