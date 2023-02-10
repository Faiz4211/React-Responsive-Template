import React from 'react';
import '../App.css';
import CustomHeader from '../Components/GlobalComponents/CustomHeader';

export default function About() {
    return (
        <>
            <CustomHeader />
            <div id="About">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>

            <div id="banner1" className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner-title">
                                <h1 className='title'>Some Heading Goes here</h1>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo excepturi officiis corporis, suscipit cum eius. Nisi reprehenderit dicta nulla non ratione omnis, fugit dignissimos dolore libero perferendis laboriosam quidem possimus nobis, iusto doloribus. Est ratione suscipit expedita. Pariatur veritatis debitis reprehenderit doloribus! Deleniti quos molestiae veritatis ullam, provident voluptatibus quidem, nostrum esse suscipit, nulla eaque corrupti eveniet adipisci vel temporibus aut doloremque eligendi voluptate fugit repellendus! Eligendi laborum nesciunt, dolor saepe facere perferendis eaque suscipit consectetur modi porro iure ratione harum voluptates voluptas architecto! Odit voluptate maiores illo deleniti accusamus beatae tempora aperiam, exercitationem cum eaque temporibus officia magni aliquid!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}