import React from "react";
import { Link } from "react-router-dom";
import { services, contact } from "../data/services";
import logoImage from "../icons/logo.jpg";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <img src={logoImage} alt="Grandala Travel" className="footer-logo" />
        <p>Your travel partner in Azerbaijan and beyond: flights, hotels, tours, visas and transport, all in one place.</p>
      </div>
      <div>
        <h4>Services</h4>
        <ul>{services.map((s) => <li key={s.slug}><Link to={`/${s.slug}`}>{s.title}</Link></li>)}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" /> +994 050 444 26 74</a></li>
          <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /> @grandalatravel</a></li>
          <li><i className="fa fa-map-marker" /> Baku, Azerbaijan</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">© {new Date().getFullYear()} Grandala Travel. All rights reserved.</div>
  </footer>
);

export default Footer;
