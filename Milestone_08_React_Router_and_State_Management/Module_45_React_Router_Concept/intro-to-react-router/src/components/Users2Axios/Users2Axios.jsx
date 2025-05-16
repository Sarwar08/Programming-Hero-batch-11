import React, { use } from 'react'

const Users2Axios = ({usersPromiseAxios}) => {

    const usersRes = use(usersPromiseAxios);
    const users = usersRes.data;
    console.log('users by axios', users);

  return (
    <div>
        <h2>This is Users from Axios</h2>
    </div>
  )
}

export default Users2Axios