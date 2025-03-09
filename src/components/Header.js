import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logoImage from '../assets/logo-image.png';

function Header() {
  return (
    <header className="header">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
        }}>
        <div className="logo-image">
          <img src={logoImage} alt="Rice Reviews Logo" />
        </div>
        <a href="/" className="header-title">
          Rice Reviews
        </a>
      </div>
      <nav>
        <a href="#Home">Home</a>
        <a href="#About">About Us</a>
      </nav>
    </header>
  );
}

export default Header;
