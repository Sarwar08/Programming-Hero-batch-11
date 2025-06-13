import React, { use, useState } from 'react'

// const usersPromise = fetch('http://localhost:3000/users').then(res => res.json());

const Users = ({usersPromise}) => {

    const initialUsers = use(usersPromise);

    const [users, setUsers] = useState(initialUsers);


    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email };

        console.log(user);

        // create user in the server
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log('data after post', data);
                const newUsers = [...users, data];
                setUsers(newUsers);
                e.target.reset();
            })
    }

    return (
        <div>
            <h2>No of Users: {users.length}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value='add user' />

            </form>
            <div>
                {
                    users?.map(user => <p key={user.id}>{user.name}: {user.email}</p>)
                }
            </div>
        </div>
    )
}

export default Users