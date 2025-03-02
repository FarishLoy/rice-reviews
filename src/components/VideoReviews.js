import React, { useEffect, useRef } from 'react';
import '../styles/FeatureSection.css';
import { useInView, motion, useMotionValue, animate } from 'framer-motion';
import screenshot2 from '../assets/screenshot2.png';

function VideoReviews() {
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
    <section className="feature-container">
      <motion.div
        style={{ opacity }}
        ref={imageContainerRef}
        className="screenshot-images second-section">
        <img src={screenshot2} alt="Video Reviews" />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="description-container left-aligned">
        <h2>Video Reviews</h2>
        <p>Explore new restaurants through reviews</p>
        <p>Like and bookmark reviews to put the restaurant on your map</p>
        <p>
          Select your favorite cuisines to see recommendations to your liking
        </p>
      </motion.div>
    </section>
  );
}

export default VideoReviews;
