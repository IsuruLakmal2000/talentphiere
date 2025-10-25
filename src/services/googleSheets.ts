// Google Sheets API Service
// Replace this URL with your actual Google Apps Script Web App URL after deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyl2TAC332KpwvYKgcvgDGW6qVtVy4mqeK3-AYGoRHSoSVcFdlDKF5Vjfxh-xjsMRUb/exec';

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
    await fetch(GOOGLE_SCRIPT_URL, {
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
 * Alternative method with standard fetch (requires CORS configuration in Apps Script)
 */
export async function submitHireFormWithResponse(data: HireFormData): Promise<SubmitResponse> {
  try {
   

    const response = await fetch(GOOGLE_SCRIPT_URL, {
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
    

    const response = await fetch(GOOGLE_SCRIPT_URL, {
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
