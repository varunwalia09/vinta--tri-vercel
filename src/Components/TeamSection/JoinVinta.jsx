import React, { useEffect } from 'react';
import './JoinVinta.css';
import gsap from 'gsap';

const JoinVinta= () => {
  useEffect(() => {
    // Animation using GSAP
    gsap.fromTo(".trionn-description", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 4, delay: 0.5 });
  }, []);

  return (
   <>
      <section className="team-about-section-1">
        <div className="team-about-container-1">
          <div className="team-about-content-1">
            <h1>WANNA</h1>
            <h1>JOIN</h1>
            <h1>VINTAVERSE?</h1>
            <p className="team-about-description-1">
             We are always looking for the best<br/> talent in the Development & Desigin Market.
            </p>
            <p className="trionn-description-1">
              TRIONN® has a roaring 20+ years history<br/>of empowering companies in the<br/>corporate jungle.
            </p>
          </div>
        </div>
      </section>

      <section className="team-hero-section-1">
        <div className="team-hero-image-1"></div>
        <div className="team-hero-content-1">
      
        </div>
      </section>

   <section className="aspirations-section">
      <div className="aspirations-header">
        <h2>Do you aspire to<br/>be like a lion?</h2>
        <p>Like a powerful lion joining our pack, every fresh<br/> 
        team member strengthens our innovative and<br/> diligent wilderness.</p>
      </div>
      <div className="job-listings">
        <div className="job-item">
          <h3>Web/Mobile designers</h3>
          <button className="apply-button">Apply now!</button>
        </div>
        <div className="job-item">
          <h3>Front-end developers</h3>
          <button className="apply-button">Apply now!</button>
        </div>
        <div className="job-item">
          <h3>Back-end developers</h3>
          <button className="apply-button">Apply now!</button>
        </div>
      </div>
    </section>
    </>
  );
};

export default JoinVinta;
