import React from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Section from './Components/Section';
import Testimonial from './Components/Testimonial';
import News from './Components/News';
import Footer from './Components/Footer';
import MainFooter from './Components/MainFooter';

export default function App() {
  return (
    <>
      {/* header component  */}
      <Header />

      {/* Banner Component  */}
      <Banner />

      {/* Section Component  */}
      <Section />

      {/* Testimonial Component  */}
      <Testimonial />

      {/* News Component  */}
      <News />

      {/* Footer Component  */}
      <Footer />

      {/* Main Footer  */}
      <MainFooter />
    </>
  )
}