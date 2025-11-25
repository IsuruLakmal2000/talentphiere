// HireFormStep1.tsx
import React, { useState } from 'react';
import './HireFormStep1.css';

interface HireFormStep1Props {
  onNext: (data: FormData) => void;
  initialData?: FormData;
}

interface FormData {
  firstName: string;
  lastName: string;
  workEmail: string;
}

const HireFormStep1: React.FC<HireFormStep1Props> = ({ onNext, initialData }) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      firstName: '',
      lastName: '',
      workEmail: ''
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className="hire-form-container">
      <div className="hire-form-wrapper">
        {/* Left Side - Steps */}
        <div className="hire-form-left">
          <div className="hire-form-logo">
            <span className="logo-text">TALENTPHERE</span>
          </div>

          <div className="hire-form-steps">
            <div className="step-item active">
              <div className="step-number active">1</div>
              <div className="step-content">
                <h3 className="step-title">About you</h3>
                <p className="step-description">We're excited to get to know you</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
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
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Zale"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Perry"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="workEmail" className="form-label">Work Email</label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="zale@talentphere.com"
                  required
                />
              </div>

              <button type="submit" className="form-submit-btn">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireFormStep1;
