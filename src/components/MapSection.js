import React, { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, animate } from 'framer-motion';
import "../styles/MapSection.css";
import screenshot3 from "../assets/screenshot3.png";





function MapSection() {
    const imageContainerRef = useRef(null);
  

    const isInView = useInView(imageContainerRef);
    const opacity = useMotionValue(0);
  
    useEffect(() => {
      if (isInView) {
        const animation = animate(opacity, [0, 1], { duration: 1.5 });
        animation.play();
      } else {
        const animation = animate(opacity, [1, 0], { duration: 1.5 });
        animation.play();
      }
    }, [isInView]);
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
    <motion.div style={{ opacity }} ref={imageContainerRef} className="screenshot-images second-section">
    <img src={screenshot3} alt="Map Section" className="hero-image" />
    </motion.div>
   </section>

  );
}

export default MapSection;






