import { use } from "react";
import User from "./User";


export default function Users ({fetchedData}) {
    
    const users = use(fetchedData);
    // console.log(users);
    
    return (
        <div >
            <h3>No of users: {users.length}</h3>
            <div className="users-div">
            {users.map((user) => {
                return (
                    <div key={user.id} >
                        <User user={user}/>
                    </div>
                )
            })}
            </div>
        </div>
    )

}

/*
address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {lat: '-37.3159', lng: '81.1496'}}
company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
email: "Sincere@april.biz"
id: 1
name: "Leanne Graham"
phone: "1-770-736-8031 x56442"
username: "Bret"
website: "hildegard.org"
*/