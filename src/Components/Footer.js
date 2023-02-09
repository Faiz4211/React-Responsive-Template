import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Footer() {
    return (
        <>
            <div className="footer-siderbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4>About Company</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quisquam voluptatum totam ea error dolorum.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, enim.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-widget">
                                <h4>Latest News</h4>
                                <ul className='latest-news'>
                                    <li><Link to="/">Lorem ipsum dolor sit. <AiOutlineArrowRight /></Link></li>
                                    <li><Link to="/">Lorem ipsum dolor sit. <AiOutlineArrowRight /></Link></li>
                                    <li><Link to="/">Lorem ipsum dolor sit. <AiOutlineArrowRight /></Link></li>
                                    <li><Link to="/">Lorem ipsum dolor sit. <AiOutlineArrowRight /></Link></li>
                                    <li><Link to="/">Lorem ipsum dolor sit. <AiOutlineArrowRight /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="adress">
                                <h4>Company Adress</h4>
                                <address>
                                    <b>Xyx, Inc</b> <br />
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi labore eveniet ratione excepturi earum? <br />
                                    X : (123) 766-345
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
