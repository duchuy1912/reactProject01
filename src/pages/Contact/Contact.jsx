import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us.</p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>support@example.com</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>123 Street, City, Country</p>
        </div>
      </div>

      <form className="contact-form">
        <h3>Send us a message</h3>
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
