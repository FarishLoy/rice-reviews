import React, { useState } from "react";
import axios from "axios";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

// JavaScript to trigger fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const checkVisibility = () => {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      // Check if the element is in the viewport
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('fade-in-active');
      }
    });
  };

  // Run the check on page load and scroll
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
});


function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", { email });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <p className="coming-soon">COMING TO APP STORE SOON</p>
      <div className="email-signup">
        <input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignup}>➜</button>
      </div>
      {message && <p>{message}</p>}
      <nav>
        <Link to="/about-us">About Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default Footer;