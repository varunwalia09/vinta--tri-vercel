import React from 'react';
import './FooterTrionn.css';

function FooterTrionn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <div className="time-to-roar-container">
      <div className="text-section">
        <h1 className="main-heading">TIME TO</h1>
        <h1 className="main-heading">ROAR!</h1>
        <button className="lets-talk-button">Let's talk !</button>
      </div>
      <div className="contact-info">
        <div className="info-line">
          <span className="info-label">Email</span>
          <span className="info-value">vintavere@.com</span>
        </div>
        <div className="info-line">
          <span className="info-label">Call</span>
          <span className="info-value">+91 98241 82099</span>
        </div>
        <div className="info-line">
          <span className="info-label">Skype</span>
          <span className="info-value">talk.vinta</span>
        </div>
      </div>
    </div>
    <div className="footer-trionn-container">
      <div className="footer-content">
        <div className="copyright">©2025 VINTAVERSE®</div>
        {/* top arrow icon */}
        <div className="scroll-top" onClick={scrollToTop}>
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </div>
      </div>

      <img
        src="/assets/footer.jpg"
        alt="Footer Visual"
        className="footer-full-image"
      />
    </div>
    </>
  );
}

export default FooterTrionn;
