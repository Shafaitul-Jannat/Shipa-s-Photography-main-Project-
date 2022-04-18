import React from 'react';
import './footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className="footer-design" >
            <div>
                <h3><span className="text-success">Shipa's</span> Photography</h3>
                <p><small>Copyright @ {year}</small></p>
                <p>All right reserved</p>

            </div>
            <div>
                <i className="fab fa-instagram-square"></i> <i className="fab fa-dribbble-square"></i>
                <i className="fab fa-twitter-square"></i> <i className="fab fa-youtube-square"></i>
            </div>
        </footer >





    );
};

export default Footer;