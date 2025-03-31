import React from 'react';
import './ContactUs.css';
import location from './Assets2/location.png'
import mail from './Assets2/mail.png'
import call from './Assets2/call.png'

const ContactUs = () => {
  return (
    <section>
        <div className='container'>
            <div className='contactInfo'>
                <div>
                    <h2>Contact Info</h2>
                    <ul class="info">
                        <li>
                            <span><img src={location} alt="location"/> </span>
                            <span>2912 Meadowbrook Road<br/>
                                Los Angeles, CA<br/>
                                90017</span>
                        </li>
                        <li>
                            <span><img src={mail} alt="mail"/></span>
                            <span>BalajiKnittwell@gmail.com</span>
                        </li>
                        <li>
                            <span><img src={call} alt="call"/></span>
                            <span>310-286-1623</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='contactForm'>
                <h2>Send a Message</h2>
                <div className='formBox'>
                    <div className='inputBox w50'>
                        <input type='text' required/>
                        <span>First Name</span>
                    </div>
                    <div className='inputBox w50'>
                        <input type='text' required/>
                        <span>Last Name</span>
                    </div>
                    <div className='inputBox w50'>
                        <input type='email' required/>
                        <span>Email Address</span>
                    </div>
                    <div className='inputBox w50'>
                        <input type='text' required/>
                        <span>Mobile Number</span>
                    </div>
                    <div className='inputBox w100'>
                        <textarea required></textarea>
                        <span>Write your message here...</span>
                    </div>
                    <div className='inputBox w100'>
                        <input type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  );
};

export default ContactUs;
