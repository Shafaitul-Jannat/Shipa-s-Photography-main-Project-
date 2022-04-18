import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services' className='container'>
            < div className='text-primary text-center p-5' >
                <h1>Look at Our Services</h1>
            </div >
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    >
                    </Service>)
                }
            </div>

        </div >
    );
};

export default Services;