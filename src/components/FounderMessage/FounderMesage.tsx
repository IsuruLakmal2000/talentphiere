// CEOSection.tsx
import React from 'react';
import './FounderMessage.css'; 
import mapImage from './map.png'; 

const CEOSection: React.FC = () => {
  return (
    <section className="ceo-message-section">
      <div className="ceo-content">
        <h1>Excellence knows no borders</h1>

<p>Throughout my career, I’ve witnessed a simple truth: brilliance isn't limited by geography. I've worked with incredible professionals from [insert region, e.g., Asia / all over the world] who possessed unmatched skill, tenacity, and drive.</p>

<p>Yet, I constantly saw ambitious business leaders struggling to find the right people in their local markets. The talent was out there, but they couldn't reach it.</p>

<h2>That’s why we built Talentphere.</h2>

<p>We exist to bridge the gap between high-growth businesses and the world’s hidden gems. We don't just fill seats; we connect you with dedicated professionals who are eager to help you build.</p>

<p>Our philosophy is simple: quality over quantity. We believe that a successful partnership requires a deep understanding of both your company culture and the candidate's strengths.</p>

<p>We promise you elite talent. That’s why our vetting process is rigorous, ensuring that every professional we place is not just skilled, but ready to hit the ground running.</p>

<p>I’ve seen firsthand how the right global talent can transform a business, and I’m excited to bring that advantage to you.</p>
        <p className="ceo-signature">
          <strong>Dominic</strong><br />
          Founder @ Talenphiere
        </p>
      </div>
      <div className="ceo-map-container">
        <img src={mapImage} alt="Map of Sri Lanka with talent locations" className="ceo-map" />
      </div>
    </section>
  );
};

export default CEOSection;