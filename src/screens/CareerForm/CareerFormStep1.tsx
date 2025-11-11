// CareerFormStep1.tsx - Personal Information
import React, { useState } from 'react';
import './CareerFormStep1.css';

interface CareerFormStep1Props {
  onNext: (data: FormData) => void;
  initialData?: FormData;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
}

const CareerFormStep1: React.FC<CareerFormStep1Props> = ({ onNext, initialData }) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: ''
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
            <span className="logo-text">TALENTPHERE</span>
          </div>

          <div className="career-form-steps">
            <div className="step-item active">
              <div className="step-number active">1</div>
              <div className="step-content">
                <h3 className="step-title">Personal Info</h3>
                <p className="step-description">Tell us about yourself</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
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
            <h1 className="form-heading">Start Your Journey With Talentphere</h1>
            <p className="form-subheading">Let's begin with your basic information</p>

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
                    placeholder="John"
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
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="location" className="form-label">Location (City, Country)</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="San Francisco, USA"
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

export default CareerFormStep1;
