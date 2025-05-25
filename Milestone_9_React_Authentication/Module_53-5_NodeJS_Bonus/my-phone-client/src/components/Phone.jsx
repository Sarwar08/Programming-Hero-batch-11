import React from 'react'
import { useLoaderData } from 'react-router'

const Phone = () => {

    const phone = useLoaderData();

    console.log(phone);

    const {name, image, description} = phone;

  return (
    <div>
        <h2>{name}</h2>
        <img src={image} alt="" />
        <p>{description}</p>
    </div>
  )
}

export default Phone