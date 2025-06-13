import React from 'react'
import { useLoaderData } from 'react-router'

const UpdateUser = () => {

    const user = useLoaderData();
    console.log(user);

    const handleUpdateUser = (e) => {
        e.preventDefualt();

        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);

        const updatedUser = {name, email};

        console.log(updatedUser);

        // update user info in the db
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('after update', data);
            })
    }

    const abul = (e) => {
        e.preventDefualt();

        const name = e.target.name.value;

        console.log(name);
    }



    return (
        <div>
            <form onSubmit={abul}>
                <input type="text" name='name' defaultValue={user.name} />
                <br />
                <input type="email" name='email' defaultValue={user.email} />
                <br />
                <input type="submit" value='Update User' />
            </form>
        </div>
    )
}

export default UpdateUser