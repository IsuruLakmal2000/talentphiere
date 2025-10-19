import React, { useState } from "react";
import "./HomeReview.css";

interface Story {
  industry: string;
  description: string;
  review: string;
  name: string;
  role: string;
  image: string;
}

const stories: Story[] = [
  {
    industry: "Startups",
    description:
      "Bite had moved from in-person to remote-only, which meant a different skill set was needed for their operational roles.",
    review:
      "Yasasvee’s integration into Bite has been a gift of time and efficiency for Lindsay and everyone on her team, proving that running an entire business remotely can still be an organized and successful operation.",
    name: "Lindsay McCormick",
    role: "Bite",
    image: "/images/lindsay.png",
  },
  {
    industry: "E-commerce",
    description:
      "Cheers Health is a $15M/year business. Their CEO had become overwhelmed by his inbox and needed to remove the bottleneck.",
    review:
      "The Oceans team helped us regain focus on core strategy by integrating support talent who are proactive and adaptable.",
    name: "John Roberts",
    role: "Cheers Health",
    image: "/images/john.png",
  },
  {
    industry: "Small businesses",
    description:
      "MXA is a fast-growing, remote-first company. Their account managers were over-capacity managing new and existing business.",
    review:
      "Partnering with Oceans made scaling smooth — we onboarded skilled professionals without losing company culture.",
    name: "Sarah Kim",
    role: "MXA",
    image: "/images/sarah.png",
  },
  {
    industry: "Solopreneurs",
    description:
      "Dan ran a successful consulting company by himself, for 5 years. Then he had a baby, and thus began the path to delegation.",
    review:
      "Working with Oceans gave me the flexibility to focus on family and business growth simultaneously. A true game-changer!",
    name: "Dan Pearson",
    role: "Independent Consultant",
    image: "/images/dan.png",
  },
];

const SuccessStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story>(stories[0]);

  return (
    <section className="success-section">
      <div className="success-header">
        <img
          src="/icons/megaphone.svg"
          alt="Megaphone"
          className="header-icon"
        />
        <h2>Want to see real client stories?</h2>
        <p>
          Our clients come from a range of different industries. Here are some
          common examples:
        </p>
      </div>

      <div className="success-content">
        {/* Left: Industry Cards */}
        <div className="industry-grid">
          {stories.map((story) => (
            <div
              key={story.industry}
              className={`industry-card ${
                activeStory.industry === story.industry ? "active" : ""
              }`}
              onMouseEnter={() => setActiveStory(story)}
            >
              <h3>{story.industry}</h3>
              <p>{story.description}</p>
              <span className="learn-more">Learn more</span>
            </div>
          ))}
        </div>

        {/* Right: Active Review */}
        <div className="review-panel">
          <p className="review-text">“{activeStory.review}”</p>
          <div className="reviewer">
            <img src={activeStory.image} alt={activeStory.name} />
            <div>
              <h4>{activeStory.name}</h4>
              <p>{activeStory.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
