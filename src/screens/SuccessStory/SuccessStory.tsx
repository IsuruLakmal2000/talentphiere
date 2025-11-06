import React from "react";
import "./SuccessStory.css";
import FooterSection from "../../components/Footer/footer";
import Header from "../../components/header";
import case1 from "../../assets/cases/case1.png";
import case2 from "../../assets/cases/case2.png";
import case3 from "../../assets/cases/case3.png";
import case4 from "../../assets/cases/case4.png";
import case5 from "../../assets/cases/case5.png";
import case6 from "../../assets/cases/case6.png";
import case7 from "../../assets/cases/case7.png";
import case8 from "../../assets/cases/case8.png";
import case9 from "../../assets/cases/case9.png";
import { Link } from "react-router-dom";

/**
 * Success Stories / Case studies section
 * - Template-driven: map `cases` to identical cards
 * - Responsive two-column grid on desktop, single column on small screens
 * - Accessible markup (links, alt text)
 */

type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  hero?: string; // path to hero image (optional)
  href?: string;
};

const cases: CaseStudy[] = [
  {
    id: "c1",
    title: "Part-time vs. Full-time assistants: Why the former was more work",
    subtitle: "Part-time vs. Full-time assistants: Why the former was more work",
    hero: case1,
    href: "success-story/Story1",
  },
  {
    id: "c2",
    title: "How True Classic runs a $250M business with global talent",
    subtitle: "How True Classic runs a $250M business with global talent",
    hero: case2,
    href: "success-story/Story1",
  },
  {
    id: "c3",
    title: "\"I don't want an assistant\" to hiring three Divers",
    subtitle: "\"I don't want an assistant\" to hiring three Divers",
    hero: case3,
    href: "success-story/Story1",
  },
  {
    id: "c4",
    title: "From in-person to remote: The next phase of Bite",
    subtitle: "Going from in-person to a fully remote organization",
    hero: case4,
    href: "success-story/Story1",
  },
  {
    id: "c5",
    title: "When a long-time solopreneur learns to delegate",
    subtitle: "When a long-time solopreneur learns to delegate",
    hero: case5,
    href: "success-story/Story1",
  },
  {
    id: "c6",
    title: "How MXA saves $200k annually with Oceans",
    subtitle: "How MXA saves $200k annually with Oceans",
    hero: case6,
    href: "success-story/Story1",
  },
  {
    id: "c7",
    title: "From overwhelmed to organized inbox",
    subtitle: "From overwhelmed to organized inbox",
    hero: case7,
    href: "success-story/Story1",
  },
  {
    id: "c8",
    title: "When a tax firm needs administrative support",
    subtitle: "When a tax firm needs administrative support",
    hero: case8,
    href: "success-story/Story1",
  },
  {
    id: "c9",
    title: "A struggling one-man finance team finds leverage",
    subtitle: "A struggling one-man finance team finds leverage",
    hero: case9,
    href: "success-story/Story1",
  },
];

const CaseCard: React.FC<{ s: CaseStudy }> = ({ s }) => {
  return (
    <article className="case-card" aria-labelledby={`case-${s.id}-title`}>
      <a className="case-link" href={s.href ?? "#"} aria-label={s.title}>
        <div
          className="case-hero"
          style={{
            
            backgroundImage: s.hero ? `url(${s.hero})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          role="img"
          aria-hidden="true"
        >
          <h3 id={`case-${s.id}-title`} className="case-hero-title">
            {s.title}
          </h3>
        </div>

        <div className="case-body">
          <p className="case-subtitle">{s.subtitle}</p>
        </div>
      </a>
    </article>
  );
};

const SuccessStory: React.FC = () => {
  return (
    <>
      <header className="ss-header">
          <Header title="Oceans" subtitle="Success stories and case studies" />
    
        </header>
      <section className="success-stories" aria-labelledby="success-stories-heading">
      <div className="container">
        

        <div className="cases-grid" role="list">
          {cases.map((c) => (
            <CaseCard key={c.id} s={c} />
          ))}
        </div>
        
      </div>
      
    </section>
    
    <FooterSection />
    
    </>
    
   
  );
};

export default SuccessStory;
