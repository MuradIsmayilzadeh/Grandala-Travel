import React from 'react';
import { Link } from 'react-router-dom';
import img from "../icons/bg.jpg"
import './Slider.css';

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider-image">
        <img src={img} alt="Slider Image" />
        <div className="slider-buttons">
          <div className="slider-text">Travel with Grandala Travel</div>
          <div className='buttons-slider'>
          <Link style={{ textDecoration: 'none' }} className="slider-button">Book Now</Link>
            <div className='or'>OR</div>
            <Link style={{ textDecoration: 'none' }} className="slider-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
