import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ content, t }) => {
  const currentYear = new Date().getFullYear();
  const line1 = content.line1.replace('{year}', currentYear);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">{content.aboutTitle}</h3>
          <p className="footer-text">{content.aboutText}</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">{content.quickLinks}</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">{t.nav.home}</Link>
            </li>
            <li>
              <Link to="/about">{t.nav.about}</Link>
            </li>
            <li>
              <Link to="/services">{t.nav.services}</Link>
            </li>
            <li>
              <Link to="/donate">{t.nav.donate}</Link>
            </li>
            <li>
              <Link to="/gallery">{t.nav.gallery}</Link>
            </li>
            <li>
              <Link to="/contact">{t.nav.contact}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">{content.contactTitle}</h3>
          <div className="footer-contact">
            <p>
              <strong>{content.addressLabel}:</strong> Palanpur (B.K.), Gujarat, India
            </p>
            <p>
              <strong>{content.phoneLabel}:</strong>{' '}
              <a href="tel:+919712537806">+91 97125 37806</a>
            </p>
            <p>
              <strong>{content.emailLabel}:</strong>{' '}
              <a href="mailto:vaghelaarjunbhai01@gmail.com">
                vaghelaarjunbhai01@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{line1}</p>
        <p>{content.line2}</p>
        <p className="footer-registration">{content.registration}</p>
      </div>
    </footer>
  );
};

export default Footer;



