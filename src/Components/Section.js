import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BiAnchor } from 'react-icons/bi';
import { IoDiamondOutline } from 'react-icons/io5';
import '../App.css';

export default function Section() {
    return (
        <>
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
        </>
    )
}
