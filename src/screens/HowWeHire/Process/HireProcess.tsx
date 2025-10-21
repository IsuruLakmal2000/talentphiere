// ProcessCards.tsx

import React, { useRef, useState, useEffect } from 'react';
import './HireProcess.css'; // Import the CSS file

// --- Type Definitions ---
interface ProcessCard {
  id: number;
  title: string;
  description: string;
  features: { icon: string; text: string }[];
}

// --- Dummy Data (Based on the provided image) ---
const processData: ProcessCard[] = [
  {
    id: 1,
    title: 'Our hiring process',
    description:
      'A 6-step hiring process that vets for experience, skill set, work ethic, and personality traits. We leverage third party assessments and multiple interviews to thoroughly evaluate every candidate.',
    features: [
      { icon: '⭐', text: '(1% of applicants get hired)' },
      { icon: '🇬🇧', text: '100% English proficiency' },
      { icon: '✅', text: 'Verified background checks' },
    ],
  },
  {
    id: 2,
    title: 'Our EA+ training program',
    description:
      'A live, intensive, bootcamp-style program designed to teach our Divers how to proactively support the unique challenges of Founders, business owners, and high growth executives.',
    features: [
      { icon: '📚', text: 'Taught by world class EAs' },
      { icon: '📘', text: 'Covers all best practices' },
      { icon: '🧑‍🎓', text: 'Post-graduation coaching' },
    ],
  },
  {
    id: 3,
    title: 'Our matching process',
    description:
      'We deep dive into your current needs and understand your working style and preferences - then we hand select the Diver we feel will be your best partner. 🤝',
    features: [
      { icon: '⏱️', text: '2-week turnaround' },
      { icon: '✏️', text: 'Profile review & optional interview' },
      { icon: '🔄', text: 'Complementary rematching' },
    ],
  },
  {
    id: 4,
    title: 'Ongoing support & retention',
    description:
      'We invest heavily in our Divers through ongoing coaching, learning and development, and support through our community of Divers — so no one ever dives alone.',
    features: [
      { icon: '👤', text: 'Full-time dedicated coaches' },
      { icon: '🛠️', text: 'Learning and development' },
      { icon: '👥', text: '300+ Divers strong' },
    ],
  },
];

// --- Card Component ---
const Card: React.FC<{ card: ProcessCard; isStacked: boolean; stackIndex: number }> = ({
  card,
  isStacked,
  stackIndex,
}) => {
  // Calculate the transform for the stacked state.
  // The value '100%' is a placeholder, in reality it should be calculated dynamically
  // based on the height of the card content, but for this visual effect, we'll
  // calculate the distance *from the top* it needs to move.
  // We'll move all cards except the first one up to cover the previous card.
  // The first card (id: 1) acts as the anchor and doesn't move.
  // Stack index of 0 (id 1) -> 0px move
  // Stack index of 1 (id 2) -> move up by 100% of the container
  // Stack index of 2 (id 3) -> move up by 200% of the container, etc.
  const translateY = isStacked && stackIndex > 0 ? `-${(stackIndex) * 100}%` : '0';

  return (
    // This wrapper is what will be tracked for sticky positioning and stacking
    <div
      className="card-wrapper"
      // Apply the transformation for the stacking effect
      style={{ transform: `translateY(${translateY})` }}
      data-id={card.id}
    >
      <div className="process-card">
        <div className="icon-header">
          {/* Simple gear icon representation */}
          <div className="gear-icon">⚙️</div>
          <div className="gear-icon">⚙️</div>
        </div>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
        <div className="features">
          {card.features.map((feature, index) => (
            <span key={index} className="feature">
              <span className="feature-icon">{feature.icon}</span>
              {feature.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const ProcessCards: React.FC = () => {
  // State to track which card is currently "stuck" at the top
  const [currentStackIndex, setCurrentStackIndex] = useState(0);

  // Ref to hold all the card container elements
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // --- Scroll Event Handler Logic ---
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // We need to find which card container is currently at the 'stacking' position
      // For a perfect implementation, this requires getting the bounding box of each card's
      // container and calculating where it enters the 'sticky' trigger zone.

      // Simplification: We'll calculate the active card based on the position of the last card's container.
      // In a real scenario, you'd calculate a *trigger point* for each card.

      const container = cardRefs.current[0]?.parentElement; // Get the parent container for reference
      if (!container) return;

      const containerTop = container.offsetTop;
      const cardHeight = cardRefs.current[0]?.offsetHeight || 450; // Use a fixed estimate or measure dynamically

      // The stacking happens when the top of the container hits the top of the viewport
      // The number of stacked cards is determined by how far past this point we've scrolled.
      // We divide the scroll distance past the container's start by the height of *one* card.

      const scrollDistanceInContainer = scrollY - containerTop;
      let newIndex = Math.floor(scrollDistanceInContainer / cardHeight) + 1;

      // Clamp the index between 0 and the number of cards
      newIndex = Math.max(0, Math.min(newIndex, processData.length));

      setCurrentStackIndex(newIndex);
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs only once on mount

  // --- Rendering ---
  return (
    <div className="process-cards-section">
      <h1>Process Phases</h1>
      <p>Scroll down to see the stacking effect!</p>
      {/* The main container for all cards. This is what enables the sticky effect. */}
      <div className="sticky-container">
        {processData.map((card, index) => (
          // Each card is wrapped in a container that becomes 'sticky'
          <div
            key={card.id}
            className="sticky-card-wrapper"
            // Set the ref for tracking.
            ref={(el) => { cardRefs.current[index] = el; }}
            // Apply a different top offset to each sticky wrapper so they stick sequentially.
            // Card 1 sticks at top: 0, Card 2 sticks at top: 0, Card 3 sticks at top: 0, etc.
            // The height difference is handled by the inner card's transform.
            style={{ top: 0 }}
          >
            <Card
              card={card}
              stackIndex={index}
              // A card is "stacked" if its index is less than the currentStackIndex.
              // This means cards 1, 2, and 3 are stacked when currentStackIndex is 4 (the final state).
              isStacked={index < currentStackIndex}
            />
          </div>
        ))}
      </div>
      {/* Add a large dummy spacer to ensure enough scrollable space */}
      <div className="scroll-spacer" />
    </div>
  );
};

export default ProcessCards;