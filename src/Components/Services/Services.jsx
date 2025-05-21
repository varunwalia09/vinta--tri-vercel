import React, { useEffect } from 'react';
import './Services.css';

import Specialization from './Specialization';
import OurExpertise from './OurExpertise';
import LetsConnect from './LetsConnect';
import gsap from 'gsap';

const Services = () => {
  useEffect(() => {
    // Animation using GSAP
    gsap.fromTo(".service-trionn-description", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 2, delay: 0.5 });
  }, []);

  return (
   <>
      <section className="service-about-section">
        <div className="service-about-container">
          <div className="service-about-content">
            <h1>EXPERINCE</h1>
            <h1>OUR WILD DEGITAL</h1>
            <h1>MAGIC.</h1>
            <p className="service-about-description">
              Experience the wild array of<br/> 
services that make your company<br/> 
stand out.
            </p>
            <p className="service-trionn-description">
              TRIONN® has a roaring 20+ years history<br/>of empowering companies in the<br/>corporate jungle.
            </p>
          </div>
        </div>
      </section>

      <section className="service-hero-section">
        <div className="service-hero-image"></div>
        <div className="service-hero-content">
          <h1>BOUNDLESS</h1>
          <h1>CREATIVE</h1>
          <h1>REALM.</h1>
        </div>
      </section>
      <section className='service-hero-content-2'>
        <div className='service-hero-content-h'>
          <h2>  We're here to make tech businesses roar in the<br/>
        digital jungle, crafting valuable impact through<br/>
        design, branding, and development services.<br/>
        and evaluation.</h2>
         <button type="submit">TRIONN name story</button>
        </div>
      </section>

      <section className="service-right-aligned-section">
  <div className="service-right-text">
    <p>
     Challenges are the soil where our growth blossoms. Armed with digital prowess,
        we fearlessly overcome them. Bring your branding, web design, and creative challenges; our 
        lionhearted approach will leave a lasting impression.
    </p>
    {/* second paragraph */}
  </div>
</section>
{/* About card */}
    <Specialization/>
    <OurExpertise/>
    <LetsConnect/>
     
    </>
  );
};
export default Services;
