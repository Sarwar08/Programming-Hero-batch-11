import React from 'react'
import { useLoaderData } from 'react-router'

const UpdateUser = () => {

    const user = useLoaderData();
    console.log(user);

    const handleUpdataUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email  = e.target.email.value;

        const updatedUser = {name, email}
        console.log(updatedUser);

        // Update User
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log('after update', data);
                if (data.modifiedCount){
                    console.log('Update Successful');
                }
            })
    }

  return (
    <div>
        <h2 className='text-3xl font-semibold text-center'>Update User</h2>
        <div className='my-5'>
                <form onSubmit={handleUpdataUser} className='flex flex-col max-w-sm mx-auto gap-3 justify-center items-center'>
                    <div>
                        <label className='' htmlFor=""> Name </label>
                        <input className='border m-1' type="text" name='name' defaultValue={user.name} />
                    </div>

                    <div>
                        <label htmlFor=""> Email </label>
                        <input className='border ml-1' type="email" name='email' defaultValue={user.email} />
                    </div>

                    <div>
                        <input className='btn btn-sm btn-info' type="submit" value='Update User' />
                    </div>
                </form>
            </div>
    </div>
  )
}

export default UpdateUser