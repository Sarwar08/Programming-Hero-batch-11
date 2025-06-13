import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.init';
import { deleteUser } from 'firebase/auth';

const Users = () => {

    const initialUsers = useLoaderData();

    const [users, setUsers] = useState(initialUsers);


    const handleDelete = (id) => {
        console.log('delete this user', id);

        // delete userinfo
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete from firebase
                deleteUser(auth.currentUser)
                    .then(() => {
                        console.log('User delete ');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })

                // from db
                fetch(`http://localhost:3000/users/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after delete', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers);

                        }
                    })

            }
        });
    }

    return (
        <div className=''>
            <h2 className='text-2xl text-center my-8'>All users: {users.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-2xl'>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={user._id} className='text-2xl'>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={user.photo}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">{user.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {user.phone}
                                        </td>
                                        <td>Purple</td>
                                        <th className='space-x-1'>
                                            <Link><button className="btn bg-green-600 text-2xl">details</button></Link>
                                            <Link><button className="btn bg-yellow-600 text-2xl">Edit</button></Link>
                                            <Link onClick={() => handleDelete(user._id)}><button className="btn bg-red-600 text-2xl">x</button></Link>
                                        </th>
                                    </tr>
                                ))
                            }

                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users