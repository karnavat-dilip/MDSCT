import React from 'react';
import qr from '../assets/scanner.jpeg';

const Home = ({ content }) => {
  return (
    <section className="page home-page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="home-grid">
        <div>
          {content.paragraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div className="home-highlight">
          <h3>{content.highlightTitle}</h3>
          <img src={qr} alt="MDSCT UPI QR" className="home-qr" />
          <p className="home-qr-caption">
            UPI ID: <strong>{content.upiId}</strong>
          </p>
          <p className="home-qr-caption">
            Bank: <strong>{content.bank}</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;



