import { use } from "react"

export default function Friends ({fetchFriends}){
    
    const friends = use(fetchFriends);
    
    return (
        <h3>Friends: {friends.length} </h3>
    )
}