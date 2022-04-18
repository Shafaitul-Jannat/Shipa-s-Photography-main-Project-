import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';
import Service from '../Service/Service';
import Services from '../Services/Services';


const home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <Intro></Intro>

            <Services></Services>
        </div>
    );
};

export default home;