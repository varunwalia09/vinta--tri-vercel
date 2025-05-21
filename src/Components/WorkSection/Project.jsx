import React from 'react';
import './Project.css';

const Project = () => {
   return (
    <div className="project-container">

      {/* Center Image Row */}
      <div className="center-row">
        <div className="image-with-text">
          <img
            src="./assets/h1.jpg"
            alt="Center Image"
            className="center-img"
          />
          <h1 className="image-caption">LOFTLOOM</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>

      {/* First Pattern: Left Horizontal + Right Vertical */}
      <div className="row-layout">
        <div className="image-with-text">
          <img
            src="./assets/conf-3.jpg"
            alt="Left Horizontal"
            className="left-horizontal"
          />
          <h1 className="image-caption">Conference Room</h1>
          <p className="image-description">
            A beautiful conference room.
          </p>
        </div>

        <div className="image-with-text">
          <img
            src="./assets/h1.jpg"
            alt="Right Vertical"
            className="right-vertical"
          />
          <h1 className="image-caption">Modern Workspace</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>

      {/* Second Center Image Row */}
      <div className="center-row">
        <div className="image-with-text">
          <img
            src="./assets/ui.jpg"
            alt="Center Image"
            className="center-img"
          />
          <h1 className="image-caption">LOFTLOOM Again</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>

      {/* Second Pattern: Right Horizontal + Left Vertical */}
      <div className="row-layout">
        <div className="image-with-text">
          <img
            src="./assets/h1.jpg"
            alt="Left Vertical"
            className="left-vertical"
          />
          <h1 className="image-caption">Creative Studio</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>

        <div className="image-with-text">
          <img
            src="./assets/conf-3.jpg"
            alt="Right Horizontal"
            className="right-horizontal"
          />
          <h1 className="image-caption">Meeting Space</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>
    {/* again  center repeat all section */}
    <div className="center-row">
        <div className="image-with-text">
          <img
            src="./assets/ux.jpg"
            alt="Center Image"
            className="center-img"
          />
          <h1 className="image-caption">LOFTLOOM</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>
  {/* first section */}
<div className="row-layout">
        <div className="image-with-text">
          <img
            src="./assets/conf-3.jpg"
            alt="Left Horizontal"
            className="left-horizontal"
          />
          <h1 className="image-caption">Conference Room</h1>
          <p className="image-description">
            A beautiful conference room.
          </p>
        </div>

        <div className="image-with-text">
          <img
            src="./assets/h1.jpg"
            alt="Right Vertical"
            className="right-vertical"
          />
          <h1 className="image-caption">Modern Workspace</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>
      {/* center section */}
  <div className="center-row">
        <div className="image-with-text">
          <img
            src="./assets/conf-3.jpg"
            alt="Center Image"
            className="center-img"
          />
          <h1 className="image-caption">LOFTLOOM</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>
      {/* second repeat section */}

       <div className="row-layout">
        <div className="image-with-text">
          <img
            src="./assets/h1.jpg"
            alt="Left Vertical"
            className="left-vertical"
          />
          <h1 className="image-caption">Creative Studio</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>

        <div className="image-with-text">
          <img
            src="./assets/h3.jpg"
            alt="Right Horizontal"
            className="right-horizontal"
          />
          <h1 className="image-caption">Meeting Space</h1>
          <p className="image-description">
            UI/UX DESIGN.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
