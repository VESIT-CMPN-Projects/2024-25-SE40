import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Balaji from "../Assets/Balaji.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    // Only toggle if screen width is below 768px
    if (window.innerWidth <= 768) {
      setIsMenuOpen(!isMenuOpen);
    }
  };
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false); // Close menu on mobile only
    }
  };
  

  return (
    <>
      <div className="navbar-container">
        {/* Upper Navbar */}
        <div className="upper">
        <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
          <div className="nav-logo">
            <img src={Balaji} alt="Logo" className="logo-img" />
          </div>

          {/* Hamburger Menu (For Mobile) */}
          

          {/* Navigation Menu */}
          <ul className={`nav-menu ${isMenuOpen ? "nav-menu-mobile" : ""}`}>
          <li>
              <Link to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li className="dropdown-container">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="dropdown-toggle-custom"
                  as="span"
                >
                  Products
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/collar">Knitted Collar</Dropdown.Item>
                  <Dropdown.Item href="/customcollar">Customized Collar</Dropdown.Item>
                  <Dropdown.Item href="/cuffs">Cuffs</Dropdown.Item>
                  <Dropdown.Item href="/ribs">Ribs</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Link to="/about" onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavLinkClick}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/order" onClick={handleNavLinkClick}>
                Order
              </Link>
            </li>
          </ul>

          {/* Call Button */}
          <div className="contact">
            {/* <a href="tel:+8850094949" className="call-button"> */}
              📞 Call: 8850094949
            {/* </a> */}
          </div>
          
        </div>
      </div>

      {/* Lower Navbar with Search Bar */}
      {/* <div className="searchdiv">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
          />
          <button className="search-button">🔍</button>
        </div>
      </div> */}
    </>
  );
};
export default Navbar;
