import React from "react";
import "../styles/VideoReviews.css";
import screenshot2 from "../assets/screenshot2.png"; 

function VideoReviews() {
  return (
    <section className="video-reviews">
      <div className="screenshot-images">
        <img src={screenshot2} alt="Video Review Screenshot" className="hero-image" />
      </div>

      <div className="video-description">
        <h2>Video Reviews</h2>
        <p>Explore new restaurants through reviews.</p>
        <p>Like and bookmark reviews to put the restaurant on your map.</p> 
        <p>Select your favorite cuisines to see recommendations to your liking.</p>
        </div>
    </section>
  );
}

export default VideoReviews;
