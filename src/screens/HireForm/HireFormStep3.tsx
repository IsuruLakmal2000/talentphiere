// HireFormStep3.tsx - Success/Thank You Page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HireFormStep3.css';

interface HireFormStep3Props {
  isSubmitting: boolean;
  submitSuccess: boolean | null;
  errorMessage?: string;
  onRetry?: () => void;
}

const HireFormStep3: React.FC<HireFormStep3Props> = ({ 
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
    <div className="hire-form-container">
      <div className="hire-form-wrapper">
        {/* Left Side - Steps */}
        <div className="hire-form-left">
          <div className="hire-form-logo">
            <div className="logo-circle">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="20" r="4" fill="white"/>
              </svg>
            </div>
            <span className="logo-text">OCEANS</span>
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

            <div className="step-item completed">
              <div className="step-number completed">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.6667 5L7.5 14.1667L3.33334 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="step-content">
                <h3 className="step-title">Your work</h3>
                <p className="step-description">Tell us about what you do and what you're looking for</p>
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
        <div className="hire-form-right">
          <div className="form-content success-content">
            {submissionStatus === 'submitting' && (
              <>
                <div className="success-icon submitting">
                  <div className="spinner"></div>
                </div>
                <h1 className="success-heading">Submitting your information...</h1>
                <p className="success-description">
                  Please wait while we process your details.
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
                <h1 className="success-heading">Thank you for your interest!</h1>
                <p className="success-description">
                  We've received your information and our team will be in touch with you shortly. 
                  We typically respond within 24-48 hours.
                </p>
                <div className="success-details">
                  <div className="detail-item">
                    <div className="detail-icon">📧</div>
                    <div className="detail-text">
                      <strong>Check your email</strong>
                      <span>We'll send you a confirmation shortly</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">📅</div>
                    <div className="detail-text">
                      <strong>What's next?</strong>
                      <span>Our team will review your requirements and reach out to schedule a call</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon">💬</div>
                    <div className="detail-text">
                      <strong>Questions?</strong>
                      <span>Feel free to reach out to us at hello@oceans.com</span>
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
                    <circle cx="40" cy="40" r="38" stroke="#ef4444" strokeWidth="4"/>
                    <path d="M30 30L50 50M50 30L30 50" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </div>
                <h1 className="success-heading error-heading">Oops! Something went wrong</h1>
                <p className="success-description">
                  {errorMessage || 'We encountered an error while submitting your form. Please try again.'}
                </p>
                <button 
                  className="back-home-btn retry-btn"
                  onClick={handleRetry}
                >
                  Try Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireFormStep3;
