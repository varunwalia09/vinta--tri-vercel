import React from 'react';
import './FooterTrionn.css';

function FooterTrionn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
  );
}

export default FooterTrionn;
