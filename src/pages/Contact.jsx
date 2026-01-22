import React from 'react';

const Contact = ({ content }) => {
  const whatsappUrl = `https://wa.me/919712537806`;
  const callUrl = `tel:+919712537806`;
  const emailUrl = `mailto:${content.email}`;

  return (
    <section className="page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <h3>{content.org}</h3>
          <p>
            <strong>Established:</strong> {content.established}
          </p>
          <p>
            <strong>Address:</strong> {content.address}
          </p>
          <p>
            <strong>Email:</strong> <a href={emailUrl}>{content.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href={callUrl}>{content.phone}</a>
          </p>
        </div>

        <div className="contact-actions">
          <h3>{content.quick}</h3>
          <p>{content.quickNote}</p>
          <div className="contact-buttons">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              {content.whatsapp}
            </a>
            <a href={callUrl} className="btn btn-call">
              {content.call}
            </a>
          </div>
          <p className="contact-note">{content.availability}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


