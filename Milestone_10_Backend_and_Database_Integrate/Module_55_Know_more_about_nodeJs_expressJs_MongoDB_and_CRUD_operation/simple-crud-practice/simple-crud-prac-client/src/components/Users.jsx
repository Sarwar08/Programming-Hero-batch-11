import React from 'react'
import { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';

const usersPromise = fetch('http://localhost:5000/users').then(res => res.json());

const Users = () => {

    const initialUsers = use(usersPromise);

    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const newUser = { name, email };
        console.log(newUser);

        // create user on db
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
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users, newUser];
                    alert('Successfully created');
                    setUsers(newUsers);
                    e.target.reset();
                }
            })
    }

    const handleDeleteUser = (id) => {
        console.log(id);

        // delete user from db
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log('after delete', data);
                // remove from UI
                if(data.deletedCount){
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            })

    }

    return (
        <div>

            {/* create user */}
            <div className='my-5'>
                <form onSubmit={handleAddUser} className='flex flex-col max-w-sm mx-auto gap-3 justify-center items-center'>
                    <div>
                        <label className='' htmlFor=""> Name </label>
                        <input className='border m-1' type="text" name='name' />
                    </div>

                    <div>
                        <label htmlFor=""> Email </label>
                        <input className='border ml-1' type="email" name='email' />
                    </div>

                    <div>
                        <input className='btn btn-sm btn-info' type="submit" value='Add User' />
                    </div>
                </form>
            </div>

            <div className='border-b-4 border-dashed w-11/12 mx-auto my-3'></div>

            {/* show users */}
            <div className='w-11/12 mx-auto mt-8'>
                <h2 className='text-2xl font-semibold text-center'>No of all users: {users.length} </h2>
                <div className='space-y-3'>
                    {
                        users.map(user => (
                            <p
                                className=''
                                key={user._id}
                            >
                                <span className=''>{user.name}</span>
                                <Link to={`/update/${user._id}`} className='btn btn-sm btn-warning ml-2'>Update User</Link>
                                <button onClick={() => handleDeleteUser(user._id)} className='btn btn-sm btn-error ml-2'>delete</button>
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Users