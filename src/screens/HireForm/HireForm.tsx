// HireForm.tsx
import React, { useState } from 'react';
import HireFormStep1 from './HireFormStep1';
import HireFormStep2 from './HireFormStep2';
import './HireForm.css';

const HireForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {}
  });

  const handleStep1Next = (data: any) => {
    setFormData(prev => ({ ...prev, step1: data }));
    setCurrentStep(2);
  };

  const handleStep2Next = (data: any) => {
    setFormData(prev => ({ ...prev, step2: data }));
    setCurrentStep(3);
  };

  const handleStep2Back = () => {
    setCurrentStep(1);
  };

  const handleStep3Submit = (data: any) => {
    setFormData(prev => ({ ...prev, step3: data }));
    console.log('Form submitted:', { ...formData, step3: data });
    // Handle final submission
  };

  return (
    <div className="hire-form-page">
      {currentStep === 1 && <HireFormStep1 onNext={handleStep1Next} />}
      {currentStep === 2 && <HireFormStep2 onNext={handleStep2Next} onBack={handleStep2Back} />}
      {/* Step 3 to be implemented */}
    </div>
  );
};

export default HireForm;
