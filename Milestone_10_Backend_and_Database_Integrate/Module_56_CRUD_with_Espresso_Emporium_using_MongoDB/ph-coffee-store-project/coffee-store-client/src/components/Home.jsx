import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialCoffees = useLoaderData();
    console.log(initialCoffees);
    const [coffees, setCoffees] = useState(initialCoffees);

    return (
        <div>
            <h2>its home</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id} 
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                        coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;