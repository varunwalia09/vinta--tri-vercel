import React from 'react';
import './OurExpertise.css';

const logos = [
  '/assets/logo5.jpg',
  '/assets/logo2.jpg',
  '/assets/logo3.jpg',
  '/assets/logo4.jpg',
  '/assets/logo5.jpg',
  '/assets/logo6.jpg',
  '/assets/logo2.jpg',
  '/assets/logo3.jpg',
  '/assets/logo7.jpg',
];

const OurExpertise = () => {
  return (
    <div className="expertise-wrapper">
      <h1 className="expertise-heading">Our Expertise</h1>
      
      <div className="expertise-track">
        {[...logos, ...logos].map((logo, index) => (
          <div className="expertise-card" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="expertise-img" />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="expertise-track reverse">
        {[...logos, ...logos].map((logo, index) => (
          <div className="expertise-card" key={index}>
            <img src={logo} alt={`Logo ${index}`} className="expertise-img" />
          </div>
        ))}
        {/* <h1 className="expertise-heading secondary">We've worked for</h1> */}
      </div>
    </div>
  );
};

export default OurExpertise;
