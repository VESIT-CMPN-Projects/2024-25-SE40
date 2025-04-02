import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import {Navbar} from './Components/Navbar/Navbar';
import CustomCarousel from './Components/Carousel/Carousel';
import SectionHeading from './Components/heading/sectionheading';
import CustomCards from './Components/Cards/Cards';
import ThreeDSwiper from './Components/Swiper/Swiper';
import SectionHeading2 from './Components/heading2/sectionheading2';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer/Footer';
import Collar from './Pages/Collar/Collar';
import Ribs from './Pages/Collar/ribs';
import Cuffs from './Pages/Collar/cuffs';

function Home() {
  return (
    <>
        <CustomCarousel />
        <SectionHeading />
        <CustomCards />
        <SectionHeading2 />
        <ThreeDSwiper />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/collar" element={<Collar/>} />
        <Route path="/cuffs" element={<Cuffs/>} />
        <Route path="/ribs" element={<Ribs/>} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
