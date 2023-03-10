import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Country API</h1>
         
                {
                    countries.map(country => <ul><Link to={`/country/${country.name.common}`}>{country.name.common}</Link></ul>)
                }
            
        </div>
    );
};

export default Countries;