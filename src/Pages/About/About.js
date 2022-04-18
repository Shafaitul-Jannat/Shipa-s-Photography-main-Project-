import React from 'react';

import intro from '../../images/intro/intro.jpg';

const Intro = () => {
    return (
        <div className=''>
            <h2 className='text-Primary text-center mt-5'>About Me</h2>
            <div className="row mt-5">
                <div className="col-sm-6">
                    <div className="">
                        <div className="card-body">
                            <img className="img-fluid" src={intro} alt="" />

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="card-body">
                            <h2 className='fst-italic text-success'>HEY, MY NAME IS SHIPA! </h2>
                            <p>As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I’m powered by Intelligentsia coffee, green juices filled with crazy superfood concoctions and the thrill of my last mountain bike ride. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day.</p>
                        </div>
                        <button type="button" className="btn btn-success 
                         ">Read More</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Intro;