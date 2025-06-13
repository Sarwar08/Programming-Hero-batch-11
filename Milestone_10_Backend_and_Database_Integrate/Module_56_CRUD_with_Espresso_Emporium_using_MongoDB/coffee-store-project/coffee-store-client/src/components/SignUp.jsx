import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // rest form data
                const userProfile = {
                    ...restFormData,
                    email,
                    creationTime: result?.user?.metadata?.creationTime,
                    lastSignInTime: result?.user?.metadata?.lastSignInTime,
                }

                // save profile info in the db
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userProfile),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Your profile has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className='p-24'>
            <form onSubmit={handleSignUp} className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8 text-2xl mx-auto space-y-3">
                <legend className="text-3xl font-bold text-center">Sign Up</legend>
                <div>
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input text-xl" placeholder="Name" />
                </div>
                <div>
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Address" />
                </div>
                <div>
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone Number" />
                </div>
                <div>
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                </div>
                <div>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                </div>
                <div>
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                </div>

                <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp