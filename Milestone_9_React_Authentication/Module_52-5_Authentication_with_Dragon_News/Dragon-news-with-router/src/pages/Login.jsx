import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../provider/AuthContext.jsx'

const Login = () => {

    const [error, setError] = useState('');

    const {loginUser} = use(AuthContext);

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(`${location.state ? location.state : '/'}`);

            })
            .catch(error => {
                setError(error.code);
                // console.log(error.message);
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center pt-8'>Login Your Accout</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        {error && <p className='text-red-400 text-xs'>{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">Login</button>

                        <p className='font-semibold text-center pt-5'>Don't have an account? Please <Link to='/auth/register' className='text-secondary border-b'>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login