// src/pages/SuccessStoryTemplate.tsx
import React from "react";
import "./SuccessStoryTemplate.css";

interface Section {
  heading?: string;
  content: string;
  image?: string;
  quote?: string;
}

interface SuccessStoryTemplateProps {
  title: string;
  authorName: string;
  authorTitle: string;
  companyLogo?: string;
  mainImage?: string;
  intro: string;
  sections: Section[];
  conclusion?: string;
}

const SuccessStoryTemplate: React.FC<SuccessStoryTemplateProps> = ({
  title,
  authorName,
  authorTitle,
  companyLogo,
  mainImage,
  intro,
  sections,
  conclusion,
}) => {
  return (
    <div className="story-container">
      <header className="story-header">
        {companyLogo && (
          <img src={companyLogo} alt="Company Logo" className="story-logo" />
        )}
        <h1 className="story-title">{title}</h1>
        <p className="story-author">
          {authorName} – <span>{authorTitle}</span>
        </p>
      </header>

      {mainImage && (
        <div className="story-main-image">
          <img src={mainImage} alt={title} />
        </div>
      )}

      <section className="story-intro">
        <p>{intro}</p>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="story-section">
          {section.heading && <h2>{section.heading}</h2>}
          <p>{section.content}</p>
          {section.quote && <blockquote>"{section.quote}"</blockquote>}
          {section.image && (
            <div className="story-section-image">
              <img src={section.image} alt={section.heading || "Section"} />
            </div>
          )}
        </section>
      ))}

      {conclusion && (
        <section className="story-conclusion">
          <h3>Result</h3>
          <p>{conclusion}</p>
        </section>
      )}
    </div>
  );
};

export default SuccessStoryTemplate;
