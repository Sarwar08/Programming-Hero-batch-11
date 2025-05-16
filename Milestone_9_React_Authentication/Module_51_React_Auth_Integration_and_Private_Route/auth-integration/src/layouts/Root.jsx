import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { AuthContext } from '../contexts/AuthContext'
import AuthProvider from '../contexts/AuthProvider'


const Root = () => {
  return (
    <div className='md:w-11/12 mx-auto md:p-4'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root