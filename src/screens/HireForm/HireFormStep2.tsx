// HireFormStep2.tsx
import React, { useState } from 'react';
import './HireFormStep2.css';

interface HireFormStep2Props {
  onNext: (data: FormData) => void;
  onBack: () => void;
  initialData?: FormData;
}

interface FormData {
  companyName: string;
  companyWebsite: string;
  yourTitle: string;
  industry: string;
  howDidYouHear: string;
  lookingFor: string[];
}

const HireFormStep2: React.FC<HireFormStep2Props> = ({ onNext, onBack, initialData }) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      companyName: '',
      companyWebsite: '',
      yourTitle: '',
      industry: '',
      howDidYouHear: '',
      lookingFor: []
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      lookingFor: checked
        ? [...prev.lookingFor, value]
        : prev.lookingFor.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <div className="hire-form-container">
      <div className="hire-form-wrapper">
        {/* Left Side - Steps */}
        <div className="hire-form-left">
          <div className="hire-form-logo">
            <span className="logo-text">TALENTPHERE</span>
          </div>

          <div className="hire-form-steps">
            <div className="step-item completed">
              <div className="step-number completed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">About you</h3>
                <p className="step-description">We're excited to get to know you</p>
              </div>
            </div>

            <div className="step-item active">
              <div className="step-number active">2</div>
              <div className="step-content">
                <h3 className="step-title">Your work</h3>
                <p className="step-description">Tell us about what you do and what you're looking for</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Book a quick chat</h3>
                <p className="step-description">Get personalized answers about Talentphere from our team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="hire-form-right">
          <div className="form-content">
            <h1 className="form-heading">Let's dive in</h1>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">Company name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Company name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyWebsite" className="form-label">Company Website</label>
                <input
                  type="text"
                  id="companyWebsite"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="www.example.com or https://example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="yourTitle" className="form-label">Your Title</label>
                <input
                  type="text"
                  id="yourTitle"
                  name="yourTitle"
                  value={formData.yourTitle}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry" className="form-label">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="form-input form-select"
                  required
                >
                  <option value="">Please select...</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="howDidYouHear" className="form-label">How did you hear about us?</label>
                <input
                  type="text"
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Cousteau Newsletter"
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="form-label checkbox-label">
                  Finally, let us know — what kind of Talentphere Diver are you looking for?
                  <span className="label-subtitle">Select as many as you want</span>
                </label>
                
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Admin / Ops / Chief of Staff"
                      checked={formData.lookingFor.includes('Admin / Ops / Chief of Staff')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Admin / Ops / Chief of Staff</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Marketing"
                      checked={formData.lookingFor.includes('Marketing')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Marketing</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Finance"
                      checked={formData.lookingFor.includes('Finance')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Finance</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Sales / Biz Dev"
                      checked={formData.lookingFor.includes('Sales / Biz Dev')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Sales / Biz Dev</span>
                  </label>
                </div>
              </div>

              <div className="form-buttons">
                <button type="button" className="form-back-btn" onClick={onBack}>
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

export default HireFormStep2;
