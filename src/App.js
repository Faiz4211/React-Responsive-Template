import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  // const images = {
  //   banner: require('./assets/images/banner.jpg'),
  //   billGates: require('./assets/images/bill-gates.jpg'),
  //   Post1: require('./assets/images/post-1.jpg'),
  //   Post2: require('./assets/images/post-2.jpg'),
  //   Post3: require('./assets/images/post-3.jpg'),
  //   Post4: require('./assets/images/post-4.jpg'),
  //   Steve: require('./assets/images/steve-jobs.jpg'),
  //   Testimonial: require('./assets/images/testimonial-bg.jpg')

  // }
  return (
    <>
      {/* header component  */}
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

      {/* Banner Component  */}
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

      {/* Section Component  */}

      <div className="container section">
        <div className="row">
          <div className="col-md-12">
            <h2 className='section-head'>Some Heading Goes Here</h2>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h6>Icon Here</h6>
              <h3>Some Heading Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h6>Icon Here</h6>
              <h3>Some Heading Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <h6>Icon Here</h6>
              <h3>Some Heading Goes Here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;