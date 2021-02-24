import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const countryName = useParams();
    const [country, setCountry] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName.countryName}`;
        fetch(url).then(res => res.json()).then(data => setCountry(data));
    },[]);
    console.log(country);
    const countryStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '200px',
        border: '1px solid purple',
        padding: '5px'
    }
    return (
        <div style={countryStyle}>
            <p>Name: {country[0]?.name}</p>
            <img style={{width: '110px', height:'50px'}} src={country[0]?.flag} alt=""/>
            <p>Area: {country[0]?.area}</p>
            <p>Population: {country[0]?.population}</p>
            <p>Region: {country[0]?.region}</p>
            <p></p>
        </div>
    );
};

export default CountryDetails;