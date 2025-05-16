import React from 'react'
import Navbar from '../../components/Header/NavBar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  return (
    <div className='w-11/12 max-w-6xl mx-auto'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root