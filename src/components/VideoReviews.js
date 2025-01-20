import React from "react";
import "../styles/VideoReviews.css";
import screenshot2 from "../screenshot2.png"; 


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


function VideoReviews() {
  return (
    <section className="video-reviews">
      <div className="screenshot-images">
        <img src={screenshot2} alt="Video Review Screenshot" className="hero-image" />
      </div>
      <div className="video-description">
        <h2>Video reviews</h2>
        <p>Explore new restaurants through video reviews.</p>
        <p>Like and bookmark reviews to put the restaurant on your map.</p>
        <p>Select your favourite cuisines to see recommendations to your liking.</p>
      </div>
      
    </section>
  );
}

export default VideoReviews;