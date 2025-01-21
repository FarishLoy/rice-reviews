import React from "react";
import "../styles/HeroSection.css";
import screenshot1 from "../screenshot1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import food1 from '../food1.png';
import food2 from '../food2.png';
import food3 from '../food3.png'; 
import food4 from '../food4.png';
import food5 from '../food5.png';
import food6 from '../food6.png';
import food7 from '../food7.png';
import food8 from '../food8.png';
import food9 from '../food9.png';
import food10 from '../food10.png';
import food11 from '../food11.png';
import food12 from '../food12.png';

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
      <div className="screenshot-images second-section">
          <img src={screenshot1} alt="Hero Section" className="hero-image" />
      </div>
    </div>
  </section>

);
 
}

export default HeroSection;