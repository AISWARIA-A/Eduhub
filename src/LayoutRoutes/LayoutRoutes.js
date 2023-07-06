import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Header from '../components/header/Header'; 
import Footer from '../components/footer/Footer';
import Plans from '../components/pages/Plans/Plans';
import Courses from '../components/pages/Courses/Courses';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import ContactUs from '../components/pages/ContactUs/Contact';
import Support from '../components/pages/Support/Support';



export default function LayoutRoutes (){

    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Plans />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    );

}