import React from 'react';
import '../App.css';

export default function Testimonial() {
    const images = {
        billGates: require('../assets/images/bill-gates.jpg'),
        Steve: require('../assets/images/steve-jobs.jpg'),
    }
    return (
        <>
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
        </>
    )
}
