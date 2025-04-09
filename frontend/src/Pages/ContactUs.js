import React from 'react';
import './ContactUs.css';
import location from './Assets2/location.png';
import mail from './Assets2/mail.png';
import call from './Assets2/call.png';

const ContactUs = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src={location} alt="location"/> </span>
                <span>ADDRESS : Factory 82/1978 Tagore Nagar, Group No 7 OPP. Gurudwara 
                  Vikhroli(East) <br/>
                  Mumbai-400083<br/>
                  
                </span>
              </li>
              <li>
                <span><img src={mail} alt="mail"/></span>
                <span>BalajiKnittwell@gmail.com</span>
              </li>
              <li>
                <span><img src={call} alt="call"/></span>
                <span>XXXXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-box">
            <div className="input-box w50">
              <input type="text" required/>
              <span>First Name</span>
            </div>
            <div className="input-box w50">
              <input type="text" required/>
              <span>Last Name</span>
            </div>
            <div className="input-box w50">
              <input type="email" required/>
              <span>Email Address</span>
            </div>
            <div className="input-box w50">
              <input type="text" required/>
              <span>Mobile Number</span>
            </div>
            <div className="input-box w100">
              <textarea required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="input-box w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
