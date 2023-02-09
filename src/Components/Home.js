import React from 'react';
import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare, AiOutlineArrowRight, AiOutlineBarChart, AiOutlineCalendar } from 'react-icons/ai';
import { BiAnchor } from 'react-icons/bi';
import { IoDiamondOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../App.css'

export default function Home() {
    const images = {
        billGates: require('../assets/images/bill-gates.jpg'),
        Steve: require('../assets/images/steve-jobs.jpg'),
        Post1: require('../assets/images/post-1.jpg'),
        Post2: require('../assets/images/post-2.jpg'),
        Post3: require('../assets/images/post-3.jpg'),
        Post4: require('../assets/images/post-4.jpg')
    }
    return (
        <>
            {/* Header  */}
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

            {/* Banner  */}
            <div id="banner" className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-title">
                                <h1 className='title'>Some Heading Goes here</h1>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsum aspernatur dolorum debitis, doloribus molestias perspiciatis fugiat atque. Cupiditate, culpa!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section  */}

            <div className="container section">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className='section-head'>Some Heading Goes Here</h2>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <BiAnchor className='icon' />
                            <h3>Some Heading Goes Here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <AiOutlineBarChart className='icon' />
                            <h3>Some Heading Goes Here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box">
                            <IoDiamondOutline className='icon' />
                            <h3>Some Heading Goes Here</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial  */}

            <div id='testimonial' className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='section-head text-white'>Testimonials</h2>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis delectus in obcaecati, consectetur aspernatur sunt dolores unde consequatur aperiam alias.</p>
                                <img src={images.billGates} alt="img" />
                                <div className="author">Bill Gates</div>
                                <div className="author-company">MicroSoft</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="testimonial">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet facere minus labore numquam blanditiis cumque nihil ad omnis pariatur!</p>
                                <img src={images.Steve} alt="img" />
                                <div className="author">Steve</div>
                                <div className="author-company">Apple</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News  */}
            <div id="news" className='container section'>
                <div className="row">
                    <div className="colmd-12">
                        <h2 className='section-head'>Recent News</h2>
                    </div>
                    <div className="col-lg-3">
                        <div className="news-post">
                            <img src={images.Post1} alt="img" />
                            <h3><Link>New Heading Here</Link></h3>
                            <div className="post-date"><AiOutlineCalendar /> January 30 2023</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est!</p>
                            <Link className='read-more'>Read More <AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="news-post">
                            <img src={images.Post2} alt="img" />
                            <h3><Link>New Heading Here</Link></h3>
                            <div className="post-date"><AiOutlineCalendar /> January 30 2023</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est!</p>
                            <Link className='read-more'>Read More <AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="news-post">
                            <img src={images.Post3} alt="img" />
                            <h3><Link>New Heading Here</Link></h3>
                            <div className="post-date"><AiOutlineCalendar /> January 30 2023</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est!</p>
                            <Link className='read-more'>Read More <AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="news-post">
                            <img src={images.Post4} alt="img" />
                            <h3><Link>New Heading Here</Link></h3>
                            <div className="post-date"><AiOutlineCalendar /> January 30 2023</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, est!</p>
                            <Link className='read-more'>Read More <AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer  */}
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

            {/* Main Footer  */}
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
