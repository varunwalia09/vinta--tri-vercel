import React from 'react';
import './JungleTrekSection.css';

const JungleTrekSection = () => {
  const leftImages = [
    { id: 1, src: '/assets/e1.jpg', alt: 'Image 1' },
    { id: 2, src: '/assets/e3.jpg', alt: 'Image 2' },
    { id: 3, src: '/assets/e2.jpg', alt: 'Image 3' }
  ];

  const rightImages = [
    { id: 4, src: '/assets/e5.jpg', alt: 'Image 4' },
    { id: 5, src: '/assets/e2.jpg', alt: 'Image 5' },
    { id: 6, src: '/assets/e3.jpg', alt: 'Image 6' }
  ];

  return (
    <div className="jungle-trek-container">
      <div className="jungle-trek-column">
        {leftImages.map((image) => (
          <div className="jungle-trek-card" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="jungle-trek-column">
        {rightImages.map((image) => (
          <div className="jungle-trek-card" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default JungleTrekSection;
