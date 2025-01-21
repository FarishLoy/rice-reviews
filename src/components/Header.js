import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Header.css";
import logoImage from "../logo-image.png";




function Header() {
  return (
       <header className="header">
    <div className="logo-image">
      <img src={logoImage} alt="Rice Reviews Logo" />
    </div>
    <h1>
      <Link to="/" className="header-title">Rice Reviews</Link>
    </h1>
  <nav>
      <Link to="#home">Home</Link>
      <Link to="#about">About Us</Link>
      <Link to="#download" className="download-btn">Download</Link>
    </nav>
  </header>
 

  );
}

export default Header;