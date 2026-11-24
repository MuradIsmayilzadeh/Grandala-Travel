import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Xidmetler.css';

const services = [
  // Air Tickets
  { text: 'Air Tickets', icon: 'fa fa-plane', link: '/air-tickets' },
  // Accommodation
  { text: 'Accommodation', icon: 'fa fa-home', link: '/accommodation' },
  // Tours
  { text: 'Tours', icon: 'fa fa-bus', link: '/tours' },
  // Visa Support
  { text: 'Visa Support', icon: 'fa fa-id-card', link: '/visa' },
  // Transfer Service
  { text: 'Transport Service', icon: 'fa fa-car', link: '/transfer-service' },
];

const XidmetlerPage = () => {
  return (
    <div>
      <h2>Xidmətlər</h2>
      <div className="card-container">
        {services.map((service, index) => (
          <Link key={index} to={service.link} className="card">
            {/* Icon with class name */}
            <i className={service.icon} />
            {/* Text */}
            <p>{service.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default XidmetlerPage;
