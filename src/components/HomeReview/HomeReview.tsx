import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeReview.css";
import megaphone from "../../assets/icons/megaphone.png";

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
    image: "https://i.pinimg.com/1200x/e7/27/b3/e727b38bc4a2340d4b772edd0864e5c1.jpg",
  },
  {
    industry: "E-commerce",
    description:
      "Cheers Health is a $15M/year business. Their CEO had become overwhelmed by his inbox and needed to remove the bottleneck.",
    review:
      "The Talentphere team helped us regain focus on core strategy by integrating support talent who are proactive and adaptable.",
    name: "John Roberts",
    role: "Cheers Health",
    image: "https://i.pinimg.com/736x/88/ae/fb/88aefb54ee3f3e7191b3df89b5230ad0.jpg",
  },
  {
    industry: "Small businesses",
    description:
      "MXA is a fast-growing, remote-first company. Their account managers were over-capacity managing new and existing business.",
    review:
      "Partnering with Talentphere made scaling smooth — we onboarded skilled professionals without losing company culture.",
    name: "Sarah Kim",
    role: "MXA",
    image: "https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg",
  },
  {
    industry: "Solopreneurs",
    description:
      "Dan ran a successful consulting company by himself, for 5 years. Then he had a baby, and thus began the path to delegation.",
    review:
      "Working with Talentphere gave me the flexibility to focus on family and business growth simultaneously. A true game-changer!",
    name: "Dan Pearson",
    role: "Independent Consultant",
    image: "https://i.pinimg.com/736x/6d/eb/86/6deb86e669d45537bb84933d55488b22.jpg",
  },
];

const SuccessStories: React.FC = () => {
  const [activeStory, setActiveStory] = useState<Story>(stories[0]);

  return (
    <section className="success-section">
      <motion.div 
        className="success-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="header-icon"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        >
          <img
            src={megaphone}
            alt="Megaphone"
          />
        </motion.div>
        <h2>Want to see real client stories?</h2>
        <p>
          Our clients come from a range of different industries. Here are some
          common examples:
        </p>
      </motion.div>

      <div className="success-content">
        {/* Left: Industry Cards */}
        <div className="industry-grid">
          {stories.map((story, index) => (
            <motion.div
              key={story.industry}
              className={`industry-card ${
                activeStory.industry === story.industry ? "active" : ""
              }`}
              onMouseEnter={() => setActiveStory(story)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <h3>{story.industry}</h3>
              <p>{story.description}</p>
              <span className="learn-more">Learn more</span>
            </motion.div>
          ))}
        </div>

        {/* Right: Active Review */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeStory.industry}
            className="review-panel"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="review-text">"{activeStory.review}"</p>
            <div className="reviewer">
              <img src={activeStory.image} alt={activeStory.name} />
              <div>
                <h4>{activeStory.name}</h4>
                <p>{activeStory.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SuccessStories;
