import React from "react";
import { motion } from "framer-motion";
import "./process.css";

//import graphical icons
import discoveryIcon from "../../assets/icons/search.png";
import match from "../../assets/icons/match.png";
import onboarding from "../../assets/icons/onboarding.png";
import partnership from "../../assets/icons/partnership.png";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description:
      "Let's get to know each other. If it feels ready, we can deep dive into identifying the challenges facing your team, your goals, and requirements to identify the best roles for a great working relationship.",
    icon: discoveryIcon,
  },
  {
    id: 2,
    title: "Matching",
    description:
      "We’ll go through existing top local, and internal talent to match you with the right fit. Over 90% of our placements come from pre-vetted talent in our pool of professionals.",
    icon: match,
  },
  {
    id: 3,
    title: "Onboarding",
    description:
      "Seamlessly integrate them into your processes. We share handover materials, assist in goal planning, and support during onboarding to ensure a strong start.",
    icon: onboarding,
  },
  {
    id: 4,
    title: "Long-term Partnership",
    description:
      "Once talent starts with your team, we help maintain a solid relationship and ensure continued success through review calls, follow-ups, and long-term collaboration.",
    icon: partnership,
  },
];

const Process: React.FC = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How we do it
        </motion.h2>
        <motion.p 
          className="how-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We take extra steps to know you and your needs, then select and match
          talent to ensure long-lasting partnerships.
        </motion.p>

        <div className="how-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="how-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div 
                className="how-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={step.icon} alt={step.title} />
              </motion.div>
              <div className="how-content">
                <div className="step-number">{step.id}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
