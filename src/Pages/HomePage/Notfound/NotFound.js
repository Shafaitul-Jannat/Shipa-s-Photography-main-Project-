import React from 'react';
import error from '../../../images/error.webp'

const NotFound = () => {
    return (
        <div>
            <div>
                <h2 className='text-primary text-center'></h2>
                <img className='w-100' src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;