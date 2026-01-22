import React from 'react';

const About = ({ content }) => {
  return (
    <section className="page">
      <div className="section-header">
        <h2>{content.title}</h2>
        <p className="section-subtitle">{content.subtitle}</p>
      </div>

      <div className="two-column">
        <div>
          {content.paragraphs.slice(0, Math.ceil(content.paragraphs.length / 2)).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        <div>
          {content.paragraphs.slice(Math.ceil(content.paragraphs.length / 2)).map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      <div className="about-facts">
        <div className="fact-card">
          <h3>{content.factsTitleFounded || 'Founded'}</h3>
          <p>{content.facts.founded}</p>
        </div>
        <div className="fact-card">
          <h3>{content.factsTitleLocation || 'Location'}</h3>
          <p>{content.facts.location}</p>
        </div>
        <div className="fact-card">
          <h3>{content.factsTitleContact || 'Contact'}</h3>
          <p>{content.facts.contactMobile}</p>
          <p>{content.facts.contactEmail}</p>
        </div>
      </div>
    </section>
  );
};

export default About;



