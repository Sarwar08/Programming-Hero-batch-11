import React from 'react'
import { Link, useLoaderData } from 'react-router'

const Phones = () => {

    const phones = useLoaderData();

    console.log(phones);

    return (
        <div>
            <h2>All phones here</h2>
            <h2>No of phones: {phones.length}</h2>
            <ul>
                {
                    phones.map(phone => <li key={phone.id}><Link to={`/phone/${phone.id}`}>{phone.name}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default Phones