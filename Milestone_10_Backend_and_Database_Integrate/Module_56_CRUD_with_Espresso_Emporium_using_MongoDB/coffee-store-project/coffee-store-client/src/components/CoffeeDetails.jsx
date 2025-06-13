import React from 'react'
import { useLoaderData } from 'react-router'


const CoffeeDetails = () => {

    const coffee = useLoaderData();
    console.log(coffee);

    const { name, quantity, photo, price, supplier, taste, details } = coffee;

    return (
        <div className='py-24'>
            <div className='bg-base-300 p-2  rounded-tl-full rounded-br-full'>
                <h2 className='text-5xl font-semibold text-rose-500  text-shadow-amber-100 text-shadow-2xs text-center my-10'>Details Of a Coffee</h2>
                <div className='flex flex-col md:flex justify-center items-center space-y-8'>
                    <figure>
                        <img className='w-56' src={photo} alt="" />
                    </figure>
                    <div className='text-3xl'>
                        <p><span className='text-rose-500 mr-4'>Name :</span> {name}</p>
                        <p><span className='text-rose-500 mr-4'>price :</span> {price}</p>
                        <p><span className='text-rose-500 mr-4'>Supplier :</span> {supplier}</p>
                        <p><span className='text-rose-500 mr-4'>Taste :</span>{taste}</p>
                        <p><span className='text-rose-500 mr-4'>Details :</span>{details}</p>
                        <p><span className='text-rose-500 mr-4'>Quantity :</span> {quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeDetails