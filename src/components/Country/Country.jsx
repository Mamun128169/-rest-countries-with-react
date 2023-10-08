import { useState } from 'react';
import './Country.css';
import PropTypes from 'prop-types';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country);
    const {capital, area, population, name: {common:countryName, official}, flag, flags: {png:flagImg}, cca3 } = country;

    const handleClick = () => {
        setVisited(!visited);
    }

    return (
        <div className= {`country ${visited ? 'visited': 'non-visited'}`}>
            <h3 style={{color: visited && 'pink'}}>Name: {countryName} </h3>
            <h3>Official Name: {official} </h3>
            <img 
            src= {flagImg} alt= {flag}
             />
            <h3>{`The capital of ${countryName}: ${capital}`}</h3>
            <h4>Area: {area}</h4>
            <h4>Population: {population}</h4>
            <p>Code: {cca3}</p>
            <button onClick={() => {
                handleVisitedCountries(country);
                handleVisitedFlags(flagImg);
            }}> Mark Visited
            </button>
            <br />
            <button onClick={handleClick}>
                {visited ? 'Visited': 'Going'}
            </button>
            <br />
            <small>
                {visited ? 
                "I have visited this country!": 
                "I want to visited this country!"}
            </small>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object.isRequired,
    handleVisitedCountries: PropTypes.func.isRequired,
    handleVisitedFlags: PropTypes.func.isRequired,
}

export default Country;