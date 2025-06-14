import Lottie from 'lottie-react'
import React, { use } from 'react'
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from '../../contexts/AuthContext/AuthContext'
import SocialLogin from '../Shared/SocialLogin'

const Register = () => {

    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());

        console.log(email, password);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie className='w-[250px]' animationData={registerLottie} loop={true} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" defaultValue='123456' />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register