import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCalendarAlt } from 'react-icons/fa';
const Footer = ({ content, t }) => {
  const currentYear = new Date().getFullYear();
  const line1 = content.line1.replace('{year}', currentYear);
  const socialMediaLinks = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://share.google/LmEd882meeooD5ciX', color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com/@manavtadharmsevacheritable2013?si=squA6xGA9qWSlcsi', color: '#FF0000' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/919712537806', color: '#25D366' },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">{content.aboutTitle}</h3>
          <p className="footer-text">{content.aboutText}</p>
          <motion.div 
              className="footer-social-media"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="social-title">Follow Us</h5>
              <div className="social-icons">
                {socialMediaLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label={social.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
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



