import React from 'react';
import './ContactUs.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <div className="contact-details">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div className="contact-details">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-details">
            <h3>Address</h3>
            <p>123 Property St, Real Estate City, RE 12345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
