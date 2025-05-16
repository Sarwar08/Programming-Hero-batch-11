import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const UserDetails = () => {

    const user = useLoaderData();
    // console.log(user);

    const {website, name} = user;

    const params = useParams();
    console.log(params);
    

  return (
    <div>
        <h2>User Details Page</h2>
        <h3>Name: {name}</h3>
        <p>{website}</p>
    </div>
  )
}

export default UserDetails