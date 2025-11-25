import React from "react";
import { motion } from "framer-motion";
import "./whychoose.css";

//Import icons
import talent from "../../assets/icons/talent.png";
import care from "../../assets/icons/care.png";
import easy from "../../assets/icons/easy-scale.png";
import upskill from "../../assets/icons/growth.png";
import support from "../../assets/icons/support.png";
import success from "../../assets/icons/success.png";

const leftCards = [
  {
    title: "Exceptional talent",
    text: "Think ex-Ogilvy and ex-KPMG. We attract career professionals who are excited to make an impact.",
    icon: talent,
    rotate: -4,
  },
  {
    title: "We take care of our Divers",
    text: "Above-market pay, benefits, retirement accounts, work socials, annual team retreats, etc. They are critical members of our team, and we treat them as such.",
    icon: care,
    rotate: 4,
  },
  {
    title: "Easy to scale",
    text: "We specialize in ops, admin, finance and marketing talent. Many clients end up scaling with Talentphere.",
    icon: easy,
    rotate: -3,
  },
];

const rightCards = [
  {
    title: "Constant upskilling",
    text: "Internal coaching and training resources are available 24/7. That’s hands-on, one-on-one support to help your Diver level up constantly.",
    icon: upskill,
    rotate: 3,
  },
  {
    title: "High retention",
    text: "We pride ourselves in creating a supportive work environment and only work with clients who do the same — which means our Divers are happy to build their careers here.",
    icon: support,
    rotate: -4,
  },
  {
    title: "And most importantly…",
    text: "We strive to continuously do better. If a match doesn’t end up working out, we’ll put all hands on deck to make it right.",
    icon: success,
    rotate: 5,
  },
];

const WhyOceans: React.FC = () => {
  return (
    <section className="home-why-oceans-section">
      <div className="home-why-oceans-wrapper">
        {/* Left column */}
        <div className="home-card-column left">
          {leftCards.map((card, index) => (
            <motion.div
              key={index}
              className="home-ocean-card"
              style={{ transform: `rotate(${card.rotate}deg)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="home-card-icon">
              <img src={card.icon} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Center text */}
        <motion.div 
          className="home-why-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="home-plus-icon"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            +
          </motion.div>
          <h2>Why Talentphere</h2>
          <p>
            Over 400 companies have embedded Talentphere talent into their
            organization.
          </p>
        </motion.div>

        {/* Right column */}
        <div className="home-card-column right">
          {rightCards.map((card, index) => (
            <motion.div
              key={index}
              className="home-ocean-card"
              style={{ transform: `rotate(${card.rotate}deg)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="home-card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOceans;
