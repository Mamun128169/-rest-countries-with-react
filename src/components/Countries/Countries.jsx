import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, SetCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
           .then(res => res.json())
           .then(data => SetCountries(data))
    }, []);

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log(flag);
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h2>Countries: {countries.length} </h2>
            {/* Countries information here */}
            <div>
                <h2>Visited countries: {visitedCountries.length}</h2>
                {
                    visitedCountries.map((country) => <li key={country.cca3}>
                        {country.name.common}
                    </li>)
                }
            </div>
            {/* displaying countries flag here */}
            <div className= {visitedCountries.length > 0 && 'flags-container'}>
                {
                    visitedFlags.map((flag, index) => <img
                    key={index}
                    src={flag}>
                    </img>)
                }
            </div>
            <div className="country-container">
            {
                countries.map((country => <Country
                handleVisitedFlags = {handleVisitedFlags}
                handleVisitedCountries = {handleVisitedCountries}
                key = {country.cca3}
                country = {country}
                ></Country>))
            }
            </div>
        </div>
    );
};

export default Countries;