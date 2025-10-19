import React from "react";
import "./process.css";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "Let's get to know each other. If it feels ready, we can deep dive into identifying the challenges facing your team, your goals, and requirements to identify the best roles for a great working relationship.",
    icon: "/icons/discovery.svg",
  },
  {
    id: 2,
    title: "Matching",
    description:
      "We’ll go through existing top local, and internal talent to match you with the right fit. Over 90% of our placements come from pre-vetted talent in our pool of professionals.",
    icon: "/icons/matching.svg",
  },
  {
    id: 3,
    title: "Onboarding",
    description:
      "Seamlessly integrate them into your processes. We share handover materials, assist in goal planning, and support during onboarding to ensure a strong start.",
    icon: "/icons/onboarding.svg",
  },
  {
    id: 4,
    title: "Long-term Partnership",
    description:
      "Once talent starts with your team, we help maintain a solid relationship and ensure continued success through review calls, follow-ups, and long-term collaboration.",
    icon: "/icons/partnership.svg",
  },
];

const Process: React.FC = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2>How we do it</h2>
        <p className="how-subtitle">
          We take extra steps to know you and your needs, then select and match
          talent to ensure long-lasting partnerships.
        </p>

        <div className="how-timeline">
          {steps.map((step) => (
            <div key={step.id} className="how-step">
              <div className="how-icon">
                <img src={step.icon} alt={step.title} />
              </div>
              <div className="how-content">
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
