import { useState } from "react"

export default function Counter (){
    const [count, setCount] = useState(0);

    function clickFunc (){
        setCount(count + 1);
    }
    return(
        <div>
            <h3 > <span style={{borderBottom: "1px solid darkcyan", padding: "10px", borderRadius: '20px'}}>Counter</span>
                </h3>
            <h2>Count: {count}</h2>
            <button onClick={clickFunc}>+1</button>
        </div>
    )
}