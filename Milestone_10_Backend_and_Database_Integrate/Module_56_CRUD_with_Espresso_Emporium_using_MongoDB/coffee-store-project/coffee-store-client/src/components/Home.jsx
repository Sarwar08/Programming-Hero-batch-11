import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import CoffeeCard from './CoffeeCard';

const Home = () => {

  const initialCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(initialCoffees)

  console.log(coffees);

  return (
    <div className='my-10'>
      <h2 className='text-5xl font-semibold text-center my-5 text-amber-600 text-shadow-yellow-200 text-shadow-xs'>All coffee type: {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />)
        }
      </div>

    </div>
  )
}

export default Home