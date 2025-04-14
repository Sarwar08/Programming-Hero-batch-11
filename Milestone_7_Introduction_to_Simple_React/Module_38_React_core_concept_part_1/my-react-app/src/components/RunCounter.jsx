import { useState } from "react"

export default function RunCounter (){

    const [score, setScore] = useState(0);
    const [singles, setSingles] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedScore = score + 1;
        setScore(updatedScore);

        const updatedSingles = singles + 1;
        setSingles(updatedSingles);
    }

    const handleFour = () => {
        const updatedScore = score + 4;
        setScore(updatedScore);

        const updatedFour = fours + 1;
        setFours(updatedFour);
    }

    const handleSix = () => {
        const updatedScore = score + 6;
        setScore(updatedScore);

        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
    }

    return(
        <div>
            {score >= 50 && <p>You Scored 50</p>}
            <h3>Batsman Bangla</h3>
            <h2>Score: {score}</h2>
            <p>No of Singles: {singles}</p>
            <p>No of Fours: {fours}</p>
            <p>No of Sixes: {sixes}</p>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}