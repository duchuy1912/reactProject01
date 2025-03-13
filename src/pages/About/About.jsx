import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Welcome to our website! We are dedicated to providing high-quality services and products to our customers.</p>

      <div className="about-content">
        <div className="about-section">
          <h3>Our Mission</h3>
          <p>Our mission is to deliver innovative solutions that make life easier and more enjoyable for our customers.</p>
        </div>

        <div className="about-section">
          <h3>Our Vision</h3>
          <p>We strive to be a leader in our industry by maintaining a strong commitment to excellence and customer satisfaction.</p>
        </div>

        <div className="about-section">
          <h3>Our Team</h3>
          <p>Our team consists of passionate professionals who are dedicated to bringing the best services to our clients.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
