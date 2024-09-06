import React from 'react';
import clogo from '../asset/clogo.png';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
        <div className="send-message">
          <h3>Send Us A Message</h3>
          <form>
            <div className="input-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-details">
          <h3>Contact Details</h3>
          <img src={clogo} alt="Logo" className="logo" />
          <p>Email Us: helinayani281@gmail.com</p>
          <p>231, Avalon Business Hub
          Katargam, Surat, Gujarat - 395004</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;