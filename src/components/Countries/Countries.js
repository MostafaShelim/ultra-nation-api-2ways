import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url).then(res => res.json()).then(data => setCountries(data.slice(0, 10)));
    }, []);

    const countryStyle = {
        border: '1px solid purple',
        padding: '30px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center',
        flexDirection: 'column'
    }
    const handleClick = (name) =>{
        history.push(`/country/${name}`)
    }
    return (
        <div>
            {
                countries.map(country => {
                    return(
                        <div style={countryStyle}>
                            <p>Country Name: {country.name}</p>
                            <Link to={"/country/"+country.name}><button>See details</button></Link>
                            <button onClick = {() => handleClick(country.name)}>Click me</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Countries;