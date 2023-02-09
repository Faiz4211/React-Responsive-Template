import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Products from './Components/Products';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}