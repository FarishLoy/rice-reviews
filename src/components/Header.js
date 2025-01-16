import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Header.css";
import logoImage from "../logo-image.png";


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

function Header() {
  return (
    <header className="header">
      <div className="logo-image">
        <img src={logoImage} alt="Rice Reviews Logo" />
      </div>
      <h1>
        <Link to="/" className="header-title">Rice Reviews</Link>
      </h1>
    <nav>
        <Link to="#home">Home</Link>
        <Link to="#about">About Us</Link>
        <Link to="#download" className="download-btn">Download</Link>
      </nav>
    </header>
  );
}

export default Header;