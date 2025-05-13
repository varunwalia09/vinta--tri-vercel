import React from 'react';
import './Specialization.css';


const Specialization = () => {


  return (
    <>
    <div className="specialization-card">
      <div className="specialization-left">
        <div className="glow-dot"></div>
        <h1 className="specialization-title">DESIGN</h1>
      </div>

      <div className="specialization-right">
        <p className="specialization-description">
          Your designs, a fierce roar in the digital wilderness, carve an<br/>
          indelible social footprint, capturing the very essence of your<br/>
          unique identity.
        </p>

        <div className="specialization-columns">
          <ul>
            <li>User interface</li>
            <li>User experience</li>
            <li>Websites</li>
            <li>Visual design</li>
            <li>Prototypes</li>
          </ul>
          <ul>
            <li>Web & Mobile apps</li>
            <li>SaaS product design</li>
            <li>Design systems</li>
            <li>Interaction design</li>
          </ul>
        </div>
      </div>
    </div>
      {/* Second card - NEW class names */}
      <div className="branding-card">
        <div className="branding-left">
          <div className="branding-dot"></div>
          <h1 className="branding-title">BRANDING</h1>
        </div>
        <div className="branding-right">
          <p className="branding-description">
            Our goal is your brand's wild influence. Exclusive logos,
             mockups, and corporate identities make your unique value stand out.
          </p>
          <div className="branding-columns">
            <ul>
              <li>Brand Strategy</li>
              <li>Visual Identity</li>
              <li>Logo Design</li>
              <li>Brand Guidelines</li>
            </ul>
            <ul>
              <li>Packaging</li>
              <li>Brand Voice</li>
              <li>Rebranding</li>
              <li>Brand Assets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third card - NEW class names */}
      <div className="development-card">
        <div className="development-left">
          <div className="development-dot"></div>
          <h1 className="development-title">DEVELOPMENT</h1>
        </div>
        <div className="development-right">
          <p className="development-description">
           In this design jungle, we don't just roar concepts;
            we bring them to life with practicality, emphasizing micro animations and 
            interactions.
          </p>
         <div className="development-right">
  <div className="specialization-columns">
    <ul>
      <li>Frontend </li>
      <li>Html5</li>
      <li>Css</li>
      <li>Figma</li>
      <li>JavaScript</li>
      <li>React / Next.js</li>
      <li>Web animation</li>
      <li>CMS integration</li>
    </ul>
    <ul>
      <li>Backend </li>
      <li>eCommerce</li>
      <li>API integrations</li>
      <li>Maintenance</li>
    </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Specialization;