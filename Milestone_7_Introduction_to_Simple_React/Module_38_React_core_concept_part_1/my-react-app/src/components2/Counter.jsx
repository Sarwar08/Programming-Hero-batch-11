import { useState } from "react"

export default function Counter (){

    const [count, setCount] = useState(0);

    const increaseOne = () => {
        const updateCount = count + 1;
        setCount(updateCount);
    }

    const decreaseOne = () => {
        const updateCount = count - 1;
        setCount(updateCount);
    }

    const resetCounter = () => {
        const updateCount = 0;
        setCount(updateCount);
    }

    return(
        <div className="bordered">
            <h3>Its a counter App</h3>
            <h2>Count: {count}</h2>
            <button onClick={increaseOne}>+1</button>
            <button onClick={decreaseOne}>-1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}