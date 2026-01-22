import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar = ({ t, language, setLanguage, languageOptions }) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="MDSCT Logo" className="navbar-logo" />
        <div className="navbar-title">
          <span className="navbar-title-main">MDSCT</span>
          <span className="navbar-title-sub">
            MANAVTA DHARM SEVA CHARITABLE TRUST
          </span>
        </div>
      </div>

      <button
        className="navbar-toggle"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${open ? 'open' : ''}`}>
        <NavLink to="/" end className="nav-link" onClick={handleNavClick}>
          {t.home}
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={handleNavClick}>
          {t.about}
        </NavLink>
        <NavLink to="/services" className="nav-link" onClick={handleNavClick}>
          {t.services}
        </NavLink>
        <NavLink to="/donate" className="nav-link" onClick={handleNavClick}>
          {t.donate}
        </NavLink>
        <NavLink to="/gallery" className="nav-link" onClick={handleNavClick}>
          {t.gallery}
        </NavLink>
        <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>
          {t.contact}
        </NavLink>
        <div className="language-switch">
          {languageOptions.map((opt) => (
            <button
              key={opt.code}
              className={`lang-btn ${language === opt.code ? 'active' : ''}`}
              onClick={() => setLanguage(opt.code)}
              type="button"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



