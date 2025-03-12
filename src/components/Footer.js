import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Footer.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WebsiteContext } from '../App';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const { subscribed, setSubscribed } = React.useContext(WebsiteContext);

  const handleSignup = async () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }

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
  };

  return (
    <footer className="footer">
      <p className="coming-soon">COMING TO APP STORE SOON</p>
      <div className={`email-signup ${subscribed ? 'subscribed' : ''}`}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignup}>
          {subscribed ? (
            "You're subscribed!"
          ) : (
            <ArrowForwardIcon style={{ fontWeight: 'bolder' }} />
          )}
        </button>
      </div>
      <p>{error}</p>
      <nav>
        <a href="/about-us">About Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
