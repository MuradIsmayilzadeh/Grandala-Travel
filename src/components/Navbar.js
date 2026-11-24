import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../icons/logo.jpg";
import { services, contact } from "../data/services";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" onClick={close} className="nav-logo"><img src={logoImage} alt="Grandala Travel" /></Link>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <i className={`fa ${open ? "fa-times" : "fa-bars"}`} />
        </button>
        <nav className={`nav-items ${open ? "open" : ""}`}>
          {services.map((s) => (
            <NavLink key={s.slug} to={`/${s.slug}`} onClick={close} className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
              <i className={`fa ${s.icon}`} /> {s.title}
            </NavLink>
          ))}
          <span className="nav-social">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa fa-whatsapp" /></a>
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram" /></a>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
