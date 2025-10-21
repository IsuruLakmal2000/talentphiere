import React from 'react';
import './WhyOceans.css';
import oceanVideo from '../../../assets/videos/video.mp4';

interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

interface BenefitProps extends BenefitItem {
  className?: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, className }) => (
  <div className={`benefit-card ${className || ''}`}>
    <span className="benefit-icon">{icon}</span>
    <h3 className="benefit-title">{title}</h3>
    <p className="benefit-description">{description}</p>
  </div>
);

const WhyOceans: React.FC = () => {
  const benefits: BenefitItem[] = [
    {
      icon: "👥",
      title: "Experienced talent",
      description: "Think ex-Ogilvy and ex-KPMG. We attract career professionals who are excited to make an impact."
    },
    {
      icon: "📈",
      title: "Constant upskilling",
      description: "Proactive internal coaching and training. That's hands-on, 1:1 support to help your Diver level up."
    },
    {
      icon: "🌱",
      title: "We take care of our Divers",
      description: "Above-market pay, benefits, retirement accounts, work socials, annual team retreats, etc."
    },
    {
      icon: "❤️",
      title: "High retention",
      description: "A supportive work environment where our Divers are happy to build their careers."
    },
    {
      icon: "📊",
      title: "Easy to scale",
      description: "We specialize in ops, admin, finance and marketing talent. Many clients end up scaling with Oceans."
    },
    {
      icon: "🎯",
      title: "And most importantly...",
      description: "We strive to continuously do better. If a match doesn't end up working out, we'll put all hands on deck to make it right."
    }
  ];

  return (
    <section className="why-oceans">
      <div className="why-oceans__container">
        <div className="why-oceans__header">
          <h2>Why Oceans</h2>
          <p>Over 400 companies have embedded Oceans talent into their organization.</p>
        </div>

        <div className="why-oceans__content">
          <div className="why-oceans__video">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster="/video-poster.jpg"
            >
              <source src={oceanVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="logo-overlay">
              <div className="logo-icon">○</div>
              <span className="logo-text">OCEANS</span>
            </div>
          </div>

          <div className="why-oceans__benefits">
            {benefits.map((benefit, index) => (
              <Benefit
                key={index}
                {...benefit}
                className={`benefit-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOceans;