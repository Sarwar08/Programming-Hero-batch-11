import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/phones'>Phones</Link>
    </div>
  )
}

export default Header