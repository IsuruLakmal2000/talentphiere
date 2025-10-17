import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hire proactive global talent for your team
        </h1>
        <p className="hero-subtitle">
          Outsourcing has a bad reputation. We’re fixing it with highly
          experienced and motivated talent, while saving you up to 80% of a US
          hire.
        </p>
        <button className="hero-button">Hire With Oceans</button>
      </div>
    </header>
  );
};

export default Header;
