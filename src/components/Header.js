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
        <Link to="/" className="header-title">
          Rice Reviews
        </Link>
      </div>
      <nav>
        <Link to="#home">Home</Link>
        <Link to="#about">About Us</Link>
      </nav>
    </header>
  );
}

export default Header;
