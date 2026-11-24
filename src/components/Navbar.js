import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../icons/logo.jpg'; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="nav-link">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="nav-logo-image" />
          </div>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/air-tickets">
          <button className="nav-button">
            <i className="fa fa-plane" /> <a>Air Tickets</a>
          </button>
        </Link>
        <Link to="/transfer-service">
          <button className="nav-button">
            <i className="fa fa-truck" /><a>Transport service</a>
          </button>
        </Link>
        <Link to="/visa"  className='notformobile'>
          <button className="nav-button">
            <i className="fa fa-id-card" /> 
            <a>
            Visa
            </a>
          </button>
        </Link>
        <Link to="/accommodation">
          <button className="nav-button">
            <i className="fa fa-home" /> <a>Accommodation</a>
          </button>
        </Link>
        <Link to="/tours" className='notformobile'>
          <button className="nav-button">
            <i className="fa fa-bus" /> <a>Tours</a>
          </button>
        </Link>
        <div className='cnu notformobile' >|  Contact Us:</div>
        <Link to="https://wa.me/9940504442674">
          <button className="nav-button">
          <i className="fa fa-whatsapp" />
          </button>
        </Link>
        <Link to="https://www.instagram.com/grandalatravel/">
          <button className="nav-button">
            <i className="fa fa-instagram" />
          </button>
        </Link>
      </div>
      </nav>
  );
}

export default Navbar;
