import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    if (!email) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(
        err.response?.data?.message || 'An error occurred. Please try again.'
      );
    }
  };

  return (
    <footer className="footer">
      <p className="coming-soon">COMING TO APP STORE SOON</p>
      <div className="email-signup">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSignup}>
          <ArrowForwardIcon />
        </button>
      </div>
      {message && <p>{message}</p>}
      <nav>
        <Link to="/about-us">About Us</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>

        <Link to="/terms-of-service">Terms of Service</Link>
      </nav>
    </footer>
  );
}

export default Footer;
