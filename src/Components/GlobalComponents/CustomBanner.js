import React from 'react';
import '../../App.css';

export default function CustomBanner() {
    return (
        <>
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
        </>
    )
}
