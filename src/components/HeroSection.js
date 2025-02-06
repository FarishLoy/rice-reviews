import React, { useEffect, useRef } from "react";
import "../styles/HeroSection.css";
import screenshot1 from "../assets/screenshot1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useInView, motion, useMotionValue, useTime, animate } from 'framer-motion'


import food1 from '../assets/food1.png';
import food2 from '../assets/food2.png';
import food3 from '../assets/food3.png'; 
import food4 from '../assets/food4.png';
import food5 from '../assets/food5.png';
import food6 from '../assets/food6.png';
import food7 from '../assets/food7.png';
import food8 from '../assets/food8.png';
import food9 from '../assets/food9.png';
import food10 from '../assets/food10.png';
import food11 from '../assets/food11.png';
import food12 from '../assets/food12.png';

function FoodGallery() {
    const foodImages = [
    food1, food2,food3, food4, food5, food6, 
    food7, food8, food9, food10, food11, food12,
    
];

return (
    <div className="food-gallery">
            {foodImages.map((image, index) => (
                <img key={index} src={image} alt={`Food ${index + 1}`} />
            ))}
    </div>
    
);
}


function HeroSection() {
  const imageContainerRef = useRef(null)
  
  const isInView = useInView(imageContainerRef)
  const opacity = useMotionValue(0)
  
  useEffect(() => {
    if (isInView) {
      const animation = animate(opacity, [0,1], { duration: 1.5 })
      animation.play()
    } else {
      const animation = animate(opacity, [1,0], { duration: 1.5 })
      animation.play()
    }
  }, [isInView])
  return (
   
  <section className="hero-section">
    <div className="hero-content">
      <div className="first-section">
          <h1>Your next favorite meal is just a scroll and a map pin away</h1>
         <p>COMING SOON TO APP STORE SOON</p>
          <div className="email-signup">
            <input type="email" placeholder="Email address"  />
            <button>
            <ArrowForwardIcon /> 
          </button>
          </div>   
      <FoodGallery/>
      </div>
      <motion.div style={{ opacity }} ref={imageContainerRef} className="screenshot-images second-section">
          <img src={screenshot1} alt="Hero Section" className="hero-image" />
      </motion.div>
    </div>
  </section>

);
 
}

export default HeroSection;