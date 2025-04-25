
import React from 'react'
import "./bottles.css"

const Cart = ({cart, handleRemoveCart}) => {
  return (
    <div className='bottles'>
        {
            cart.map((bottle) => <div key={bottle.id} className='bottle'> 
                <p>{bottle.brand}</p>
                <p>{bottle.price}</p>
                <p>{bottle.quantity}</p>
                <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
            </div>)
        }
    </div>
  )
}

export default Cart