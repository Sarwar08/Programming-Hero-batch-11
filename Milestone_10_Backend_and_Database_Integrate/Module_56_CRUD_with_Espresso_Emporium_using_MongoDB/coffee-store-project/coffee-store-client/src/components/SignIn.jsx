import React from 'react'
import { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {

    const { userSignIn } = use(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        console.log(email, password);

        // sigining in
        userSignIn(email, password)
            .then(result => {
                console.log(result.user);

                const signInInfo = {
                    email,
                    lastSignInTime : result?.user?.metadata?.lastSignInTime,
                }

                // update last sign in to db
                fetch('http://localhost:3000/users',{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(signInInfo),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('after update', data);
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='p-24'>
            <form onSubmit={handleSignIn} className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-8 text-2xl mx-auto space-y-3">
                <legend className="text-3xl font-bold text-center">Sign Up</legend>

                <div>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                </div>
                <div>
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                </div>

                <button type='submit' className="btn btn-neutral mt-4">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn