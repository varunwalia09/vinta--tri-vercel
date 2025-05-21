import React, { useEffect } from 'react';
import './WorkSection.css';
import Project from './Project';
import gsap from 'gsap';

const WorkSection = () => {
  useEffect(() => {
    // Animation using GSAP
    gsap.fromTo(".trionn-description", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 4, delay: 0.5 });
  }, []);

  return (
   <>
      <section className="work-about-section">
        <div className="work-about-container">
          <div className="work-about-content">
            <h1>OUR CREATIVE</h1>
            <h1>ROAR DEFINES OUR</h1>
            <h1>LEGACY.</h1>
            <p className="work-about-description">
            OUR CREATIVE LEGACY ROAR WITH<br/> PRIDE AS WE SHOWCASE  THE VALUE  WE<br/> BRING TO OUR CLIENTS.
            </p>
           
          </div>
        </div>
</section>
    <Project/>
    </>
  );
};

export default WorkSection;
