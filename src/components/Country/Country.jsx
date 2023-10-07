import './Country.css';

const Country = ({country}) => {
    console.log(country);
    const {capital, area, name: {common:countryName, official}, flag, flags: {png:flagImg} } = country;
    return (
        <div className="country">
            <h3>Name: {countryName} </h3>
            <h3>Official Name: {official} </h3>
            <img src= {flagImg} alt= {flag} />
        </div>
    );
};

export default Country;