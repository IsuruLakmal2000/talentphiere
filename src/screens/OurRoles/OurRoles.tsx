import React, { useState } from 'react';
import './OurRoles.css';

const OurRoles: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSteps = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // On desktop with 4 cards visible, we can scroll one card at a time
      if (prev < totalSteps - 1) {
        return prev + 1;
      }
      return 0; // Loop back to start
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return totalSteps - 1; // Loop to end
    });
  };

  // Calculate transform based on current slide
  const getTransform = () => {
    // Each card is 33.333% width + gap, move by one card width at a time
    const movePercent = currentSlide * 35.333; // 33.333% card + ~2% gap
    return `translateX(-${movePercent}%)`;
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-icon">
            <div className="icon-wrapper">
              <svg width="80" height="80" viewBox="0 0 80 80" className="hero-svg">
                <path d="M20 20h40v40H20z" fill="#2563eb" opacity="0.2"/>
                <path d="M25 25h30v30H25z" fill="#2563eb"/>
                <path d="M30 35h20v2H30zM30 40h15v2H30zM30 45h25v2H30z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <h1 className="hero-title">
            Hire an EA that's designed for Founders
          </h1>
          
          <p className="hero-description">
            Before you need a chief of staff, you need an EA+. Your right hand for staying organized as you grow, 
            freeing you up to tackle the work that only you can do.
          </p>
          
          <button className="cta-button">
            Hire With Oceans
          </button>
        </div>
      </section>

      {/* Best-in-class Profiles Section */}
      <section className="profiles-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Best-in-class Profiles</h2>
            <p className="section-description">
              Our EAs+ go beyond basic administration, they bring a wealth of experience and backgrounds — all with high levels of attention to 
              detail. This is why each client and EA+ match is quintessentially unique.
            </p>
          </div>

          <div className="profiles-layout">
            <div className="categories-grid">
              <div className="category-item">
                <h3 className="category-title">Operations</h3>
                <p className="category-text">
                  Former project managers and operational specialists who bring a high level of systems design.
                </p>
              </div>

              <div className="category-item">
                <h3 className="category-title">Marketing & PR</h3>
                <p className="category-text">
                  Former in-house and agency marketers who bring a high level of creativity and communication skills.
                </p>
              </div>

              <div className="category-item">
                <h3 className="category-title">Finance</h3>
                <p className="category-text">
                  Former accountants and analysts who bring a high level of rigor, analysis, and reporting.
                </p>
              </div>

              <div className="category-item">
                <h3 className="category-title">Research & Law</h3>
                <p className="category-text">
                  Former academics and legal professionals who bring a high level of detail orientation and specificity.
                </p>
              </div>

              <div className="category-item span-full">
                <h3 className="category-title">And More...</h3>
                <p className="category-text">
                  These are some of our most popular backgrounds for EAs+. We also have highly specialized backgrounds that we serve on a case by case basis.
                </p>
              </div>
            </div>

            <div className="profile-display">
              <div className="profile-container">
                <div className="profile-image">
                  <div className="image-placeholder">
                    <div className="avatar-placeholder"></div>
                  </div>
                </div>
                <div className="profile-details">
                  <h4 className="profile-name">Nihara</h4>
                  <p className="profile-subtitle">University of Essex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-grid">
            {/* Story Card */}
            <div className="story-card">
              <div className="story-icon">
                <div className="orange-dot"></div>
              </div>
              <h3 className="story-title">
                From overwhelmed to organized inbox
              </h3>
              <p className="story-description">
                Growing a successful company is never easy. The struggle became even more pronounced when he and his wife welcomed their first baby into the world...
              </p>
              <button className="story-button">
                Read Brooks' Story
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="testimonial-card">
              <blockquote className="testimonial-quote">
                At every step of the way, Anjalie has impressed me. She has initiative, thoughtfulness, attention to detail, willingness to suggest better ways to get things done, and more.
              </blockquote>
              <div className="testimonial-author">
                <img 
                  src="https://via.placeholder.com/48" 
                  alt="Brooks Powell" 
                  className="author-avatar"
                />
                <div className="author-info">
                  <div className="author-name">Brooks Powell</div>
                  <div className="author-company">Cheers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="how-we-do-it-section">
        <div className="how-container">
          <div className="how-header">
            <h2 className="how-title">How we do it</h2>
            <p className="how-description">
              We take time to get to know you, our Divers, and then we hand select a match. 86% of first matches end up being the right one.
            </p>
          </div>

          <div className="steps-carousel">
            <div className="steps-track" style={{ transform: getTransform() }}>
              {/* Step 1 */}
              <div className="step-card">
                <div className="step-icon">
                  <svg className="step-svg" viewBox="0 0 200 200">
                    <circle cx="80" cy="100" r="40" fill="#7a9bb5" opacity="0.6"/>
                    <rect x="120" y="70" width="50" height="60" fill="#7a9bb5" opacity="0.8"/>
                    <polygon points="100,50 130,80 70,80" fill="#7a9bb5"/>
                    <rect x="140" y="120" width="25" height="25" fill="#7a9bb5" opacity="0.5"/>
                  </svg>
                </div>
                <div className="step-number">1</div>
                <h3 className="step-title">Discovery Call</h3>
                <p className="step-text">
                  Let's get to know each other. We can dive into what you're looking for, how you like to work, pet peeves, and more — it's the details that matter most.
                </p>
              </div>

              {/* Step 2 */}
              <div className="step-card">
                <div className="step-icon">
                  <svg className="step-svg" viewBox="0 0 200 200">
                    <g transform="translate(70, 60)">
                      <rect x="0" y="0" width="50" height="70" fill="#7a9bb5" opacity="0.3" rx="5"/>
                      <rect x="10" y="5" width="50" height="70" fill="#7a9bb5" opacity="0.5" rx="5"/>
                      <rect x="20" y="10" width="50" height="70" fill="#7a9bb5" opacity="0.7" rx="5"/>
                      <rect x="30" y="15" width="50" height="70" fill="#7a9bb5" rx="5"/>
                      <circle cx="55" cy="35" r="5" fill="white"/>
                    </g>
                  </svg>
                </div>
                <div className="step-number">2</div>
                <h3 className="step-title">Matching</h3>
                <p className="step-text">
                  With your unique criteria in hand, we find and show you someone who fits like a glove. Our team processes 1500+ applications a month to curate perfect matches.
                </p>
              </div>

              {/* Step 3 */}
              <div className="step-card">
                <div className="step-icon">
                  <svg className="step-svg" viewBox="0 0 200 200">
                    <path d="M 60 100 Q 100 60, 140 100 Q 100 140, 60 100" fill="#7a9bb5" opacity="0.3"/>
                    <path d="M 70 100 Q 100 75, 130 100 Q 100 125, 70 100" fill="#7a9bb5" opacity="0.6"/>
                    <circle cx="100" cy="100" r="20" fill="#7a9bb5"/>
                  </svg>
                </div>
                <div className="step-number">3</div>
                <h3 className="step-title">Onboarding</h3>
                <p className="step-text">
                  Setting you and your Diver up for success with a hands-on approach to integrating them into your workflow, setting expectations, and outlining communication preferences.
                </p>
              </div>

              {/* Step 4 */}
              <div className="step-card">
                <div className="step-icon">
                  <svg className="step-svg" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="50" fill="none" stroke="#7a9bb5" strokeWidth="8" opacity="0.3"/>
                    <circle cx="100" cy="100" r="35" fill="none" stroke="#7a9bb5" strokeWidth="8" opacity="0.6"/>
                    <circle cx="100" cy="100" r="20" fill="#7a9bb5"/>
                  </svg>
                </div>
                <div className="step-number">4</div>
                <h3 className="step-title">Ongoing Support</h3>
                <p className="step-text">
                  We're here for the long haul. Regular check-ins, support when you need it, and continuous optimization to ensure your partnership thrives.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev-btn" onClick={prevSlide} aria-label="Previous step">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="carousel-btn next-btn" onClick={nextSlide} aria-label="Next step">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Oceans Section */}
      <section className="why-oceans-section">
        <div className="why-container">
          <div className="why-left">
            <div className="why-icon">
              <svg className="plus-icon" viewBox="0 0 120 120" fill="none">
                <path d="M40 10 L40 50 L0 50 L0 70 L40 70 L40 110 L60 110 L60 70 L100 70 L100 50 L60 50 L60 10 Z" 
                      fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="why-title">Why Oceans</h2>
            <p className="why-subtitle">
              Over 400 companies have embedded Oceans talent into their organization.
            </p>
            <button className="why-cta-button">
              Hire With Oceans
            </button>
          </div>

          <div className="why-right">
            <div className="benefits-grid">
              {/* Benefit 1 */}
              <div className="benefit-card">
                <div className="benefit-icon pink">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Experienced talent</h3>
                <p className="benefit-text">
                  Think ex-Ogilvy and ex-KPMG. We attract career professionals who are excited to make an impact.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="benefit-card">
                <div className="benefit-icon orange">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                          stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="benefit-title">High retention</h3>
                <p className="benefit-text">
                  A supportive work environment where our Divers are happy to build their careers.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="benefit-card">
                <div className="benefit-icon blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Constant upskilling</h3>
                <p className="benefit-text">
                  Proactive internal coaching and training. That's hands-on, 1:1 support to help your Diver level up.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="benefit-card">
                <div className="benefit-icon teal">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" 
                          stroke="currentColor" strokeWidth="2"/>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="7.5 19.79 7.5 14.6 3 12" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="21 12 16.5 14.6 16.5 19.79" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="benefit-title">Easy to scale</h3>
                <p className="benefit-text">
                  We specialize in ops, admin, finance and marketing talent. Many clients end up scaling with Oceans.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="benefit-card">
                <div className="benefit-icon green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" 
                          stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="benefit-title">We take care of our Divers</h3>
                <p className="benefit-text">
                  Above-market pay, benefits, retirement accounts, work socials, annual team retreats, etc.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="benefit-card">
                <div className="benefit-icon purple">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="benefit-title">And most importantly...</h3>
                <p className="benefit-text">
                  We strive to continuously do better. If a match doesn't end up working out, we'll put all hands on deck to make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurRoles;

