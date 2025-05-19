import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthContext'

const Register = () => {

    const [nameError, setNameError] = useState('');

    const { createUser, setUser, updateUser } = use(AuthContext);

    const navigate = useNavigate();


    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;

        if (name.length < 5) {
            setNameError('Name should be more than 5 character');
        }
        else {
            setNameError('');
        }

        const photo = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(result.user);
                updateUser({ dislayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user, dislayName: name, photoURL: photo});
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error);
                        setUser(user);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-8'>Register Your Accout</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name="name" className="input" placeholder="Your Name" required />

                        {nameError && <p className='text-error text-xs'>{nameError}</p>}

                        {/* photoURL */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoURL' className="input" placeholder="Photo URL" />

                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already have an account? Please <Link to='/auth/login' className='text-secondary border-b'>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register