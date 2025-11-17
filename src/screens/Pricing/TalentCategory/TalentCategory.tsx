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
  { id: 1, name: 'Demetri', initial: 'P.', experience: 7, university: 'Swinburne University of Technology', company: 'MAS Holdings', category: 'Executive Assistant+', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68xCJyjzwUC0J89fXPOkmIvW09vTZjHRkVg&s' },
  { id: 2, name: 'Pasini', initial: 'W.', experience: 6, university: 'City University of New York', company: 'Ogilvy Public Relations', category: 'Finance', imageUrl: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww' },
  { id: 3, name: 'Anjalie', initial: 'R.', experience: 7, university: 'University of Plymouth', company: 'Third Space Global', category: 'Operations', imageUrl: 'https://www.shutterstock.com/image-photo/portrait-young-african-businesswoman-smiling-260nw-725292427.jpg' },
  { id: 4, name: 'John', initial: 'D.', experience: 5, university: 'Stanford University', company: 'Tech Solutions', category: 'Marketing', imageUrl: 'https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740&q=80' },
  { id: 5, name: 'Emma', initial: 'S.', experience: 8, university: 'MIT', company: 'Global Finance Co.', category: 'Finance', imageUrl: 'https://thumbs.dreamstime.com/b/photo-young-happy-cheerful-excited-positive-good-mood-afro-girl-white-blouse-isolated-blue-color-background-223427564.jpg' },
  { id: 6, name: 'Chris', initial: 'B.', experience: 6, university: 'London School of Economics', company: 'Future Ops', category: 'Operations', imageUrl: 'https://www.shutterstock.com/image-photo/serious-young-ambitious-indian-businessman-260nw-2598795817.jpg' },
  // Add more data for full category display
];

const categories: Category[] = [
  'Executive Assistant+',
  'Finance',
  'Marketing',
  'Operations',
];

// Helper to get an icon based on the category name
const getCategoryIcon = (category: Category) => {
  switch (category) {
    case 'Executive Assistant+': return '★';
    case 'Finance': return '$';
    case 'Marketing': return '◆';
    case 'Operations': return '⚙';
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
          <div className="detail-icon education-icon"></div>
          <span className="text">{university}</span>
        </div>
        <div className="detail-item">
          <div className="detail-icon company-icon"></div>
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
          <span className="category-icon">{getCategoryIcon(category)}</span>
          <span className="category-label">{category}</span>
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
      <div className="section-header">
        <h2 className="section-title">Browse Talent by Category</h2>
        <p className="section-subtitle">Discover highly skilled professionals across various specializations</p>
      </div>
      
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
          <p className="no-results">No talent found in the {activeCategory} category.</p>
        )}
      </div>

    </section>
  );
};

export default TalentSection;