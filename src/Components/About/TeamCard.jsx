import React, { useEffect, useRef } from 'react';
import './TeamCard.css';

const TeamCard = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const cards = [
    { logo: '/assets/logo5.jpg', name: 'Vinta', position: 'CEO', content: 'Watch Now' },
    { logo: '/assets/logo4.jpg', name: 'Diwakar Kalia', position: 'CTO', content: 'Watch Now' },
    { logo: '/assets/logo3.jpg', name: 'Reza Hashmi', position: 'UI/UX', content: 'Creative UI Expert' },
    { logo: '/assets/logo3.jpg', name: 'Varun Walia', position: 'Web Designer', content: 'Frontend Dev' },
    { logo: '/assets/logo7.jpg', name: 'Leisha', position: 'WordPress Developer', content: 'WordPress Ninja' },
    { logo: '/assets/logo6.jpg', name: 'Manoj Kumar', position: 'Web Designer', content: 'Design Specailist' },
  ];

  const infiniteCards = [...cards, ...cards];

  // Auto Scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollSpeed = 1;

    const autoScroll = setInterval(() => {
      if (!scrollContainer) return;
      scrollContainer.scrollLeft += scrollSpeed;

      // Reset scroll position for infinite loop
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  // Mouse drag scroll
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div>
      {/* Tenth Section */}
      <section className="tenth-section-1">
        <h1>PARTNER <br /> LOVE</h1>
      </section>

      {/* Eleventh Section */}
      <section className="eleven-section-1">
        <h1>
          Take heed, as the<br />
          lion's roar in our client<br />
          reviews resounds.
        </h1>
      </section>

      {/* Team Scroll Container */}
      <div
        className="team-scroll-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="team-card-track">
          {infiniteCards.map((card, index) => (
            <div className="team-scroll-card" key={index}>
              <img src={card.logo} alt={card.name} className="team-card-logo" />
              <h2 className="team-card-name">{card.name}</h2>
              <p className="team-card-position">{card.position}</p>
              <div className="team-card-content">{card.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
