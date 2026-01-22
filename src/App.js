import React, { useMemo, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Donate from './pages/Donate';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import banner from './assets/banner.jpeg';
import { getStrings, languages } from './i18n';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [language, setLanguage] = useState('en');

  const t = useMemo(() => getStrings(language), [language]);

  useEffect(() => {
    document.title = t.meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.meta.description);
    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute('content', t.meta.keywords);
    document.documentElement.lang = language === 'gu' ? 'gu' : language === 'hi' ? 'hi' : 'en';
  }, [language, t]);

  return (
    <div className="app">
      <ScrollToTop />
      <header className="hero" style={{ backgroundImage: `url(${banner})`,backgroundSize: 'contain' }}>
        <div className="hero-overlay">
          <Navbar
            t={t.nav}
            language={language}
            setLanguage={setLanguage}
            languageOptions={languages}
          />
          <div className="hero-content">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <p className="hero-subtitle">{t.hero.tagline}</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home content={t.home} />} />
          <Route path="/about" element={<About content={t.about} />} />
          <Route path="/services" element={<Services content={t.services} />} />
          <Route path="/donate" element={<Donate content={t.donate} />} />
          <Route path="/gallery" element={<Gallery content={t.gallery} />} />
          <Route path="/contact" element={<Contact content={t.contact} />} />
        </Routes>
      </main>

      <Footer content={t.footer} t={t} />
      <WhatsAppButton />
    </div>
  );
};

export default App;


