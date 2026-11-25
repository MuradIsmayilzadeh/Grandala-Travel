import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ServicePage.css";
import RequestForm from "../../components/RequestForm";
import { services } from "../../data/services";

export default function ServicePage({ slug }) {
  const service = services.find((s) => s.slug === slug);
  const [active, setActive] = useState(0);
  const tab = service.tabs[active];

  return (
    <div className="service-page">
      <section className="service-hero" style={{ backgroundImage: `linear-gradient(rgba(4,9,21,.6), rgba(4,9,21,.92)), url(${service.image})` }}>
        <div className="container">
          <Link to="/" className="crumb">Home</Link> <span className="crumb-sep">/</span> <span className="crumb current">{service.title}</span>
          <h1><i className={`fa ${service.icon}`} /> {service.title}</h1>
          <p>{service.summary}</p>
        </div>
      </section>

      <section className="container service-card">
        {service.tabs.length > 1 && (
          <div className="tabs" role="tablist">
            {service.tabs.map((t, i) => (
              <button key={t.label} role="tab" aria-selected={i === active} className={`tab ${i === active ? "active" : ""}`} onClick={() => setActive(i)}>
                {t.label}
              </button>
            ))}
          </div>
        )}
        <h2>{tab.label}</h2>
        <p className="muted">Fill in the details and we'll get back to you with the best offer.</p>
        <RequestForm key={`${slug}-${active}`} service={service} tab={tab} />
      </section>
    </div>
  );
}
