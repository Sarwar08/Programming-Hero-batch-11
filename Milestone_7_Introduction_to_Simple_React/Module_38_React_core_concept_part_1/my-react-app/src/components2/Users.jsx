import { useEffect, useState } from "react";
import User from "./User";

export default function Users (){
    // https://jsonplaceholder.typicode.com/users

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));

            setLoading(false);

    },[loading]);
 
    return (
        <>
            {loading ? <div><h3>Loading...</h3> </div> : ""}
            {loading && <div><h3>Loading...</h3> </div>}
            <div className="bordered">
            <h3>User Lists App</h3>
            <p>No of Users: {users.length}</p>
            {users.map((user) => <User key={user.id} user={user} />)}
            </div>
        </>
    )
}