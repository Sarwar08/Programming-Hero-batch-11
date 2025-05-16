import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router'

const About = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default About