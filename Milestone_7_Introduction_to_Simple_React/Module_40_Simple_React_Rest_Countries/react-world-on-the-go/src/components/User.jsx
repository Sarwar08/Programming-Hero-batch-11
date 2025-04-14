
import "./user.css"

export default function User ({user}) {
    
    return(
        <div className="userDiv">
            <p className="userDiv-p"><span className="p-span">Id:</span> {user.id}</p>
            <p className="userDiv-p"><span className="p-span">Name:</span> {user.name}</p>
            <p className="userDiv-p"><span className="p-span">Phone:</span> {user.phone}</p>
            <p className="userDiv-p"><span className="p-span">Username:</span> {user.username}</p>
            <p className="userDiv-p"><span className="p-span">Website:</span> {user.website}</p>
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