import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function CustomHeader() {
    return (
        <>
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className='logo'>Company Name</h1>
                        </div>
                        <div className="col-md-8">
                            <ul id="menu" className='float-md-end'>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to='/About'>About Us</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                                <li><Link to="/Products">Products</Link></li>
                                <li><Link to="/Contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
