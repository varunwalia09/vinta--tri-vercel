import React from 'react';
import './AboutMarquee.css';
// scroling company working cards
const logos = [
  '/assets/sport.png',
  '/assets/universal.png',
  '/assets/red.png',
  '/assets/adidas.png',
  '/assets/nike.png',
  '/assets/subway.png',
  '/assets/lg.png',
  '/assets/sport.png',
  '/assets/red.png',
];

const AboutMarquee = () => {
  return (
    
    <div className="about-marquee-wrapper">
       <h1 className="about-marquee-heading">We've worked for</h1>
      <div className="about-marquee-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="about-marquee-card" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="about-marquee-img" />
          </div>
        ))}
      </div>
      {/* Second Row */}
      <div className="about-marquee-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="about-marquee-card" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="about-marquee-img" />
          </div>
        ))}
       <h1 className="about-marquee-heading-2">We've worked for</h1>
      </div>
    </div>
  );
};

export default AboutMarquee;
