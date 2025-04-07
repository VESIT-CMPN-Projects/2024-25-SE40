import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import CustomCarousel from './Components/Carousel/Carousel';
import SectionHeading from './Components/heading/sectionheading';
import CustomCards from './Components/Cards/Cards';
import ThreeDSwiper from './Components/Swiper/Swiper';
import SectionHeading2 from './Components/heading2/sectionheading2';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';
import Collar from './Pages/Collar/Collar';
import CollarDetails from './Components/Collardetails/collardetails';
import Ribs from './Pages/Collar/ribs';
import Cuffs from './Pages/Collar/cuffs';
import AboutUs from './Pages/AboutUs';
import Testimonials from './Components/Testimonials/Testimonial';
import LandbotChat from './Components/Landbot/Landbot';

function Home() {
  return (
    <>
      <CustomCarousel />
      <SectionHeading />
      <CustomCards />
      <SectionHeading2 />
      <ThreeDSwiper />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/collar" element={<Collar />} />
        <Route path="/collars/:id" element={<CollarDetails />} />  
        <Route path="/cuffs" element={<Cuffs />} />
        <Route path="/ribs" element={<Ribs />} />
      </Routes>
      <Footer />
      <LandbotChat />  {/* ✅ Always available */}
    </Router>
  );
}

export default App;
