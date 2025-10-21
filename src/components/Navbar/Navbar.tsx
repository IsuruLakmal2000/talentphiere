import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Oceans Talent
        </Link>

        <ul className="navbar-menu">
          <li 
            className="navbar-item dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">
              Our Roles
              <svg 
                className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
              >
                <path 
                  d="M4 6L8 10L12 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/roles/executive-assistant" 
                  className="dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="dropdown-item-icon">👔</div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">Executive Assistant</div>
                    <div className="dropdown-item-description">EA+ designed for founders</div>
                  </div>
                </Link>

                <Link 
                  to="/roles/software-development" 
                  className="dropdown-item"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <div className="dropdown-item-icon">💻</div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-item-title">Software Development</div>
                    <div className="dropdown-item-description">Experienced developers for startups</div>
                  </div>
                </Link>
              </div>
            )}
          </li>

          <li className="navbar-item">
            <Link to="/HowWeHire" className="navbar-link">How We Hire</Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>

        <button className="navbar-cta">Hire With Oceans</button>
      </div>
    </nav>
  );
};

export default Navbar;
