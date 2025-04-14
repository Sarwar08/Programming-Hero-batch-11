import React, { use, useState } from 'react'
import "./countries.css"
import Country from './country';

const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country) => {
        console.log("click to add a visited country", country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flags) => {
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    // console.log(countries);

  return (
    <div>
        <h1>Travelling Countries . . . </h1>
        <h2>No of Countries: {countries.length}</h2>
        <h3>Travelled so far: {visitedCountries.length}</h3>
        <ol>
            {
                visitedCountries.map(country => <li key={country.ccn3}> {country.name.common} </li>)
            }
        </ol>

        <h3>Visited Flags: {visitedFlags.length}</h3>
        <ol>
            {
                visitedFlags.map(flags => <li><img src={flags} alt="" /></li>)
            }
        </ol>

        <div className='countries'>
            {
                countries.map((country) => {

                    const key = parseInt(country.ccn3)

                    return (
                        <div key={key} className='countries'>
                           <Country 
                           handleVisitedCountries={handleVisitedCountries} 
                           handleVisitedFlags={handleVisitedFlags}
                           country = {country} 
                           
                           />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Countries