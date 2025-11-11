/**
 * TALENTPHERE CAREER FORM GOOGLE APPS SCRIPT
 * 
 * This script handles submissions from the Talentphere Career Application Form
 * It saves data to Google Sheets and optionally sends email notifications
 * 
 * SETUP INSTRUCTIONS:
 * ===================
 * 
 * 1. Open your existing Google Spreadsheet OR create a new one:
 *    - If creating new: Go to https://sheets.google.com and create a spreadsheet
 *    - Name it "Talentphere Career Applications" or use your existing spreadsheet
 *    - Copy the Spreadsheet ID from the URL:
 *      https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
 * 
 * 2. Update Configuration Below:
 *    - Replace SPREADSHEET_ID with your actual spreadsheet ID
 *    - Update ADMIN_EMAIL if you want email notifications
 * 
 * 3. Open Apps Script Editor:
 *    - In your spreadsheet, click Extensions > Apps Script
 *    - Delete any existing code
 *    - Copy and paste this entire script
 *    - Save the project (Ctrl+S or Cmd+S)
 * 
 * 4. Deploy as Web App:
 *    - Click Deploy > New Deployment
 *    - Click the gear icon next to "Select type"
 *    - Choose "Web app"
 *    - Fill in:
 *      - Description: "Talentphere Career Form Handler"
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    - Click "Deploy"
 *    - Authorize the script when prompted
 *    - Copy the Web App URL
 * 
 * 5. Update Your React App:
 *    - Open src/services/googleSheets.ts
 *    - Replace 'YOUR_CAREER_FORM_GOOGLE_APPS_SCRIPT_URL_HERE' with the copied URL
 * 
 * 6. Test:
 *    - Run the testWithSampleData() function in Apps Script first
 *    - Then submit a test application from your website
 *    - Check the Google Sheet for the new entries
 */

// ========================================
// CONFIGURATION - UPDATE THESE VALUES
// ========================================
const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE'; // ⚠️ REPLACE WITH YOUR ACTUAL SPREADSHEET ID
const ADMIN_EMAIL = 'your-email@example.com'; // ⚠️ REPLACE WITH YOUR EMAIL for notifications
const SHEET_NAME = 'Career Applications'; // Name of the sheet tab

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
    
    // Send email notification with CV attachment (optional)
    if (ADMIN_EMAIL !== 'your-email@example.com') {
      sendEmailNotificationWithCV(data);
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
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
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
    'Cover Letter',
    'CV Attached'
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
  sheet.setColumnWidth(16, 100); // CV Attached
}

/**
 * Append form data to sheet
 */
function appendFormData(sheet, data) {
  const timestamp = new Date();
  
  // Check if CV was uploaded
  const cvAttached = data.cvFile ? 'Yes' : 'No';
  
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
    data.coverLetter || '',
    cvAttached
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
 * Send email notification to admin with CV attachment
 */
function sendEmailNotificationWithCV(data) {
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

View all applications: ${SpreadsheetApp.openById(SPREADSHEET_ID).getUrl()}
    `;
    
    // Check if CV was uploaded
    if (data.cvFile && data.cvFileName && data.cvMimeType) {
      try {
        // Decode the base64 file data
        const cvBlob = Utilities.newBlob(
          Utilities.base64Decode(data.cvFile),
          data.cvMimeType,
          data.cvFileName
        );
        
        // Send email with CV attachment
        MailApp.sendEmail({
          to: ADMIN_EMAIL,
          subject: subject,
          body: body,
          attachments: [cvBlob]
        });
        
        Logger.log('Email sent with CV attachment: ' + data.cvFileName);
      } catch (attachmentError) {
        console.error('Error attaching CV to email:', attachmentError);
        // Send email without attachment if there's an error
        MailApp.sendEmail(ADMIN_EMAIL, subject, body + '\n\n⚠️ Note: CV attachment could not be processed.');
      }
    } else {
      // Send email without attachment if no CV was uploaded
      MailApp.sendEmail(ADMIN_EMAIL, subject, body + '\n\n⚠️ Note: No CV was uploaded with this application.');
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Don't throw error - form submission should still succeed even if email fails
  }
}

/**
 * Send email notification to admin (legacy function - kept for compatibility)
 */
function sendEmailNotification(data) {
  sendEmailNotificationWithCV(data);
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
    coverLetter: 'I am excited to apply for this position...',
    // CV fields (optional - comment out to test without CV)
    cvFile: null, // Base64 string would go here
    cvFileName: null, // 'John_Doe_Resume.pdf'
    cvMimeType: null // 'application/pdf'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
