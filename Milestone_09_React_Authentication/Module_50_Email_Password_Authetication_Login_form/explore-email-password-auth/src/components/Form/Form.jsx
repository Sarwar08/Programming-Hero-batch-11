import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Form = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
    }

    return (
        <div className='flex justify-center'>
            <div className='my-20 w-80 p-8 text-center bg-base-200 rounded-2xl'>
                <h2 className='text-2xl mb-5'>Sign Up Here</h2>

                <form onSubmit={handleForm} className=''>

                    <input type="email" name="email" placeholder='email' className='border border-gray-600 p-1 mb-4 w-full rounded-sm' />

                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder='password' className='border border-gray-600 p-1 mb-4 w-full rounded-sm' />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-1 right-2'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div>
                        <button className='btn btn-neutral'>Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Form