// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../contexts/AuthContext'
// import { auth } from '../../firebase.init';

const Register = () => {

    const {createUser} = use(AuthContext);
    const navigate = useNavigate();
    

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // validation 

        // create user
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='my-20 w-xs mx-auto flex flex-col gap-4'>

            <form onSubmit={handleRegister} className="fieldset bg-base-200 border-base-300 rounded-box border p-4 ">
                <legend className="text-3xl font-bold text-center">Register Now</legend>

                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>

            <p>Already have an account? Please <Link className='text-blue-500 border-b' to="/login">Log In</Link></p>
        </div>
    )
}

export default Register