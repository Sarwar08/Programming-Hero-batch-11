import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { auth } from '../../firbase.init';
import { Link } from 'react-router';

const Login = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const emailRef = useRef();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // reset
    setErrorMessage('');
    setSuccess(false);

    // login user
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);

        if(result.user.emailVerified){
          setSuccess(true);
        }
        else{
          alert("Please verify your email.")
        }
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message);
      })
  }

  const handleForgetPassword = () => {
    console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setErrorMessage('');

    // send password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email sent for password reset');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message);
      })
  }

  return (
    <div className='my-20'>
      <form onSubmit={handleLoginSubmit} className='w-xs mx-auto'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-3xl text-center">Login Here</legend>

          <label className="label">Email</label>
          <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>

          <div onClick={handleForgetPassword}><Link>Forget Password?</Link></div>

          <br />
          <p>New to this website? <Link className='text-blue-500 border-b' to="/signUp">Sign Up</Link></p>
          <br />
          {
            errorMessage && <p className='text-red-500'>{errorMessage}</p>
          }
          {
            success && <p className='text-green-500'>Logged In Successfully.</p>
          }
        </fieldset>
      </form>
    </div>
  )
}

export default Login