import { use } from "react"

export default function Guests ({guestfetch}){
    
    const guests = use(guestfetch);

    return (
        <h3>Guests: {guests.length}</h3>
    )
}