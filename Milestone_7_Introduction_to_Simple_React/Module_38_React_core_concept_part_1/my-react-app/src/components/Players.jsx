import { useEffect, useState } from "react"
import Player from "./Player";

export default function Players (){

    const [Players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    },[]);

    return(
        <div>
            <h3>No of Players: {Players.length}</h3>
            <div>
                {
                    Players.map((player) => <Player key={player.id} player={player} />)
                }
            </div>
        </div>
    )
}