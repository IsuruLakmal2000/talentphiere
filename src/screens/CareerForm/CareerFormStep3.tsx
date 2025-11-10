// CareerFormStep3.tsx - Skills & Portfolio
import React, { useState } from 'react';
import './CareerFormStep3.css';

interface CareerFormStep3Props {
  onNext: (data: FormData) => void;
  onBack: () => void;
  initialData?: FormData;
}

interface FormData {
  skills: string[];
  portfolioUrl: string;
  linkedinUrl: string;
  coverLetter: string;
  cvFile?: File | null;
}

const CareerFormStep3: React.FC<CareerFormStep3Props> = ({ onNext, onBack, initialData }) => {
  const [formData, setFormData] = useState<FormData>(
    initialData || {
      skills: [],
      portfolioUrl: '',
      linkedinUrl: '',
      coverLetter: '',
      cvFile: null
    }
  );
  const [cvFileName, setCvFileName] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter(item => item !== value)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        e.target.value = '';
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (file.size > maxSize) {
        alert('File size must be less than 5MB');
        e.target.value = '';
        return;
      }

      setFormData(prev => ({
        ...prev,
        cvFile: file
      }));
      setCvFileName(file.name);
    }
  };

  const handleRemoveCV = () => {
    setFormData(prev => ({
      ...prev,
      cvFile: null
    }));
    setCvFileName('');
    // Reset file input
    const fileInput = document.getElementById('cvFile') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.skills.length === 0) {
      alert('Please select at least one skill');
      return;
    }
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

            <div className="step-item completed">
              <div className="step-number completed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Professional Background</h3>
                <p className="step-description">Share your experience</p>
              </div>
            </div>

            <div className="step-item active">
              <div className="step-number active">3</div>
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
            <h1 className="form-heading">Skills & Portfolio</h1>
            <p className="form-subheading">Show us what you can do</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group checkbox-group">
                <label className="form-label checkbox-label">
                  Select your key skills
                  <span className="label-subtitle">Choose all that apply</span>
                </label>
                
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="React / Frontend"
                      checked={formData.skills.includes('React / Frontend')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">React / Frontend</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Node.js / Backend"
                      checked={formData.skills.includes('Node.js / Backend')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Node.js / Backend</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Full-Stack Development"
                      checked={formData.skills.includes('Full-Stack Development')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Full-Stack Development</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Mobile Development"
                      checked={formData.skills.includes('Mobile Development')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Mobile Development</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="DevOps / Cloud"
                      checked={formData.skills.includes('DevOps / Cloud')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">DevOps / Cloud</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="UI/UX Design"
                      checked={formData.skills.includes('UI/UX Design')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">UI/UX Design</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Digital Marketing"
                      checked={formData.skills.includes('Digital Marketing')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Digital Marketing</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="Data Engineering"
                      checked={formData.skills.includes('Data Engineering')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">Data Engineering</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="AI / Machine Learning"
                      checked={formData.skills.includes('AI / Machine Learning')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">AI / Machine Learning</span>
                  </label>

                  <label className="checkbox-item">
                    <input
                      type="checkbox"
                      value="QA / Testing"
                      checked={formData.skills.includes('QA / Testing')}
                      onChange={handleCheckboxChange}
                    />
                    <span className="checkbox-text">QA / Testing</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="portfolioUrl" className="form-label">Portfolio / Website URL (Optional)</label>
                <input
                  type="url"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://yourportfolio.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="linkedinUrl" className="form-label">LinkedIn Profile (Optional)</label>
                <input
                  type="url"
                  id="linkedinUrl"
                  name="linkedinUrl"
                  value={formData.linkedinUrl}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div className="form-group">
                <label htmlFor="coverLetter" className="form-label">Tell us about yourself and why you'd be a great fit</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Share your experience, achievements, and what excites you about joining Oceans..."
                  rows={6}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvFile" className="form-label">
                  Upload Your CV/Resume (Optional)
                  <span className="label-subtitle">PDF or Word document, max 5MB</span>
                </label>
                <div className="file-upload-wrapper">
                  <input
                    type="file"
                    id="cvFile"
                    name="cvFile"
                    onChange={handleFileChange}
                    className="form-file-input"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <label htmlFor="cvFile" className="file-upload-label">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    <span>{cvFileName || 'Choose file or drag here'}</span>
                  </label>
                  {cvFileName && (
                    <div className="file-selected">
                      <span className="file-name">📄 {cvFileName}</span>
                      <button type="button" onClick={handleRemoveCV} className="file-remove-btn">
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-button-group">
                <button type="button" onClick={onBack} className="form-back-btn">
                  Back
                </button>
                <button type="submit" className="form-submit-btn">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFormStep3;
