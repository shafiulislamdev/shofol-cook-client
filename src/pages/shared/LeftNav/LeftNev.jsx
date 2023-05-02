import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNev = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef-country')
            .then(res => res.json())
            .then(data => setCountry(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h5>All Chef Country</h5>
            <div className='ps-1'>
                {
                    country.map(country => <p
                        key={country.id}
                    >
                        <Link to={`/country/${country.id}`} className='text-decoration-none text-secondary fw-bold fs-6'>{country.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNev;