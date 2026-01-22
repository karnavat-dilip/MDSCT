import React from 'react';

const Services = ({ content }) => {
  return (
    <section className="page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="services-grid">
        {content.list.map((service) => (
          <div key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;



