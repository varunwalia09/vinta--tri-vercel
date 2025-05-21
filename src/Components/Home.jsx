import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Project from './Project';
import CardSection from '../Components/CardSection';
import MarqueeText from './MarqueeText';
import JungleTrekSection from './JungleTrekSection';

import { FaDribbble, FaLinkedin, FaInstagram, FaFacebook, FaBehance } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoContainerRef.current;
    const video = videoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: videoEl,
        start: 'top top', // Start the animation when the video enters the top of the page
        end: 'bottom top', // End when the video reaches the top of the page
        scrub: true, // Smoothly syncs animation with scroll
        onEnter: () => video.play(), // Play the video when it enters the viewport
        onLeaveBack: () => video.pause(), // Pause the video when it leaves the viewport
      },
    })
      .fromTo(
        videoEl,
        { width: '100px', height: '100px', scale: 1, borderRadius: '40px' }, // Initial state: small size
        { width: '150px', height: '100px', scale: 1.5, borderRadius: '4px', duration: 1 } // Final state: full screen
      );
  }, []);


  return (
    <div>
      <section className="home-section">
        <h1>ROAR IN THE<br /> DIGITAL WILDERNESS</h1>
      </section>
      <section className='h2-head'>
        <h2>We roar with success, delivering the TRIONN<br />
          through versatile design, branding and the latest<br />
          tech development to companies.</h2>
      </section>
      <button className="down-arrow-btn"onClick={() => { window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }}
  >
   ↓
</button>
      <section className='home-btn'>
        <button type="submit">Explore Work</button>
          <div className="video-animation" ref={videoContainerRef}>
          <video
            ref={videoRef}
            className="video-animation-video"
            src="/vinta.mp4"
            muted
            loop
            autoPlay
          />
        </div>

        <button type="submit">Get In Touch</button>
      </section>

      <section className='second-section'>
        <h1>RECENT</h1>
      </section>
      <section className='third-section'>
        <h1>WORK</h1>
      </section>
      <section className='forth-section'>
      <h2>In the creative wilderness,<br/>
      clients find our work truly<br/>
      beloved.
      </h2>
      <button type="submit">Explore Work</button>
      </section>
      {/* 3card image section */}
      <section className="card-with-image" >
      <div className="text-content">
        <h2 className="card-title-7">LOFTLOOM</h2>
        <p className="card-description-7" >UI Design, UX Wireframes</p>
        <Link to="/project">
    <button className="card-button-7">View Project</button>
    </Link>
      </div>
      <div className="image-content">
        <img src="./assets/h1.jpg" alt="Image description" className="card-image" />
      </div>
      </section>

      <section className="card-with-image-2">
  <div className="image-content-2">
    <img src="./assets/h2.jpg" alt="Image description" className="card-image" />
  </div>
  <div className="text-content-8">
    <h2 className="card-title-8">MUSIC</h2>
    <p className="card-description-8">Research, UX/UI Design</p>
    <Link to="/project">
  <button className="card-button-8">View Project</button>
</Link>
  </div>
</section>

<section className="card-with-image-9" >
      <div className="text-content-9">
        <h2 className="card-title-9">TECHNIS</h2>
        <p className="card-description-9" >UI/UX Design,  Development</p>
        <Link to="/project">
    <button className="card-button-9">View Project</button>
    </Link>
      </div>
      <div className="image-content-3">
        <img src="./assets/h3.jpg" alt="Image description" className="card-image" />
      </div>
      </section>

      {/* 3card image section end */}
      {/* fifth section */}
      <section className='fifth-section'>
        <h1>WHO</h1>
        <h2>WEARE</h2>
      </section>

      <section className='sixth-seection'>
        <h2>As an award-winning agency within<br/>
          the digital jungle, TRIONN transcends<br/>
          aesthetics, crafting your visin into a <br/>
         legacy that<br/>
          endures.</h2>
      </section>
      <section className='seven-section'>
        <h1>We roar with creativity,staying updated<br/>
          with  the latest tech to make your brnad a <br/>
          formidable force in the digital wilderness<br/>
          and deliver exceptional website and app <br/>
          <span>experiences</span></h1>
          <Link to='/about'>
          <button className='about-button'>About Us</button>
         </Link>
          </section>
   
    <Project />
  <CardSection />
  <MarqueeText/>
  <JungleTrekSection/>

{/* drible social icons sections */}
<section className="jungle-trek-section">
      <div className="jungle-trek-text">
        <h1>JOIN OUR</h1>
        <h1>JUNGLE</h1>
        <h1>TREK</h1>
      </div>
      <div className="dribbble-link">
        <span>Dribbble</span>
      <FaDribbble className="dribbble-react-icon" />
      </div>
      <div className="dribbble-link">
        <span>LinkedIn</span>
        <FaLinkedin className="linkedin-react-icon" />
      </div>
      <div className="dribbble-link">
        <span>Instagram</span>
        <FaInstagram className="instagram-react-icon" />
      </div>
      <div className="dribbble-link">
        <span>Facebook</span>
        <FaFacebook className="facebook-react-icon" />
      </div>
      <div className="dribbble-link">
        <span>Behance</span>
        <FaBehance className="behance-react-icon" />
      </div>
    </section>
    </div>
  );
};

export default Home;


