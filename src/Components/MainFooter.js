import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../App.css';

export default function MainFooter() {
    return (
        <>
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">Copyright@ abc.com</div>
                        <div className="col-md-6 d-md-flex justify-content-end">
                            <ul id='social-icons'>
                                <li><Link to="/"><AiFillTwitterSquare /></Link></li>
                                <li><Link to="/"> <AiFillFacebook /></Link></li>
                                <li><Link to="/"><AiFillLinkedin /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
