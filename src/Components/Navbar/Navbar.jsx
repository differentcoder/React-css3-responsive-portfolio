import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="n-wrapper">
                <div className="n-left">
                    <div className="n-name">MinhajUl</div>
                    <span>Toggle </span>
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul style={{listStyleType:'none'}}>
                            <li>Home</li>
                           
                            <li>Service</li>
                            <li>Experience</li>
                            <li>Portfolio</li>
                            <li>Testimonials</li>
                        </ul>
                        <button className="button n-button">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;