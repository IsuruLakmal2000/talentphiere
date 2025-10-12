import React from "react";
import "./BestProfiles.css";

const BestProfiles: React.FC = () => {
  return (
    <section className="best-profiles">
      <div className="content-container">
        <h2 className="title">Best-in-class Profiles</h2>
        <p className="description">
          Our EAs+ go beyond basic administration, they bring a wealth of
          experience and backgrounds — all with high levels of attention to
          detail. This is why each client and EA+ match is quintessentially
          unique.
        </p>

        <div className="profiles-grid">
          <div className="profile-card">
            <h3>Operations</h3>
            <p>
              Former project managers and operational specialists who bring a
              high level of systems design.
            </p>
          </div>

          <div className="profile-card">
            <h3>Marketing & PR</h3>
            <p>
              Former in-house and agency marketers who bring a high level of
              creativity and communication skills.
            </p>
          </div>

          <div className="profile-card">
            <h3>Finance</h3>
            <p>
              Former accountants and analysts who bring a high level of rigor,
              analysis, and reporting.
            </p>
          </div>

          <div className="profile-card">
            <h3>Research & Law</h3>
            <p>
              Former academics and legal professionals who bring a high level of
              detail orientation and specificity.
            </p>
          </div>

          <div className="profile-card dotted">
            <h3>And More…</h3>
            <p>
              These are some of our most popular backgrounds for EAs+. We also
              have highly specialized backgrounds that we serve on a case by
              case basis.
            </p>
          </div>

          <div className="profile-image-card">
            <img
              src="https://via.placeholder.com/400x400"
              alt="Profile placeholder"
            />
            <div className="profile-info">
              <h3>Nihara</h3>
              <p>University of Essex</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProfiles;
