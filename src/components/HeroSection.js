/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useInView, motion, useMotionValue, animate } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles/HeroSection.css';
import screenshot1 from '../assets/screenshot1.png';

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
import { WebsiteContext } from '../App';
import axios from 'axios';

const foodImages = [
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9,
  food10,
  food11,
  food12,
];

function FoodGallery() {
  return (
    <div className="food-gallery">
      {foodImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Food ${index + 1}`}
          className="hero-image"
        />
      ))}
    </div>
  );
}

function HeroSection() {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { subscribed, setSubscribed } = React.useContext(WebsiteContext);

  const imageContainerRef = useRef(null);
  const firstSectionRef = useRef(null);

  const isSecondSectionInView = useInView(imageContainerRef, {
    amount: 0.5,
  });
  const isFirstSectionInView = useInView(firstSectionRef, {
    amount: 0.5,
  });

  const firstSectionOpacity = useMotionValue(0);
  const secondSectionOpacity = useMotionValue(0);

  useEffect(() => {
    if (isSecondSectionInView) {
      const animation = animate(secondSectionOpacity, 1, {
        duration: 1.5,
      });
      animation.play();
    } else {
      //const animation = animate(secondSectionOpacity, [1, 0], {
      //  duration: 1.5,
      //});
      //animation.play();
    }
  }, [isSecondSectionInView]);

  useEffect(() => {
    if (isFirstSectionInView) {
      const animation = animate(firstSectionOpacity, 1, { duration: 1.5 });
      animation.play();
    } else {
      //const animation = animate(firstSectionOpacity, [1, 0], { duration: 1.5 });
      //animation.play();
    }
  }, [isFirstSectionInView]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignup = async () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        'https://api.ricereviews.com/email/subscribe',
        {
          email,
        }
      );

      if (response.status === 200) {
        setSubscribed(true);
      } else {
        setError(
          response.data.message || 'An error occurred. Please try again.'
        );
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'An error occurred. Please try again.'
      );
    }

    setLoading(false);
  };

  return (
    <section className="hero-section" id="Home">
      <div className="hero-content">
        <div className="first-section" ref={firstSectionRef}>
          <h1>Your next favorite meal is just a scroll away</h1>
          <p>COMING SOON TO APP STORE</p>
          <div style={{ width: '100%' }}>
            <div className={`email-signup ${subscribed ? 'subscribed' : ''}`}>
              <input
                autoComplete="email"
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
              <button disabled={loading} onClick={handleSignup}>
                {subscribed ? (
                  "You're subscribed!"
                ) : (
                  <ArrowForwardIcon style={{ fontWeight: 'bolder' }} />
                )}
              </button>
            </div>
            <p>{error ? error : ''}</p>
          </div>
          <motion.div
            style={{ opacity: firstSectionOpacity }}
            className="food-gallery">
            <FoodGallery />
          </motion.div>
        </div>
        <motion.div
          style={{ opacity: secondSectionOpacity }}
          ref={imageContainerRef}
          className="screenshot-images second-section">
          <img src={screenshot1} alt="Hero Section" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
