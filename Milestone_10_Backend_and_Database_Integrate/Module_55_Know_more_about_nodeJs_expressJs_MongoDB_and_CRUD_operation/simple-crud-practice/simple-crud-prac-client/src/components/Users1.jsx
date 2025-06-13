import React, { use, useState } from 'react'

const usersPromise = fetch('http://localhost:5000/users').then(res => res.json());

const Users = () => {

    const initialUsers = use(usersPromise);
    console.log(initialUsers);

    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const newUser = { name, email };
        console.log(newUser);

        // create user in db
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('after db', data);
                if(data.insertedId){
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    setUsers(newUsers);
                    alert('User created successfully');
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <div>
            {/* add user */}
            <form onSubmit={handleAddUser}>
                <label>Name </label>
                <input type="text" name='name' />

                <br />

                <label htmlFor="">Email </label>
                <input type="email" name='email' />

                <br />

                <input type="submit" value='Add User' />
            </form>
        </div>
        <div>
            {/* Show Users */}
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email}</p>)
                }
            </div>
        </div>
        </div>
    )
}

export default Users