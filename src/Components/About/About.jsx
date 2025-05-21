import React, { useEffect } from 'react';
import './About.css';
import AboutCard from './AboutCard';
import TeamCard from './TeamCard';
import AboutMarquee from './AboutMarquee';
import HonorsSection from './HonorsSection';
import AwardsSection from './Award/AwardsSection';
import TimeToRoar from './TimeToRoar/TimeToRoar';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    // Animation using GSAP
    gsap.fromTo(".trionn-description", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 2, delay: 0.5 });
  }, []);

  return (
   <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h1>A</h1>
            <h1>VERSATILE</h1>
            <h1>DESIGN AGENCY.</h1>
            <p className="about-description">
              Combining the latest trends in design, tech, branding, and<br/> many other fields is what we do best. We don't settle to view<br/> the world from one perspective.
            </p>
            <p className="trionn-description">
              TRIONN® has a roaring 20+ years history<br/>of empowering companies in the<br/>corporate jungle.
            </p>
          </div>
        </div>
      </section>

      <section className="hero-section">
        <div className="hero-image"></div>
        <div className="hero-content">
          <h1>MAJESTIC</h1>
          <h1>DESIGN</h1>
          <h1>SINCE</h1>
          <h1>2000</h1>
        </div>
      </section>
      <section className='hero-content-2'>
        <div className='hero-content-h'>
          <h2> Embracing the journey, we cater to every need,<br/>
        collaborating to pave the road for our diverse<br/>
        creative services to flourish in the business<br/>
        jungle. We are the roaring digital agency,<br/>
        boldly navigating the entire digital spectrum,<br/>
        from user research to branding, development,<br/>
        and evaluation.</h2>
         <button type="submit">TRIONN name story</button>
        </div>
      </section>

      <section className="right-aligned-section">
  <div className="right-text">
    <p>
      Infused with the lion's determination, we partner intimately with clients,
      exploring their lofty goals and subtle nuances, adeptly shifting from the theoretical
      to the pragmatic, bringing their vision to fruition.
    </p>
    {/* second paragraph */}
    <p  className="paragraph-gap">
      We meticulously craft Web Interfaces, Brands, iOS and Android application designs,
      and bespoke Web solutions, Content management, and e-commerce development,
      bringing their vision to life with a roar of creativity.
    </p>
  </div>
</section>
{/* About card */}
     <AboutCard />
     <TeamCard/>
     <AboutMarquee/>
     <HonorsSection/>
     <AwardsSection/>
     <TimeToRoar/>
     
    </>
  );
};

export default About;
