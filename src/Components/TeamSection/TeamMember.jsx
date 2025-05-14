import React, { useRef, useEffect } from 'react';
import './TeamMember.css';

const teamMembers = [
  {
    name: 'Vinta',
    role: 'Founder & CEO',
    image: '/assets/logo5.jpg', // ✅ Correct path (public folder: remove `/public`)
  },
  {
    name: 'Diwakar Kalia',
    role: 'CTO',
    image: '/assets/logo2.jpg',
  },
  {
    name: 'Reza Hashmi',
    role: 'UI/UX Designer',
    image: '/assets/logo3.jpg',
  },
  {
    name: 'Leisha',
    role: 'WordPress Developer',
    image: '/assets/logo5.jpg',
  },
  {
    name: 'Manoj Kumar',
    role: 'Web Designer',
    image: '/assets/logo4.jpg',
  },
  {
    name: 'Varun Walia',
    role: 'Web Designer',
    image: '/assets/logo3.jpg',
  },
];

const TeamCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const slider = containerRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="team-cards-container" ref={containerRef}>
      {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
        <div className="team-card" key={index}>
          <img src={member.image} alt={member.name} className="team-member-image" />
          <div className="team-member-details">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
