import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
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
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Services</Link></li>
                                <li><Link to="/">Products</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
