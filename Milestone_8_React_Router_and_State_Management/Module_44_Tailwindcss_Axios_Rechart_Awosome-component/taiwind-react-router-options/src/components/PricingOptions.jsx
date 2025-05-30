import React, { use } from 'react'
import PricingCard from './PricingCard/PricingCard';
import DaisyPricingCard from './DaisyPricingCard.jsx/DaisyPricingCard';

const pricingOptions = ({ pricingPromise }) => {
  
  const pricingData = use(pricingPromise);
  
  console.log(pricingData);

  return (
    <div>
      <h2 className='text-5xl'>Get Our Membership</h2>
      
      {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} />)
        }
      </div> */}
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing} />)
        }
      </div>
    </div>
  )
}

export default pricingOptions