import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // 👈 only import Routes & Route
import "./App.css";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import SectionHeading from "./Components/heading/sectionheading";
import SectionHeading2 from "./Components/heading2/sectionheading2";
import Cards from "./Components/Cards/Cards";
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Landbot from "./Components/Landbot/Landbot";

// Pages
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Collar from "./Pages/Collar/Collar";
import CustomizedCollar from "./Pages/Collar/CustomizedCollar";
import CustomizedCuffs from "./Pages/Collar/CustomizedCuffs";
import CustomizedRibs from "./Pages/Collar/CustomizedRibs";

import ProductListPage from "./Pages/ProductListPage";

import CollarDetails from "./Components/Collardetails/collardetails";
import Ribs from "./Pages/Collar/ribs";
import Cuffs from "./Pages/Collar/cuffs";
import ProductDetails from "./Pages/ProductDetails";
import Testimonials from "./Pages/Testimonials";

// Add these new imports if you have the detail components created:
// import CuffsDetails from "./Components/Cuffdetails/cuffsdetails";
// import RibsDetails from "./Components/Ribdetails/ribsdetails";

// Home Page Layout
function Home() {
  return (
    <>
      <Carousel />
      <SectionHeading />
      <Cards />
      <SectionHeading2 />
      <Testimonial />
      {/* <ProductListPage /> */}
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/collar" element={<Collar />} />
        <Route path="/collars/:id" element={<CollarDetails />} />
        <Route path="/cuffs" element={<Cuffs />} />
        <Route path="/ribs" element={<Ribs />} />
        {/* <Route path="/products/:category/:type" element={<ProductListPage />} /> */}

        {/* <Route path="/cuffs/:id" element={<CuffsDetails />} />
        <Route path="/ribs/:id" element={<RibsDetails />} /> */}
        <Route
          path="/products/category/:category"
          element={<ProductListPage />}
        />
        <Route path="/customized-collar" element={<CustomizedCollar />} />
        <Route path="/customize-cuffs" element={<CustomizedCuffs />} />
        <Route path="/customize-ribs" element={<CustomizedRibs />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
      <Landbot />
    </>
  );
}

export default App;
