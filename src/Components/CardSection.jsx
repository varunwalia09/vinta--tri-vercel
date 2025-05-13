import React from 'react';
import './CardSection.css';
const CardSection = () => {
  const cards = [
    { logo: '/assets/logo5.jpg', name: 'Vinta', position: 'CEO' },
    { logo: '/assets/logo4.jpg', name: 'Diwakar Kalia', position: 'CTO' },
    { logo: '/assets/logo4.jpg', name: 'Diwakar Kalia', position: 'CTO' },
    { logo: '/assets/logo3.jpg', name: 'Reza Hashmi', position: 'UI/UX Designer' },
    { logo: '/assets/logo3.jpg', name: 'Varun Walia', position: 'Web Designer' },
    { logo: '/assets/logo7.jpg', name: 'Leisha', position: 'WordPress Developer' },
    { logo: '/assets/logo6.jpg', name: 'Manoj Kumar', position: 'Web Designer' },
  ];

  return (
    <div className="card-wrapper"> {/* Wrapper div added here */}
      <section className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.logo} alt={card.name} className="card-logo" />
            <h2 className="card-name">{card.name}</h2>
            <p className="card-position">{card.position}</p>
            <button className="card-button">Watch Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSection;
