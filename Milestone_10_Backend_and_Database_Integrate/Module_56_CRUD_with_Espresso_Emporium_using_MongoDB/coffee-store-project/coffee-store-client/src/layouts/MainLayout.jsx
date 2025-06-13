import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div>
            <div className='md:w-11/12 max-w-7xl mx-auto sticky top-0 bg-amber-950 z-50'>
                <Header />
            </div>
            <div className='md:w-11/12 max-w-7xl mx-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout