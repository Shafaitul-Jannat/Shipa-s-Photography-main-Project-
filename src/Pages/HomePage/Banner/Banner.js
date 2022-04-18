import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='fst-italic text-success'>HELLO THERE!
                    </h1>
                    <p className='text-dark fw-bolder'>THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='fst-italic text-success'>HELLO THERE!
                    </h1>
                    <p className='text-dark fw-bolder'>THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='fst-italic text-success'>HELLO THERE!
                    </h1>
                    <p className='text-dark fw-bolder'>THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
};

export default Banner;