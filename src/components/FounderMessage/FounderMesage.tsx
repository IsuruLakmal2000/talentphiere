// CEOSection.tsx
import React from 'react';
import './FounderMessage.css'; 
import mapImage from './map.png'; 

const CEOSection: React.FC = () => {
  return (
    <section className="ceo-message-section">
      <div className="ceo-content">
        <h1>Great talent is global</h1>
        <p>I've been lucky enough to work with global talent throughout my career — especially with folks in Sri Lanka, who deeply impressed me by their skill set, tenacity, drive, and overall business savvy.</p>
        <p>At the same time, I knew entrepreneurs who were struggling to find great local talent.</p>

        <h2>That was the start of Oceans.</h2>
        <p>With the power of remote work, we're able to connect talented global individuals (we call them Divers) with fast-growing businesses around the world.</p>
        <p>Our commitment is to facilitate the best working relationship between our clients and our Divers. That means a deep understanding of needs and motivations on both sides.</p>
        <p>We promise our clients the best talent, which is why our hiring process is 6 steps long, and includes in depth training and support.</p>
        <p>I’ve seen first hand the impact that Global Talent done right can make and I’m grateful for the opportunity to share that experience with you.</p>

        <p className="ceo-signature">
          <strong>Ian Myers</strong><br />
          Founder @ Oceans
        </p>
      </div>
      <div className="ceo-map-container">
        <img src={mapImage} alt="Map of Sri Lanka with talent locations" className="ceo-map" />
      </div>
    </section>
  );
};

export default CEOSection;