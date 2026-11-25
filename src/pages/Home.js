import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bg from "../icons/bg.jpg";
import { services, contact } from "../data/services";

const reasons = [
  ["fa-clock-o", "24/7 support", "We're reachable any time on WhatsApp, before and during your trip."],
  ["fa-money", "Best prices", "We compare suppliers to get you the best fares and rates."],
  ["fa-shield", "Trusted partner", "Licensed agency with hundreds of happy travellers."],
];

function Home() {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `linear-gradient(100deg, rgba(4,9,21,.92) 30%, rgba(4,9,21,.35)), url(${bg})` }}>
        <div className="container">
          <p className="eyebrow">Grandala Travel</p>
          <h1>Travel the world,<br />we handle the rest.</h1>
          <p className="hero-sub">Flights, hotels, tours, visas and transfers, planned by people who know Azerbaijan and the world.</p>
          <div className="hero-actions">
            <Link to="/tours" className="btn btn-primary">Book a tour</Link>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-light"><i className="fa fa-whatsapp" /> Contact us</a>
          </div>
        </div>
      </section>

      <section className="container section">
        <p className="eyebrow">What we offer</p>
        <h2 className="section-title">Our services</h2>
        <div className="service-grid">
          {services.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="service-tile">
              <div className="tile-img" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="tile-body">
                <span className="tile-icon"><i className={`fa ${s.icon}`} /></span>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
                <span className="tile-more">Request now <i className="fa fa-arrow-right" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="container">
          <h2 className="section-title light">Why travel with us</h2>
          <div className="why-grid">
            {reasons.map(([icon, title, text]) => (
              <div key={title} className="why-item">
                <i className={`fa ${icon}`} />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
