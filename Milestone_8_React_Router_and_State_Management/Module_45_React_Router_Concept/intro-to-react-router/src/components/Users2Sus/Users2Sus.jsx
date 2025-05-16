import React, { use } from 'react'

const Users2Sus = ({UsersPromiseforSus}) => {

    const users = use(UsersPromiseforSus);
    console.log("data from suspense", users);

  return (
    <div>
        <h2>This is user by Suspense</h2>
    </div>
  )
}

export default Users2Sus