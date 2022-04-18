import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';

import Services from '../Services/Services';


const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Intro></Intro>

            <Services></Services>
        </div>
    );
};

export default home;