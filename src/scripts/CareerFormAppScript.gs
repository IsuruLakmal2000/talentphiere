/**
 * CAREER FORM GOOGLE APPS SCRIPT
 * 
 * SETUP INSTRUCTIONS:
 * ===================
 * 
 * 1. Create a new Google Sheet:
 *    - Go to https://sheets.google.com
 *    - Create a new spreadsheet
 *    - Name it "Oceans Career Applications" or similar
 * 
 * 2. Open Apps Script Editor:
 *    - Click Extensions > Apps Script
 *    - Delete any existing code
 *    - Copy and paste this entire script
 * 
 * 3. Deploy as Web App:
 *    - Click Deploy > New Deployment
 *    - Click the gear icon next to "Select type"
 *    - Choose "Web app"
 *    - Fill in:
 *      - Description: "Career Form Handler"
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    - Click "Deploy"
 *    - Copy the Web App URL
 * 
 * 4. Update Your React App:
 *    - Open src/services/googleSheets.ts
 *    - Replace 'YOUR_CAREER_FORM_GOOGLE_APPS_SCRIPT_URL_HERE' with the copied URL
 * 
 * 5. Test the connection:
 *    - Submit a test application from your website
 *    - Check the Google Sheet for the new entry
 * 
 * OPTIONAL: Email Notifications
 * ==============================
 * Update the ADMIN_EMAIL constant below with your email address
 * to receive notifications when new applications are submitted.
 */

// Configuration
const ADMIN_EMAIL = 'your-email@example.com'; // Change this to your email
const SHEET_NAME = 'Applications'; // Name of the sheet tab

/**
 * Handle POST requests (form submissions)
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create the sheet
    const sheet = getOrCreateSheet();
    
    // Create headers if this is the first entry
    if (sheet.getLastRow() === 0) {
      createHeaders(sheet);
    }
    
    // Append the form data
    appendFormData(sheet, data);
    
    // Send email notification (optional)
    if (ADMIN_EMAIL !== 'your-email@example.com') {
      sendEmailNotification(data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Application submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error processing submission',
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Career Form API is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Get or create the applications sheet
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  
  return sheet;
}

/**
 * Create header row
 */
function createHeaders(sheet) {
  const headers = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Location',
    'Role Category',
    'Years of Experience',
    'Current Title',
    'Availability',
    'Desired Salary',
    'Skills',
    'Portfolio URL',
    'LinkedIn URL',
    'Cover Letter'
  ];
  
  sheet.appendRow(headers);
  
  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#2c5f7a');
  headerRange.setFontColor('#ffffff');
  headerRange.setHorizontalAlignment('center');
  
  // Freeze header row
  sheet.setFrozenRows(1);
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 120); // First Name
  sheet.setColumnWidth(3, 120); // Last Name
  sheet.setColumnWidth(4, 200); // Email
  sheet.setColumnWidth(5, 150); // Phone
  sheet.setColumnWidth(6, 150); // Location
  sheet.setColumnWidth(7, 200); // Role Category
  sheet.setColumnWidth(8, 150); // Experience
  sheet.setColumnWidth(9, 180); // Current Title
  sheet.setColumnWidth(10, 150); // Availability
  sheet.setColumnWidth(11, 150); // Salary
  sheet.setColumnWidth(12, 250); // Skills
  sheet.setColumnWidth(13, 250); // Portfolio
  sheet.setColumnWidth(14, 250); // LinkedIn
  sheet.setColumnWidth(15, 400); // Cover Letter
}

/**
 * Append form data to sheet
 */
function appendFormData(sheet, data) {
  const timestamp = new Date();
  
  // Prepare row data
  const rowData = [
    timestamp,
    data.firstName || '',
    data.lastName || '',
    data.email || '',
    data.phone || '',
    data.location || '',
    data.roleCategory || '',
    data.experience || '',
    data.currentTitle || '',
    data.availability || '',
    data.desiredSalary || '',
    Array.isArray(data.skills) ? data.skills.join(', ') : data.skills || '',
    data.portfolioUrl || '',
    data.linkedinUrl || '',
    data.coverLetter || ''
  ];
  
  // Append the row
  sheet.appendRow(rowData);
  
  // Format the new row
  const lastRow = sheet.getLastRow();
  const range = sheet.getRange(lastRow, 1, 1, rowData.length);
  
  // Alternate row colors
  if (lastRow % 2 === 0) {
    range.setBackground('#f5f5f5');
  }
  
  // Wrap text for cover letter column
  sheet.getRange(lastRow, 15).setWrap(true);
}

/**
 * Send email notification to admin
 */
function sendEmailNotification(data) {
  try {
    const subject = `New Career Application: ${data.firstName} ${data.lastName} - ${data.roleCategory}`;
    
    const body = `
New Career Application Received
================================

PERSONAL INFORMATION:
---------------------
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Location: ${data.location}

PROFESSIONAL INFORMATION:
-------------------------
Role Category: ${data.roleCategory}
Years of Experience: ${data.experience}
Current Title: ${data.currentTitle}
Availability: ${data.availability}
Desired Salary: ${data.desiredSalary}

SKILLS & PORTFOLIO:
-------------------
Skills: ${Array.isArray(data.skills) ? data.skills.join(', ') : data.skills}
Portfolio: ${data.portfolioUrl || 'Not provided'}
LinkedIn: ${data.linkedinUrl || 'Not provided'}

COVER LETTER:
-------------
${data.coverLetter}

================================
Submitted: ${new Date().toLocaleString()}

View all applications: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;
    
    MailApp.sendEmail(ADMIN_EMAIL, subject, body);
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error - form submission should still succeed even if email fails
  }
}

/**
 * Test function - Run this to test the script
 */
function testScript() {
  const testData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, USA',
    roleCategory: 'Development & Innovation',
    experience: '5-8 years',
    currentTitle: 'Senior Software Engineer',
    availability: 'Within 1 month',
    desiredSalary: '$120,000 - $150,000',
    skills: ['React / Frontend', 'Node.js / Backend', 'Full-Stack Development'],
    portfolioUrl: 'https://johndoe.dev',
    linkedinUrl: 'https://linkedin.com/in/johndoe',
    coverLetter: 'I am excited to apply for this position...'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
