import React from 'react';
import './VintaJungle.css';

const vintalogoTop = [
  '/assets/vinta1.jpg',
  '/assets/vinta10.jpg',
  '/assets/manoj.jpg',
  '/assets/leisha.jpg',
  '/assets/vintamam.jpg',
];

const vintalogoBottom = [
  '/assets/reza.jpg',
  '/assets/vinta6.jpg',
  '/assets/vinta10.jpg',
  '/assets/varun.png',
 '/assets/vintamam.jpg',
];


const VintaJungle = () => {
  return (
    <div className="vintalogo-wrapper">
      <h1 className="vintalogo-heading">Vinta Creative Jungle!</h1>
      
  <div className="vintalogo-track">
  {[...vintalogoTop, ...vintalogoTop].map((logo, index) => (
    <div className="vintalogo-card" key={index}>
      <img src={logo} alt={`Logo ${index}`} className="vintalogo-img" />
    </div>
  ))}
</div>

<div className="vintalogo-track reverse">
  {[...vintalogoBottom, ...vintalogoBottom].map((logo, index) => (
    <div className="vintalogo-card" key={index}>
      <img src={logo} alt={`Logo ${index}`} className="vintalogo-img" />
    </div>
  ))}
</div>
    </div>
  );
};

export default VintaJungle;
