// Google Sheets API Service
// Replace these URLs with your actual Google Apps Script Web App URLs after deployment
const HIRE_FORM_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyl2TAC332KpwvYKgcvgDGW6qVtVy4mqeK3-AYGoRHSoSVcFdlDKF5Vjfxh-xjsMRUb/exec';
const CAREER_FORM_SCRIPT_URL = 'YOUR_CAREER_FORM_GOOGLE_APPS_SCRIPT_URL_HERE';

export interface HireFormData {
  // Step 1
  firstName: string;
  lastName: string;
  workEmail: string;
  // Step 2
  companyName: string;
  companyWebsite: string;
  yourTitle: string;
  industry: string;
  howDidYouHear: string;
  lookingFor: string[];
}

export interface CareerFormData {
  // Step 1 - Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  // Step 2 - Professional Information
  roleCategory: string;
  experience: string;
  currentTitle: string;
  availability: string;
  desiredSalary: string;
  // Step 3 - Skills & Portfolio
  skills: string[];
  portfolioUrl: string;
  linkedinUrl: string;
  coverLetter: string;
}

export interface SubmitResponse {
  success: boolean;
  message: string;
  error?: string;
  timestamp?: string;
}

/**
 * Submit hire form data to Google Sheets via Google Apps Script
 */
export async function submitHireForm(data: HireFormData): Promise<SubmitResponse> {
  try {
    // Make the API call
    await fetch(HIRE_FORM_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors' // Required for Google Apps Script
    });

    // Note: With no-cors mode, we can't read the response
    // We'll assume success if no error was thrown
    return {
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error submitting hire form:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Submit career form data to Google Sheets via Google Apps Script
 */
export async function submitCareerForm(data: CareerFormData): Promise<SubmitResponse> {
  try {
    // Make the API call
    await fetch(CAREER_FORM_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      mode: 'no-cors' // Required for Google Apps Script
    });

    // Note: With no-cors mode, we can't read the response
    // We'll assume success if no error was thrown
    return {
      success: true,
      message: 'Application submitted successfully! We will review your profile and get back to you soon.',
      timestamp: new Date().toISOString()
    };

  } catch (error) {
    console.error('Error submitting career form:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again or contact us directly at careers@talentphere.com.',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Alternative method with standard fetch (requires CORS configuration in Apps Script)
 */
export async function submitHireFormWithResponse(data: HireFormData): Promise<SubmitResponse> {
  try {
    const response = await fetch(HIRE_FORM_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;

  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Failed to submit form. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    };
  }
}

/**
 * Test the Google Apps Script connection
 */
export async function testConnection(): Promise<boolean> {
  try {
    const response = await fetch(HIRE_FORM_SCRIPT_URL, {
      method: 'GET'
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Connection test successful:', data);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Connection test failed:', error);
    return false;
  }
}
