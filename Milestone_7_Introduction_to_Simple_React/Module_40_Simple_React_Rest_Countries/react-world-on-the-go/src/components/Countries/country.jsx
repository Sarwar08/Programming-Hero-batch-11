
import "./country.css"
import { useState } from "react";

export default function Country ({country, handleVisitedCountries, handleVisitedFlags}) {

    const [visited, setVisited] = useState(false);

    // console.log(handleVisitedCountries);

    const handleVisited = () => {

        // if (visited === true){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // setVisited(true);

        setVisited(!visited);
        handleVisitedCountries(country);
        handleVisitedFlags(country.flags.png);
    }
    
    return (
        <>
            <div className={`country ${visited && 'country-visited'}`}>
                <h4>Name: {country.name.common}</h4>
                <img src= {country.flags.png} alt="" />
                <p>Independent: {country.independent ? "Yes" : "No"}</p>
                <p>Population: {country.population}</p>
                <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
            </div>
        </>
    )
}