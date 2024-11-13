// src/MainContent.js
import React from 'react';
import './MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <section id="home">
        <h2>Welcome to Our Website</h2>
        <p>Your success is our priority.</p>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing top-notch services.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <p>We offer a wide range of services to meet your needs.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Feel free to reach out for more information.</p>
      </section>
    </main>
  );
}

export default MainContent;
