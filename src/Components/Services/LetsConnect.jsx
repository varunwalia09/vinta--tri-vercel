import React, { useRef, useEffect } from 'react';
import './LetsConnect.css';

const cardData = [
  {
    number: '1.',
    title: 'Research and Planning',
    points: ['Project Planning', 'Expectations Setting', 'Competitor Analysis'],
  },
  {
    number: '2.',
    title: 'Creativity and UX Design',
    points: ['Visual Moodboards', 'User Interface Design', 'User Experience Design'],
  },
  {
    number: '3.',
    title: 'Web Development',
    points: ['Frontend & Backend', 'Integration', 'Performance Optimization'],
  },
  {
    number: '4.',
    title: 'Testing & QA',
    points: ['Functional Testing', 'Cross-browser Checks', 'Bug Fixing'],
  },
  {
    number: '5.',
    title: 'Launch & Support',
    points: ['Deployment', 'Monitoring', 'Ongoing Support'],
  },
  {
    number: '6.',
    title: 'Web Designing',
    points: ['Deployment', 'Monitoring', 'Ongoing Support'],
  },
  {
    number: '7.',
    title: 'Android App',
    points: ['Deployment', 'Monitoring', 'Ongoing Support'],
  },
];

const LetsConnect = () => {
  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    const onWheel = (e) => {
      if (
        container.scrollWidth > container.clientWidth &&
        (e.deltaY > 0 || e.deltaY < 0)
      ) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div className="letsconnect-wrapper">
      <div className="letsconnect-glow" />
      <button className="letsconnect-btn">Let's connect</button>
      <h1 className="letsconnect-heading">OUR<br/>PROCESS</h1>
      <p className="letsconnect-description">
       These pillars support excellence<br/>
            in the digital jungle.
      </p>

      <div className="letsconnect-cards" ref={scrollRef}>
        {cardData.map((card, index) => (
          <div className="letsconnect-card" key={index}>
            <div className="card-number">{card.number}</div>
            <div className="card-title">{card.title}</div>
            <ul className="card-points">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetsConnect;