import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const service = props.service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }


    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 mt-2' >
            <div className="card" style={{ width: "20rem" }}>
                <img className=" card-img-top" src={service?.img} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service?.name}</h5>
                    <h6>Price: {service?.price} </h6>
                    <p className="card-text"><small>{service?.description}</small></p>
                    <div>
                        <button onClick={() => navigateToServiceDetail(service?.id)} className='btn btn-primary'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;