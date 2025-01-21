import React from "react";
import "../styles/MapSection.css";
import screenshot3 from "../screenshot3.png";





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