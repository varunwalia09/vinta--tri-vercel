import React from 'react';
import './AwardSection.css'; // Create this CSS file

function AwardsSection() {
  const awards = [
    { name: "A' Design Awards & competition", description: "Silver Medal" },
    { name: "AWWWARDS", description: "2X - Honnerable Mention" },
    { name: "CSS Design Awards", description: "2X - Website of the day" },
    { name: "CSS Winners", description: "2X - Website of the day" },
    { name: "CSS Reels", description: "Featured of the day" },
  ];

  return (
    <div className="awards-section-single">
      <div className="awards-list-single">
        {awards.map((award, index) => (
          <div key={index} className="award-item-single">
            <div className="award-name-single">{award.name}</div>
            <div className="award-description-single">{award.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsSection;