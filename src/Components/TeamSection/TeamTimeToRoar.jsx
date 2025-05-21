import React, { useState } from 'react';
import './TeamTimeToRoar.css';

function TeamTimeToRoar() {
  const [hoverTransform, setHoverTransform] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    setHoverTransform({
      transform: `translate(${offsetX * 0.2}px, ${offsetY * 0.2}px)`,
    });
  };

  const resetTransform = () => {
    setHoverTransform({ transform: 'translate(0, 0)' });
  };

  return (
    <div className="Team-to-roar-container">
      <div className="Team-text-section">
        <h1 className="Team-main-heading">TIME TO</h1>
        <h1 className="Team-main-heading">ROAR!</h1>
        <button className="Team-lets-talk-button">Let's talk !</button>
      </div>

      <div className="Team-contact-info">
        <div className="Team-info-line">
          <span className="Team-info-label">Email :-</span>
          <span
            className="Team-info-value"
            style={hoverTransform}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
          >
            vintaverse@gmail.com
          </span>
        </div>

        <div className="Team-info-line">
          <span className="Team-info-label">Call</span>
          <span
            className="Team-info-value"
            style={hoverTransform}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
          >
            +91 98241 82099
          </span>
        </div>

        <div className="Team-info-line">
          <span className="Team-info-label">Skype</span>
          <span
            className="Team-info-value"
            style={hoverTransform}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
          >
            talk.vinta
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamTimeToRoar;
