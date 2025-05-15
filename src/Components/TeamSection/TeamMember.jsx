import React, { useRef, useEffect } from 'react';
import './TeamMember.css';

const teamMembers = [
  { name: 'Vinta', role: 'Founder & CEO', image: '/assets/vintamam.jpg' },
  { name: 'Diwakar Kalia', role: 'CTO', image: '/assets/logo2.jpg' },
  { name: 'Reza Hashmi', role: 'UI/UX Designer', image: '/assets/reza.jpg' },
  { name: 'Leisha', role: 'WordPress Developer', image: '/assets/leisha.jpg' },
  { name: 'Manoj Kumar', role: 'Web Designer', image: '/assets/manoj.jpg' },
  { name: 'Varun Walia', role: 'Web Designer', image: '/assets/varun.png' },
];

const TeamMember = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = containerRef.current;

    // Clone the list 3x for infinite loop illusion
    const totalWidth = slider.scrollWidth / 3;

    // Scroll to middle copy on load
    slider.scrollLeft = totalWidth;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      slider.classList.add('active');
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove('active');
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 2; // control speed
      slider.scrollLeft = scrollLeft.current - walk;
    };

    const handleScroll = () => {
      const totalScroll = slider.scrollWidth;
      const visibleWidth = slider.offsetWidth;
      const maxScroll = totalScroll - visibleWidth;

      if (slider.scrollLeft <= 0) {
        // If at beginning, jump to middle
        slider.scrollLeft = totalWidth;
      } else if (slider.scrollLeft >= maxScroll - 10) {
        // If near end, jump back to middle
        slider.scrollLeft = totalWidth;
      }
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('scroll', handleScroll);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Repeat members 3x to simulate infinite scroll
  const repeatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="team-cards-container" ref={containerRef}>
      {repeatedMembers.map((member, index) => (
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

export default TeamMember;
