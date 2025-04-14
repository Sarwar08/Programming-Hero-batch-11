import { useState } from "react"

export default function ShowHide (){

    const [visibility, setVisibility] = useState(false);

    const handleShowHide = () => {
        if (visibility){
            setVisibility(false);
        }
        else{
            setVisibility(true);
        }
    }

    return (
        <div className="bordered">
            <h3>Its a Show/Hide Text App</h3>
            
            {visibility && <p>Hello, React Learner!</p>}
            <button onClick={handleShowHide}>{!visibility ? "Show" : "Hide"}</button>
        
        </div>
    )
}