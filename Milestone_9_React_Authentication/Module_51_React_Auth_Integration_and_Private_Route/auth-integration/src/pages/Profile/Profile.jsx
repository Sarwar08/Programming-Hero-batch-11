import React, { use } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Profile = () => {

  const {user} = use(AuthContext);

  return (
    <div>
        <h2>This is profile page.</h2>
        <p>{user.email}</p>
    </div>
  )
}

export default Profile