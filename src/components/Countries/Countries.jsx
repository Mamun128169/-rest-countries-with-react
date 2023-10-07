import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, SetCountries] = useState([]);
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
           .then(res => res.json())
           .then(data => SetCountries(data))
    }, [])

    return (
        <div>
            <h2>Countries: {countries.length} </h2>
        </div>
    );
};

export default Countries;