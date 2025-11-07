// CareerFormStep2.tsx - Professional Background
import React, { useState } from 'react';
import './CareerFormStep2.css';

interface CareerFormStep2Props {
  onNext: (data: FormData) => void;
  onBack: () => void;
  initialData?: FormData;
}

interface FormData {
  roleCategory: string;
  experience: string;
  currentTitle: string;
  availability: string;
  desiredSalary: string;
}

const CareerFormStep2: React.FC<CareerFormStep2Props> = ({ onNext, onBack, initialData }) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      roleCategory: '',
      experience: '',
      currentTitle: '',
      availability: '',
      desiredSalary: ''
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="career-form-container">
      <div className="career-form-wrapper">
        {/* Left Side - Steps */}
        <div className="career-form-left">
          <div className="career-form-logo">
            <div className="logo-circle">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">OCEANS</span>
          </div>

          <div className="career-form-steps">
            <div className="step-item completed">
              <div className="step-number completed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Personal Info</h3>
                <p className="step-description">Tell us about yourself</p>
              </div>
            </div>

            <div className="step-item active">
              <div className="step-number active">2</div>
              <div className="step-content">
                <h3 className="step-title">Professional Background</h3>
                <p className="step-description">Share your experience</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Skills & Portfolio</h3>
                <p className="step-description">Showcase your expertise</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Submit</h3>
                <p className="step-description">Review and send</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="career-form-right">
          <div className="form-content">
            <h1 className="form-heading">Professional Background</h1>
            <p className="form-subheading">Share your experience and expertise</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="roleCategory" className="form-label">What type of role are you interested in?</label>
                <select
                  id="roleCategory"
                  name="roleCategory"
                  value={formData.roleCategory}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="Development & Innovation">Development & Innovation</option>
                  <option value="Infrastructure & Operations">Infrastructure & Operations</option>
                  <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                  <option value="Brand & Strategy">Brand & Strategy</option>
                  <option value="Full-Stack Development">Full-Stack Development</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Engineer">Backend Engineer</option>
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="DevOps & Cloud">DevOps & Cloud</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="QA / Test Engineer">QA / Test Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="experience" className="form-label">Years of Professional Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3-5 years">3-5 years</option>
                  <option value="5-8 years">5-8 years</option>
                  <option value="8+ years">8+ years</option>
                  <option value="10+ years">10+ years</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="currentTitle" className="form-label">Current/Most Recent Job Title</label>
                <input
                  type="text"
                  id="currentTitle"
                  name="currentTitle"
                  value={formData.currentTitle}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Senior Software Engineer"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="availability" className="form-label">When are you available to start?</label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="Immediately">Immediately</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="Within 2 months">Within 2 months</option>
                  <option value="Within 3 months">Within 3 months</option>
                  <option value="Just exploring">Just exploring opportunities</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="desiredSalary" className="form-label">Desired Salary Range (USD/year)</label>
                <select
                  id="desiredSalary"
                  name="desiredSalary"
                  value={formData.desiredSalary}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                  <option value="$50,000 - $70,000">$50,000 - $70,000</option>
                  <option value="$70,000 - $90,000">$70,000 - $90,000</option>
                  <option value="$90,000 - $120,000">$90,000 - $120,000</option>
                  <option value="$120,000 - $150,000">$120,000 - $150,000</option>
                  <option value="$150,000+">$150,000+</option>
                  <option value="Open to discussion">Open to discussion</option>
                </select>
              </div>

              <div className="form-button-group">
                <button type="button" onClick={onBack} className="form-back-btn">
                  Back
                </button>
                <button type="submit" className="form-submit-btn">
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFormStep2;
