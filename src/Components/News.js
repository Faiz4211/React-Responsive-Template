import React from 'react';
import { AiOutlineArrowRight, AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../App.css';

export default function News() {
    const images = {
        Post1: require('../assets/images/post-1.jpg'),
        Post2: require('../assets/images/post-2.jpg'),
        Post3: require('../assets/images/post-3.jpg'),
        Post4: require('../assets/images/post-4.jpg'),
    }
    return (
        <>
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
        </>
    )
}
