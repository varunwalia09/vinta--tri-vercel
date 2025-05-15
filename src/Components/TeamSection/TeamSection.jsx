import React, { useEffect } from 'react';
import './TeamSection.css';
import TeamMember from './TeamMember'
import JoinVinta from './JoinVinta';
import VintaExpertise from './VintaJungle';
import TeamTimeToRoar from './TeamTimeToRoar';
import gsap from 'gsap';

const TeamSection = () => {
  useEffect(() => {
    // Animation using GSAP
    gsap.fromTo(".trionn-description", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 4, delay: 0.5 });
  }, []);

  return (
   <>
      <section className="team-about-section">
        <div className="team-about-container">
          <div className="team-about-content">
            <h1>A</h1>
            <h1>VERSATILE</h1>
            <h1>DESIGN AGENCY.</h1>
            <p className="team-about-description">
              Combining the latest trends in design, tech, branding, and<br/> many other fields is what we do best. We don't settle to view<br/> the world from one perspective.
            </p>
            <p className="trionn-description">
              TRIONN® has a roaring 20+ years history<br/>of empowering companies in the<br/>corporate jungle.
            </p>
          </div>
        </div>
      </section>

      <section className="team-hero-section">
        <div className="team-hero-image"></div>
        <div className="team-hero-content">
          <h1>MAJESTIC</h1>
          <h1>DESIGN</h1>
          <h1>SINCE</h1>
          <h1>2000</h1>
        </div>
      </section>
      <section className='team-hero-content-2'>
        <div className='team-hero-content-h'>
          <h2> In the heart of our,<br/>
        wild team, we find <br/>
        our strength.</h2>
        </div>
      </section>

      <section className="team-right-aligned-section">
  <div className="team-right-text">
    <p>
    In our creative jungle, designers, thinkers, strategists unite like a <br/>
    lion's roar, 
    crafting vibrant projects resonating with the wild<br/> symphony of innovation.
    </p>
   
  </div>
</section>
     <TeamMember/>
     <JoinVinta/>
     <VintaExpertise/>
     <TeamTimeToRoar/>
    </>
  );
};

export default TeamSection;
