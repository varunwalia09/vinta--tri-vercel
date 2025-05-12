import React from 'react';
import './JungleTrekSection.css';

const JungleTrekSection = () => {
  const cardsLeft = [
    { id: 1, src: '/src/assets/astro1.jpg', alt: 'Image 1' },
    { id: 2, src: '/src/assets/astro1.jpg', alt: 'Image 2' },
    { id: 3, src: '/src/assets/astro1.jpg', alt: 'Image 3' }
  ];

  const cardsRight = [
    { id: 4, src: '/src/assets/astro1.jpg', alt: 'Image 4' },
    { id: 5, src: '/src/assets/astro1.jpg', alt: 'Image 5' },
    { id: 6, src: '/src/assets/astro1.jpg', alt: 'Image 6' }
  ];

  return (
    <div className="card-container">
      <div className="card-column">
        {cardsLeft.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.src} alt={card.alt} />
          </div>
        ))}
      </div>

      <div className="card-column">
        {cardsRight.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.src} alt={card.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JungleTrekSection;
