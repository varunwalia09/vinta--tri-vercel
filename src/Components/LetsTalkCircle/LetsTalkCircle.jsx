import React from 'react';
import './LetsTalkCircle.css'; // Make sure your CSS file is imported

const LetsTalkCircle = () => {
  return (
    <div className="lets-talk-container">
      <div className="circle-wrapper">
        {/* Outer Circle */}
        <div className="outer-circle">
          <svg className="rotating-text" viewBox="0 0 200 200">
            <defs>
              <path id="circlePath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text fontSize="20" fill="#FF4500">
              <textPath href="#circlePath" startOffset="0%">
                LET’S TALK NOW! • LET’S TALK NOW! •LET’S TALK NOW!                                                                             
              </textPath>
            </text>
          </svg>
        </div>

        {/* Inner Circle (Logo) */}
        <div className="inner-circle">
          <img src="./assets/vinta.png" alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default LetsTalkCircle;
