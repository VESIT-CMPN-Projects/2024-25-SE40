import React from 'react';
import './Footer.css'; // You'll need to create this CSS file

const Footer = () => {
  return (
    <footer className="matcha-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3><a href="/about">About Us</a></h3>
          <h3><a href="/about">Our Mission</a></h3>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/collar">Knitted Collar</a></li>
            <li><a href="/customcollar">Customized Collar</a></li>
            <li><a href="/cuffs">Cuffs</a></li>
            <li><a href="/ribs">Ribs</a></li>

          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>
        </div>
        
        
        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul>
            <li>ADDRESS : Factory 82/1978 Tagore Nagar, Group No 7 OPP. Gurudwara Vikhroli(East) Mumbai-400083</li>
            <li>Phone No : 8850094949</li>
            <li>EMAIL : balajiknittwell@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 <a href="https://www.BalajiKnittwell.com">BalajiKnittwell.All Rights Reserved.</a></p>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/refund">Refund Policy</a>
          <a href="/accessibility">Accessibility Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;