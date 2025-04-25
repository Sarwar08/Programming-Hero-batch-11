

import React from 'react'
import "./bottles.css"

const Bottle = ({bottle, handleAddToCart}) => {

    const {type, brand, price, quantity} = bottle;

  return (
    <div className='bottle'>
        <p>Name: Bottle</p>
        <p>Type: {type}</p>
        <p>Brand: {brand}</p>
        <p>Price: {price}</p>
        <p>Remaining: {quantity} bottles</p>
        <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
  )
}

export default Bottle