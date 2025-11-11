import React from "react";
import "./GuideStoryTemplate.css";

interface GuideSection {
  heading?: string;
  content: string;
  image?: string;
  tips?: string[];
  quote?: string;
}

interface GuideStoryTemplateProps {
  title: string;
  authorName?: string;
  authorRole?: string;
  companyLogo?: string;
  heroImage?: string;
  intro: string;
  sections: GuideSection[];
  summary?: string;
}

const GuideStoryTemplate: React.FC<GuideStoryTemplateProps> = ({
  title,
  authorName,
  authorRole,
  companyLogo,
  heroImage,
  intro,
  sections,
  summary,
}) => {
  return (
    <div className="guide-container">
      <header className="guide-header">
        {companyLogo && (
          <img src={companyLogo} alt="Company Logo" className="guide-logo" />
        )}
        <h1 className="guide-title">{title}</h1>
        {(authorName || authorRole) && (
          <p className="guide-author">
            {authorName && <span>{authorName}</span>}
            {authorRole && <> – <span>{authorRole}</span></>}
          </p>
        )}
      </header>

      {heroImage && (
        <div className="guide-hero-image">
          <img src={heroImage} alt={title} />
        </div>
      )}

      <section className="guide-intro">
        <p>{intro}</p>
      </section>

      {sections.map((section, index) => (
        <section key={index} className="guide-section">
          {section.heading && <h2>{section.heading}</h2>}
          <p>{section.content}</p>

          {section.tips && (
            <ul className="guide-tips">
              {section.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          )}

          {section.quote && <blockquote>"{section.quote}"</blockquote>}

          {section.image && (
            <div className="guide-section-image">
              <img src={section.image} alt={section.heading || "Guide Section"} />
            </div>
          )}
        </section>
      ))}

      {summary && (
        <section className="guide-summary">
          <h3>Summary</h3>
          <p>{summary}</p>
        </section>
      )}
    </div>
  );
};

export default GuideStoryTemplate;
