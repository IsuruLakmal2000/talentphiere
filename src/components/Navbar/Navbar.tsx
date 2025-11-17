import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleMobileDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2"/>
                <path d="M12 7C9.5 7 7.5 9 7.5 11.5C7.5 14 9.5 16 12 16C14.5 16 16.5 14 16.5 11.5C16.5 9 14.5 7 12 7Z" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">TALENTPHERE</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="navbar-menu">
            {/* Resources Dropdown */}
            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="navbar-link">
                Resources
                <svg
                  className={`dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`}
                  width="14"
                  height="14"
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

              {openDropdown === 'resources' && (
                <div className="dropdown-menu">
                  <Link to="success-story" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Success Stories</div>
                      <div className="dropdown-item-description">Find Our Success Stories</div>
                    </div>
                  </Link>

                  <Link to="how-to-guide" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">How To Guide</div>
                      <div className="dropdown-item-description">Step by Step Guidance</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            {/* Our Roles Dropdown */}
            <li
              className="navbar-item dropdown"
              onMouseEnter={() => handleMouseEnter('roles')}
              onMouseLeave={handleMouseLeave}
            >
              <span className="navbar-link">
                Our Roles
                <svg
                  className={`dropdown-icon ${openDropdown === 'roles' ? 'open' : ''}`}
                  width="14"
                  height="14"
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

              {openDropdown === 'roles' && (
                <div className="dropdown-menu">
                  {/* <Link to="/roles/executive-assistant" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Executive Assistant</div>
                      <div className="dropdown-item-description">EA+ designed for founders</div>
                    </div>
                  </Link> */}

                  <Link to="/roles/software-development" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Development & Innovation</div>
                      <div className="dropdown-item-description">Experienced developers for startups</div>
                    </div>
                  </Link>

                  <Link to="/roles/infrastructure-operations" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Infrastructure & Operations</div>
                      <div className="dropdown-item-description">DevOps, cloud, and SRE experts</div>
                    </div>
                  </Link>

                  <Link to="/roles/digital-marketing-growth" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Digital Marketing & Growth</div>
                      <div className="dropdown-item-description">Performance marketing and growth experts</div>
                    </div>
                  </Link>

                  <Link to="/roles/brand-strategy" className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                    <div className="dropdown-item-content">
                      <div className="dropdown-item-title">Brand & Strategy</div>
                      <div className="dropdown-item-description">Strategic brand and creative professionals</div>
                    </div>
                  </Link>
                </div>
              )}
            </li>

            <li className="navbar-item">
              <Link to="/how-we-hire" className="navbar-link">How We Hire</Link>
            </li>

            <li className="navbar-item">
              <Link to="/pricing" className="navbar-link">Pricing</Link>
            </li>
          </ul>

          <Link to="/hire" className="navbar-cta">Hire With Talentphere</Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <Link to="/" className="mobile-menu-logo" onClick={closeMobileMenu}>
                  <div className="logo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.2"/>
                      <path d="M12 7C9.5 7 7.5 9 7.5 11.5C7.5 14 9.5 16 12 16C14.5 16 16.5 14 16.5 11.5C16.5 9 14.5 7 12 7Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="logo-text">TALENTPHERE</span>
                </Link>
                <button className="mobile-menu-close" onClick={closeMobileMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <ul className="mobile-menu-list">
                {/* Resources Dropdown */}
                <li className="mobile-menu-item">
                  <button 
                    className="mobile-menu-link"
                    onClick={() => toggleMobileDropdown('resources')}
                  >
                    Resources
                    <svg
                      className={`mobile-dropdown-icon ${openDropdown === 'resources' ? 'open' : ''}`}
                      width="14"
                      height="14"
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
                  </button>
                  {openDropdown === 'resources' && (
                    <div className="mobile-dropdown-menu">
                      <Link to="/success-story" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Success Stories</div>
                          <div className="mobile-dropdown-item-description">Find Our Success Stories</div>
                        </div>
                      </Link>
                      <Link to="/how-to-guide" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">How To Guide</div>
                          <div className="mobile-dropdown-item-description">Step by Step Guidance</div>
                        </div>
                      </Link>
                    </div>
                  )}
                </li>

                {/* Our Roles Dropdown */}
                <li className="mobile-menu-item">
                  <button 
                    className="mobile-menu-link"
                    onClick={() => toggleMobileDropdown('roles')}
                  >
                    Our Roles
                    <svg
                      className={`mobile-dropdown-icon ${openDropdown === 'roles' ? 'open' : ''}`}
                      width="14"
                      height="14"
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
                  </button>
                  {openDropdown === 'roles' && (
                    <div className="mobile-dropdown-menu">
                      <Link to="/roles/executive-assistant" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Executive Assistant</div>
                          <div className="mobile-dropdown-item-description">EA+ designed for founders</div>
                        </div>
                      </Link>
                      <Link to="/roles/software-development" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Development & Innovation</div>
                          <div className="mobile-dropdown-item-description">Experienced developers for startups</div>
                        </div>
                      </Link>
                      <Link to="/roles/infrastructure-operations" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Infrastructure & Operations</div>
                          <div className="mobile-dropdown-item-description">DevOps, cloud, and SRE experts</div>
                        </div>
                      </Link>
                      <Link to="/roles/digital-marketing-growth" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Digital Marketing & Growth</div>
                          <div className="mobile-dropdown-item-description">Performance marketing and growth experts</div>
                        </div>
                      </Link>
                      <Link to="/roles/brand-strategy" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                        <div className="mobile-dropdown-item-content">
                          <div className="mobile-dropdown-item-title">Brand & Strategy</div>
                          <div className="mobile-dropdown-item-description">Strategic brand and creative professionals</div>
                        </div>
                      </Link>
                    </div>
                  )}
                </li>

                <li className="mobile-menu-item">
                  <Link to="/how-we-hire" className="mobile-menu-link" onClick={closeMobileMenu}>
                    How We Hire
                  </Link>
                </li>

                <li className="mobile-menu-item">
                  <Link to="/pricing" className="mobile-menu-link" onClick={closeMobileMenu}>
                    Pricing
                  </Link>
                </li>
              </ul>

              <Link to="/hire" className="mobile-menu-cta" onClick={closeMobileMenu}>
                Hire With Talentphere
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
