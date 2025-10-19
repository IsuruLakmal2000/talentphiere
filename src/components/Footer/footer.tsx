// FooterSection.tsx
import React from 'react';
import './footer.css'; 
import logo from './logo.png'; 

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <img src={logo} alt="Oceans Logo" className="footer-logo" />
        <h2 className="footer-heading">Start building brilliantly</h2>
        <p className="footer-description">We help you plug highly skilled and vetted global talent into your business, so you can focus<br />on Building Brilliantly.</p>
        <button className="footer-button">Hire With Oceans</button>
      </div>
    </footer>
  );
};

export default FooterSection;