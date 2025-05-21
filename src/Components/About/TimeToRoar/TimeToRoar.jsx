import React from 'react';
import './TimeToRoar.css';

function TimeToRoar() {
  return (
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
  );
}

export default TimeToRoar;