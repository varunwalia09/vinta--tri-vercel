import React from 'react';
import './AboutMarquee.css';

const logos = [
  '/src/assets/logo1.jpg',
  '/src/assets/logo2.jpg',
  '/src/assets/logo3.jpg',
  '/src/assets/logo4.jpg',
  '/src/assets/logo5.jpg',
  '/src/assets/logo6.jpg',
  '/src/assets/logo2.jpg',
  '/src/assets/logo3.jpg',
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
      </div>
    </div>
  );
};

export default AboutMarquee;
