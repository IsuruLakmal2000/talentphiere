import React from "react";
import "./SuccessStory.css";
import FooterSection from "../../components/Footer/footer";
import Header from "../../components/header";

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
    hero: "/assets/cases/case-1.jpg",
    href: "#",
  },
  {
    id: "c2",
    title: "How True Classic runs a $250M business with global talent",
    subtitle: "How True Classic runs a $250M business with global talent",
    hero: "/assets/cases/case-2.jpg",
    href: "#",
  },
  {
    id: "c3",
    title: "\"I don't want an assistant\" to hiring three Divers",
    subtitle: "\"I don't want an assistant\" to hiring three Divers",
    hero: "/assets/cases/case-3.jpg",
    href: "#",
  },
  {
    id: "c4",
    title: "From in-person to remote: The next phase of Bite",
    subtitle: "Going from in-person to a fully remote organization",
    hero: "/assets/cases/case-4.jpg",
    href: "#",
  },
  {
    id: "c5",
    title: "When a long-time solopreneur learns to delegate",
    subtitle: "When a long-time solopreneur learns to delegate",
    hero: "/assets/cases/case-5.jpg",
    href: "#",
  },
  {
    id: "c6",
    title: "How MXA saves $200k annually with Oceans",
    subtitle: "How MXA saves $200k annually with Oceans",
    hero: "/assets/cases/case-6.jpg",
    href: "#",
  },
  {
    id: "c7",
    title: "From overwhelmed to organized inbox",
    subtitle: "From overwhelmed to organized inbox",
    hero: "/assets/cases/case-7.jpg",
    href: "#",
  },
  {
    id: "c8",
    title: "When a tax firm needs administrative support",
    subtitle: "When a tax firm needs administrative support",
    hero: "/assets/cases/case-8.jpg",
    href: "#",
  },
  {
    id: "c9",
    title: "A struggling one-man finance team finds leverage",
    subtitle: "A struggling one-man finance team finds leverage",
    hero: "/assets/cases/case-9.jpg",
    href: "#",
  },
];

const CaseCard: React.FC<{ s: CaseStudy }> = ({ s }) => {
  return (
    <article className="case-card" aria-labelledby={`case-${s.id}-title`}>
      <a className="case-link" href={s.href ?? "#"} aria-label={s.title}>
        <div
          className="case-hero"
          style={{
            backgroundImage: s.hero
              ? `linear-gradient(90deg, rgba(7,86,106,0.92) 0 52%, rgba(246,249,250,1) 52%), url(${s.hero})`
              : `linear-gradient(90deg, rgba(7,86,106,0.92) 0 52%, rgba(246,249,250,1) 52%)`,
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
