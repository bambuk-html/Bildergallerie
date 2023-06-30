import React from 'react';
import Navbar from '../Components/navbar';
import './Contact.css';
import Form from '../Components/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Kontakt</h1>
      </div>
      <Form />
    </div>
  );
};

export default Contact;
