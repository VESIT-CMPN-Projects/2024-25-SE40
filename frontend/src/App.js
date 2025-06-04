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
import Swiper from "./Components/Swiper/Swiper"
import Testimonial from "./Components/Testimonials/Testimonial";
import Footer from "./Components/Footer/Footer";
import Landbot from "./Components/Landbot/Landbot";

// Pages
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Collar from "./Pages/Products/Collar";

import ProductListPage from "./Pages/ProductListPage/ProductListPage";

import CollarDetails from "./Components/Collardetails/collardetails";
import Ribs from "./Pages/Products/ribs";
import Cuffs from "./Pages/Products/cuffs";
import ProductDetails from "./Pages/ProductDetail/ProductDetails";
import CustomizedCollar2 from "./Pages/Products/customcollar";
import TermsOfService from "./Pages/TermsOfService/Termsofservice";
import FAQ from "./Pages/FAQ/FAQ";
import Order from "./Pages/Order/Order";

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
      <Swiper />
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
        <Route path="/order" element={<Order/>} />
        <Route path="/collar" element={<Collar />} />
        <Route path="/collars/:id" element={<CollarDetails />} />
        <Route path="/customcollar" element={<CustomizedCollar2/>} />
        <Route path="/cuffs" element={<Cuffs />} />
        <Route path="/ribs" element={<Ribs />} />
        {/* <Route path="/products/:category/:type" element={<ProductListPage />} /> */}

        {/* <Route path="/cuffs/:id" element={<CuffsDetails />} />
        <Route path="/ribs/:id" element={<RibsDetails />} /> */}
        <Route
          path="/products/category/:category"
          element={<ProductListPage />}
        />

        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Routes>
          <Route path="/terms" element={<TermsOfService/>} />
          <Route path="/FAQ" element={<FAQ/>}/>
        </Routes>
      <Footer />

      <Landbot />
    </>
  );
}

export default App;
