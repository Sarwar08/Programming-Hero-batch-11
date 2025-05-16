import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../../firbase.init';
import { Link } from 'react-router';

const SignUp = () => {
    // const [pos, setPos] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(name, photoURL, email, password, terms);

        setErrorMessage('');
        setSuccess(false);

        if (!terms){
            setErrorMessage('Please accept our terms and conditions.');
            return;
        }

        // password validate
        // (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}


        const isDigits = /(?=.*\d)/;
        const isLowerCase = /(?=.*[a-z])/;
        const isUpperCase = /(?=.*[A-Z])/;
        const isEightChars = /.{8,}/;

        if (password === '') {
            setErrorMessage('Password is empty.');
            return;
        }
        else if (isDigits.test(password) === false) {
            setErrorMessage('Password has no DIGITs.');
            return;
        }
        else if (isLowerCase.test(password) === false) {
            setErrorMessage('Password has no Lower Case Character.');
            return;
        }
        else if (isUpperCase.test(password) === false) {
            setErrorMessage('Password has no Upper Case Character.');
            return;
        }
        else if (isEightChars.test(password) === false) {
            setErrorMessage('Password must be 8 characters or more.');
            return;
        }

        // create user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);

                // email verification
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setSuccess(true);
                        alert("We sent you a verification email. Please verify.")
                    })

                // update user profile
                const profile = {
                    displayName: name,
                    photoURL: photoURL
                }

                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('Profile Updated');
                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className={`my-20 flex justify-center items-center`}>

            <form onSubmit={handleSignUp}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl text-center">Sign Up Here</legend>

                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Your Name" />

                    <label className="label">Photo URL</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <div className='relative'>
                        <label className="label">Password</label>
                        <input type={showPassword ? "text" : "password"} name="password" className="input" placeholder="Password" />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-6 right-2'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                    </div>

                    <label className='label mt-4'>
                        <input type="checkbox" name="terms" className='checkbox checkbox-sm' />
                        Accept our terms and conditions
                    </label>

                    <button className="btn btn-neutral mt-4">Sign Up</button>
                    <br />
                    <p>Already have an account? Please <Link className='text-blue-500 border-b' to='/login'>Login</Link></p>
                    <br />
                    {
                        errorMessage && <p className='text-red-500' >{errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-500'>User Creared Successfully.</p>
                    }
                </fieldset>
            </form>
        </div>
    )
}

export default SignUp