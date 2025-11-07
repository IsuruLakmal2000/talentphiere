// CareerForm.tsx - Main Career Application Form Container
import React, { useState } from 'react';
import CareerFormStep1 from './CareerFormStep1';
import CareerFormStep2 from './CareerFormStep2';
import CareerFormStep3 from './CareerFormStep3';
import CareerFormStep4 from './CareerFormStep4';
import { submitCareerForm } from '../../services/googleSheets';
import type { CareerFormData } from '../../services/googleSheets';
import './CareerForm.css';

interface Step1Data {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
}

interface Step2Data {
  roleCategory: string;
  experience: string;
  currentTitle: string;
  availability: string;
  desiredSalary: string;
}

interface Step3Data {
  skills: string[];
  portfolioUrl: string;
  linkedinUrl: string;
  coverLetter: string;
}

const CareerForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null);
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null);
  const [step3Data, setStep3Data] = useState<Step3Data | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleStep1Next = (data: Step1Data) => {
    setStep1Data(data);
    setCurrentStep(2);
  };

  const handleStep2Next = (data: Step2Data) => {
    setStep2Data(data);
    setCurrentStep(3);
  };

  const handleStep3Next = async (data: Step3Data) => {
    setStep3Data(data);
    setCurrentStep(4);
    setIsSubmitting(true);

    // Merge all steps data
    const completeFormData: CareerFormData = {
      // Step 1
      firstName: step1Data?.firstName || '',
      lastName: step1Data?.lastName || '',
      email: step1Data?.email || '',
      phone: step1Data?.phone || '',
      location: step1Data?.location || '',
      // Step 2
      roleCategory: step2Data?.roleCategory || '',
      experience: step2Data?.experience || '',
      currentTitle: step2Data?.currentTitle || '',
      availability: step2Data?.availability || '',
      desiredSalary: step2Data?.desiredSalary || '',
      // Step 3
      skills: data.skills,
      portfolioUrl: data.portfolioUrl,
      linkedinUrl: data.linkedinUrl,
      coverLetter: data.coverLetter
    };

    // Submit to Google Sheets
    const result = await submitCareerForm(completeFormData);
    
    setIsSubmitting(false);
    setSubmitSuccess(result.success);
    
    if (!result.success) {
      setErrorMessage(result.message || 'An error occurred while submitting the form.');
    }
  };

  const handleStep2Back = () => {
    setCurrentStep(1);
  };

  const handleStep3Back = () => {
    setCurrentStep(2);
  };

  const handleRetry = () => {
    // Reset to step 1 to try again
    setCurrentStep(1);
    setSubmitSuccess(null);
    setErrorMessage('');
  };

  return (
    <div className="career-form-page">
      {currentStep === 1 && (
        <CareerFormStep1 
          onNext={handleStep1Next} 
          initialData={step1Data || undefined}
        />
      )}
      {currentStep === 2 && (
        <CareerFormStep2 
          onNext={handleStep2Next} 
          onBack={handleStep2Back}
          initialData={step2Data || undefined}
        />
      )}
      {currentStep === 3 && (
        <CareerFormStep3 
          onNext={handleStep3Next} 
          onBack={handleStep3Back}
          initialData={step3Data || undefined}
        />
      )}
      {currentStep === 4 && (
        <CareerFormStep4 
          isSubmitting={isSubmitting}
          submitSuccess={submitSuccess}
          errorMessage={errorMessage}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default CareerForm;
