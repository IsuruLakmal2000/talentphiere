import React, { useState, useMemo } from 'react';
import './TalentCategory.css'; // Import the consolidated CSS file

// --- Types and Data ---

type Category = 'Executive Assistant+' | 'Finance' | 'Marketing' | 'Operations';

interface Talent {
  id: number;
  name: string;
  initial: string;
  experience: number;
  university: string;
  company: string;
  category: Category;
  // NOTE: Replace these with actual image paths in a real project
  imageUrl: string; 
}

const talentData: Talent[] = [
  { id: 1, name: 'Demetri', initial: 'P.', experience: 7, university: 'Swinburne University of Technology', company: 'MAS Holdings', category: 'Executive Assistant+', imageUrl: 'image-url-1.jpg' },
  { id: 2, name: 'Pasini', initial: 'W.', experience: 6, university: 'City University of New York', company: 'Ogilvy Public Relations', category: 'Finance', imageUrl: 'image-url-2.jpg' },
  { id: 3, name: 'Anjalie', initial: 'R.', experience: 7, university: 'University of Plymouth', company: 'Third Space Global', category: 'Operations', imageUrl: 'image-url-3.jpg' },
  { id: 4, name: 'John', initial: 'D.', experience: 5, university: 'Stanford University', company: 'Tech Solutions', category: 'Marketing', imageUrl: 'image-url-4.jpg' },
  { id: 5, name: 'Emma', initial: 'S.', experience: 8, university: 'MIT', company: 'Global Finance Co.', category: 'Finance', imageUrl: 'image-url-5.jpg' },
  { id: 6, name: 'Chris', initial: 'B.', experience: 6, university: 'London School of Economics', company: 'Future Ops', category: 'Operations', imageUrl: 'image-url-6.jpg' },
  // Add more data for full category display
];

const categories: Category[] = [
  'Executive Assistant+',
  'Finance',
  'Marketing',
  'Operations',
];

// Helper to get an icon based on the category name
const getIconHtml = (category: Category) => {
  switch (category) {
    case 'Executive Assistant+': return '&#x2728;'; // Sparkle
    case 'Finance': return '&#x1F4B5;'; // Money Bag
    case 'Marketing': return '&#x1F4E3;'; // Megaphone
    case 'Operations': return '&#x269B;'; // Crossroads/Switch
    default: return '';
  }
};

// --- Sub-Component: TalentCard ---

interface TalentCardProps {
  talent: Talent;
}

const TalentCard: React.FC<TalentCardProps> = ({ talent }) => {
  const { name, initial, experience, university, company, imageUrl } = talent;

  return (
    <div className="talent-card">
      <div className="card-header">
        {/* In a real project, use a proper image tag with responsive paths */}
        <img src={imageUrl} alt={`${name} ${initial}`} className="avatar" /> 
        <div>
          <h3 className="name">{name} {initial}</h3>
          <p className="experience">Years of experience: {experience}</p>
        </div>
      </div>
      <div className="card-details">
        <div className="detail-item">
          <span className="icon">&#x2692;</span> {/* Award/Badge icon */}
          <span className="text">{university}</span>
        </div>
        <div className="detail-item">
          <span className="icon">&#x2637;</span> {/* Building icon (Using a simple UTF-8 character) */}
          <span className="text">{company}</span>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: CategoryButtons ---

interface CategoryButtonsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="buttons-container">
      {categories.map((category) => (
        <button
          key={category}
          // Use string literal to combine base class and conditional active class
          className={`category-button ${activeCategory === category ? 'active' : ''}`} 
          onClick={() => onCategoryChange(category)}
        >
          {/* Use dangerouslySetInnerHTML for HTML entities */}
          <span dangerouslySetInnerHTML={{ __html: getIconHtml(category) }} />
          {category}
        </button>
      ))}
    </div>
  );
};


// --- Main Component: TalentSection ---

const TalentSection: React.FC = () => {
  const defaultCategory: Category = 'Executive Assistant+';
  const [activeCategory, setActiveCategory] = useState<Category>(defaultCategory);

  // Filter the talent data based on the active category
  const filteredTalent = useMemo(() => {
    return talentData.filter(talent => talent.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <section className="talent-section">
      
      <CategoryButtons
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="cards-grid">
        {filteredTalent.length > 0 ? (
          filteredTalent.map(talent => (
            <TalentCard key={talent.id} talent={talent} />
          ))
        ) : (
          <p className="no-results">No talent found in the **{activeCategory}** category.</p>
        )}
      </div>

    </section>
  );
};

export default TalentSection;