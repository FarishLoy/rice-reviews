/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useInView, motion, useMotionValue, animate } from 'framer-motion';
import screenshot3 from '../assets/screenshot3.png';

function MapSection() {
  const imageContainerRef = useRef(null);

  const isInView = useInView(imageContainerRef, {
    amount: 0.5,
  });
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
    <section className="feature-container-reversed">
      <motion.div
        style={{ opacity }}
        ref={imageContainerRef}
        className="screenshot-images second-section">
        <img src={screenshot3} alt="Video Reviews" />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="description-container right-aligned">
        <h2>Restaurants On Map</h2>
        <p>Explore restaurants on the map</p>
        <p>Filter by price levels, cuisine, and restaurants</p>
        <p>rated by your following</p>
      </motion.div>
    </section>
  );
}

export default MapSection;
