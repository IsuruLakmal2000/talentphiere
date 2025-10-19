import React from "react";
import "./whychoose.css";

const leftCards = [
  {
    title: "Exceptional talent",
    text: "Think ex-Ogilvy and ex-KPMG. We attract career professionals who are excited to make an impact.",
    icon: "🌟",
    rotate: -4,
  },
  {
    title: "We take care of our Divers",
    text: "Above-market pay, benefits, retirement accounts, work socials, annual team retreats, etc. They are critical members of our team, and we treat them as such.",
    icon: "🌿",
    rotate: 4,
  },
  {
    title: "Easy to scale",
    text: "We specialize in ops, admin, finance and marketing talent. Many clients end up scaling with Oceans.",
    icon: "🏢",
    rotate: -3,
  },
];

const rightCards = [
  {
    title: "Constant upskilling",
    text: "Internal coaching and training resources are available 24/7. That’s hands-on, one-on-one support to help your Diver level up constantly.",
    icon: "📘",
    rotate: 3,
  },
  {
    title: "High retention",
    text: "We pride ourselves in creating a supportive work environment and only work with clients who do the same — which means our Divers are happy to build their careers here.",
    icon: "❤️",
    rotate: -4,
  },
  {
    title: "And most importantly…",
    text: "We strive to continuously do better. If a match doesn’t end up working out, we’ll put all hands on deck to make it right.",
    icon: "😊",
    rotate: 5,
  },
];

const WhyOceans: React.FC = () => {
  return (
    <section className="why-oceans-section">
      <div className="why-oceans-wrapper">
        {/* Left column */}
        <div className="card-column left">
          {leftCards.map((card, index) => (
            <div
              key={index}
              className="ocean-card"
              style={{ transform: `rotate(${card.rotate}deg)` }}
            >
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        {/* Center text */}
        <div className="why-center">
          <div className="plus-icon">+</div>
          <h2>Why Oceans</h2>
          <p>
            Over 400 companies have embedded Oceans talent into their
            organization.
          </p>
        </div>

        {/* Right column */}
        <div className="card-column right">
          {rightCards.map((card, index) => (
            <div
              key={index}
              className="ocean-card"
              style={{ transform: `rotate(${card.rotate}deg)` }}
            >
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOceans;
