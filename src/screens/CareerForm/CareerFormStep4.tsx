// CareerFormStep4.tsx - Success/Thank You Page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerFormStep4.css';

interface CareerFormStep4Props {
  isSubmitting: boolean;
  submitSuccess: boolean | null;
  errorMessage?: string;
  onRetry?: () => void;
}

const CareerFormStep4: React.FC<CareerFormStep4Props> = ({ 
  isSubmitting, 
  submitSuccess, 
  errorMessage,
  onRetry 
}) => {
  const navigate = useNavigate();

  // Determine submission status
  const getSubmissionStatus = (): 'submitting' | 'success' | 'error' => {
    if (isSubmitting) return 'submitting';
    if (submitSuccess === true) return 'success';
    if (submitSuccess === false) return 'error';
    return 'submitting';
  };

  const submissionStatus = getSubmissionStatus();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
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

            <div className="step-item completed">
              <div className="step-number completed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Skills & Portfolio</h3>
                <p className="step-description">Showcase your expertise</p>
              </div>
            </div>

            <div className="step-item active">
              <div className="step-number active">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">All done!</h3>
                <p className="step-description">We'll be in touch soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Success Message */}
        <div className="career-form-right">
          <div className="form-content success-content">
            {submissionStatus === 'submitting' && (
              <>
                <div className="success-icon submitting">
                  <div className="spinner"></div>
                </div>
                <h1 className="success-heading">Submitting your application...</h1>
                <p className="success-description">
                  Please wait while we process your information.
                </p>
              </>
            )}

            {submissionStatus === 'success' && (
              <>
                <div className="success-icon">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="#2c5f7a" strokeWidth="4"/>
                    <path d="M25 40L35 50L55 30" stroke="#2c5f7a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h1 className="success-heading">Application Submitted Successfully!</h1>
                <p className="success-description">
                  Thank you for applying to join the Oceans team! We've received your application 
                  and our recruitment team will review it carefully.
                </p>
                <div className="success-details">
                  <div className="detail-item">
                    <div className="detail-icon">📧</div>
                    <div className="detail-text">
                      <strong>Check your email</strong>
                      <span>We've sent you a confirmation with your application details</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">📅</div>
                    <div className="detail-text">
                      <strong>What's next?</strong>
                      <span>Our team will review your profile and reach out if there's a match</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">💼</div>
                    <div className="detail-text">
                      <strong>Timeline</strong>
                      <span>We typically respond within 5-7 business days</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">💬</div>
                    <div className="detail-text">
                      <strong>Questions?</strong>
                      <span>Feel free to reach out to careers@oceans.com</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="back-home-btn"
                  onClick={handleBackToHome}
                >
                  Back to Home
                </button>
              </>
            )}

            {submissionStatus === 'error' && (
              <>
                <div className="success-icon error">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="#dc2626" strokeWidth="4"/>
                    <path d="M30 30L50 50M50 30L30 50" stroke="#dc2626" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <h1 className="success-heading error-heading">Oops! Something went wrong</h1>
                <p className="success-description">
                  {errorMessage || 'We encountered an error while submitting your application. Please try again.'}
                </p>
                <div className="error-actions">
                  <button 
                    className="retry-btn"
                    onClick={handleRetry}
                  >
                    Try Again
                  </button>
                  <button 
                    className="back-home-btn secondary"
                    onClick={handleBackToHome}
                  >
                    Back to Home
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFormStep4;
