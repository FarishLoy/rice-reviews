import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Footer.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { WebsiteContext } from '../App';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { subscribed, setSubscribed } = React.useContext(WebsiteContext);

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
    <footer className="footer">
      <p className="coming-soon">COMING SOON TO APP STORE</p>
      <div className={`email-signup ${subscribed ? 'subscribed' : ''}`}>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={loading} onClick={handleSignup}>
          {subscribed ? (
            "You're subscribed!"
          ) : (
            <ArrowForwardIcon style={{ fontWeight: 'bolder' }} />
          )}
        </button>
      </div>
      <p>{error}</p>
      <nav>
        <a href="/#About">About Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </nav>
    </footer>
  );
}

export default Footer;
