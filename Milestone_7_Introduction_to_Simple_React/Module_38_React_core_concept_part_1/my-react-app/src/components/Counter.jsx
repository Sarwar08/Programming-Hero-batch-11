
import { useState } from "react";

export default function Counter () {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Click to Add</button>
    </>
  )

}