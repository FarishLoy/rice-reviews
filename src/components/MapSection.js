import React from "react";
import "../styles/MapSection.css";
import screenshot3 from "../screenshot3.png";


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

function MapSection() {
  return (
      <section className="map-section">
          <div className="text-content">
          <h2>Restaurants on the map</h2>
              <div>
                  <p>Explore restaurants on the map,</p>
                  <p>Filter by price levels, cuisine, and restaurants</p>
                  <p>rated by your following.</p>
              </div>
          </div>
          <div className="screenshot-images">
              <img src={screenshot3} alt="Video Review Screenshot" className="hero-image" />
          </div>
      </section>
  );
}

export default MapSection;