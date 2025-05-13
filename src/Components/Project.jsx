import React from 'react';
import './Project.css'; 

const Project = () => {
  return (
    <>
      {/* Eight Section */}
      <section className="two-card-section">
        <div className="card left-card">
          <h2 className="card-title">500+</h2>
          <p className="card-description">
            AWARDS & <br />
            <span>RECOGNITION</span>
          </p>
        </div>
        <div className="card right-card-2">
          <h2 className="card-title-2">900+</h2>
          <p className="card-description-2">
            PROJECTS <br />
            COMPLETED
          </p>
        </div>
      </section>

      {/* Ninth Section */}
      <section className="two-card-section-3">
        <div className="card-3 left-card-3">
          <h2 className="card-title-3">20+</h2>
          <p className="card-description-3">
            CREATIVE <br />
            MINDS
          </p>
        </div>
        <div className="card-3 right-card-4">
          <h2 className="card-title-4">20+</h2>
          <p className="card-description-4">
            YEAR OF <br />
            COMPLETED
          </p>
        </div>
      </section>
    </>
  );
};

export default Project;
