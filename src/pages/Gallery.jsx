import React from 'react';
import banner from '../assets/banner.jpeg';
import logo from '../assets/logo.jpeg';
import qr from '../assets/scanner.jpeg';

const Gallery = ({ content }) => {
  const items = content.items.map((item, idx) => {
    const img =
      idx === 1 ? logo : idx === 2 ? qr : banner; // reuse available images
    return { ...item, img };
  });

  return (
    <section className="page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.img} alt={item.title} className="gallery-image" />
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;



