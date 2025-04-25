
import React, { use, useEffect, useState } from 'react'
import Bottle from './Bottle';
import "./bottles.css"
import { addToStoredCart, getStoredCart, removeFromCart } from '../utilities/localStorage';
import Cart from './Cart';

const Bottles = ({bottlesPromise}) => {

    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    useEffect(() => {
        const storedCartIds = getStoredCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle){
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);

    }, [bottles])

    const handleAddToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);

        // save the bottle id in the storage 
        addToStoredCart(bottle.id);
    }

    const handleRemoveCart = (id) => {
        console.log("remove id from the cart", id);

        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromCart(id);
    }
    
  return (
    <div>
        <h2>Bottles No: {bottles.length}</h2>

        <h2>Added to cart: {cart.length}</h2>

        <Cart cart={cart} handleRemoveCart={handleRemoveCart} /> 

        <div className='bottles'>
        {
            bottles.map(bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                handleAddToCart = {handleAddToCart}
                />)
        }
        </div>
    </div>
  )
}

export default Bottles