// HireForm.tsx
import React, { useState } from 'react';
import HireFormStep1 from './HireFormStep1';
import HireFormStep2 from './HireFormStep2';
import HireFormStep3 from './HireFormStep3';
import { submitHireForm } from '../../services/googleSheets';
import type { HireFormData } from '../../services/googleSheets';
import './HireForm.css';

interface Step1Data {
  firstName: string;
  lastName: string;
  workEmail: string;
}

interface Step2Data {
  companyName: string;
  companyWebsite: string;
  yourTitle: string;
  industry: string;
  howDidYouHear: string;
  lookingFor: string[];
}

const HireForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleStep1Next = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Next = async (data: Step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
    setIsSubmitting(true);

    // Merge Step 1 and Step 2 data
    const completeFormData: HireFormData = {
      firstName: step1Data?.firstName || '',
      lastName: step1Data?.lastName || '',
      workEmail: step1Data?.workEmail || '',
      companyName: data.companyName,
      companyWebsite: data.companyWebsite,
      yourTitle: data.yourTitle,
      industry: data.industry,
      howDidYouHear: data.howDidYouHear,
      lookingFor: data.lookingFor
    };

    // Submit to Google Sheets
    const result = await submitHireForm(completeFormData);
    
    setIsSubmitting(false);
    setSubmitSuccess(result.success);
    
    if (!result.success) {
      setErrorMessage(result.message || 'An error occurred while submitting the form.');
    }
  };

  const handleStep2Back = () => {
    setCurrentStep(1);
  };

  const handleRetry = () => {
    // Reset to step 1 to try again
    setCurrentStep(1);
    setSubmitSuccess(null);
    setErrorMessage('');
  };

  return (
    <div className="hire-form-page">
      {currentStep === 1 && (
        <HireFormStep1 
          onNext={handleStep1Next} 
          initialData={step1Data || undefined}
        />
      )}
      {currentStep === 2 && (
        <HireFormStep2 
          onNext={handleStep2Next} 
          onBack={handleStep2Back}
          initialData={step2Data || undefined}
        />
      )}
      {currentStep === 3 && (
        <HireFormStep3 
          isSubmitting={isSubmitting}
          submitSuccess={submitSuccess}
          errorMessage={errorMessage}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default HireForm;
