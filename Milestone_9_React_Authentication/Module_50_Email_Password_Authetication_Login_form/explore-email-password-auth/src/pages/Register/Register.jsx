import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firbase.init';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);

    setSuccess(false);
    setErrorMessage('');

    if (!terms){
      setErrorMessage('Please accept our Terms and Conditions');
    }

    // password validate
    const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (passwordRegExp.test(password) === false) {
      setErrorMessage("Password must have one lowercase, one uppercase, one digit and 8 characters or longer");
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result);
        setSuccess(true);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage(error.message);
      })
  }

  return (
    <div className='flex flex-col gap-4 items-center h-dvh pt-30'>
      <h2 className='text-3xl mb-8 font-bold'>Please Register</h2>
      <form onSubmit={handleRegister} className='flex flex-col justify-center items-center' >
        {/* email field */}
        <label className="input validator join-item w-96">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input className='' type="email" placeholder="mail@site.com" name="email" required />
        </label>
        <div className="validator-hint hidden">Enter valid email address</div>
        <br />
        {/* password field */}
        <label className="input validator w-96">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
              ></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
            <button onClick={() => { setShowPassword(!showPassword) }} className='btn btn-xs absolute top-2 -right-8 z-50'>
              {
                showPassword ? <FaEyeSlash /> : <FaEye />
              }
            </button>
          </div>
        </label>
        <p className="validator-hint hidden">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
        </p>
        <br />
        <label className="label -ml-37">
          <input type="checkbox" name="terms" className="checkbox" />
          Accept Terms and Conditions
        </label>
        <br />
        <input className='btn btn-primary' type="submit" value="Register" />
      </form>
      {
        errorMessage && <p className='text-red-500' >{errorMessage}</p>
      }
      {
        success && <p className='text-green-500'>User has created successfully</p>
      }
    </div>
  )
}

export default Register