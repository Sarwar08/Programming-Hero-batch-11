
import "../App.css"

export default function Singer ({singer}){
    console.log(singer);
    
    return (
        <div className="singer">
            <h3>Name: {singer.name}</h3>
            <p>age: {singer.age}</p>
        </div>
    )
}