import "./App.css";
import { Suspense } from "react";
import Users from "./component3/Users";

async function  fetchUsers (){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    return res.json();
}


export default function App () {
    return (
        <div>
            <Suspense>
                <Users fetchUsers={fetchUsers()} />
            </Suspense>
        </div>
    )
}

// 'https://jsonplaceholder.typicode.com/users'