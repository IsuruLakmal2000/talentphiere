# 🚀 Quick Start Guide - Oceans Hire Form

## Get Started in 5 Minutes

This is the fastest way to get your hire form up and running with Google Sheets integration.

## Step 1: Create Google Sheet (2 min)

1. Go to [sheets.google.com](https://sheets.google.com)
2. Create new spreadsheet → Name it "Oceans Hire Form"
3. In Row 1, add these headers (A1 through J1):

```
Timestamp | First Name | Last Name | Work Email | Company Name | Company Website | Your Title | Industry | How Did You Hear | Looking For
```

4. Copy the Sheet ID from URL (between `/d/` and `/edit`):
   - URL: `https://docs.google.com/spreadsheets/d/COPY_THIS_PART/edit`

## Step 2: Deploy Apps Script (2 min)

1. In your sheet: **Extensions** → **Apps Script**
2. Delete existing code
3. Copy ALL code from `GOOGLE_APPS_SCRIPT.js` in this project
4. Update line 3 with YOUR Sheet ID:
   ```javascript
   const SPREADSHEET_ID = 'YOUR_SHEET_ID_HERE';
   ```
5. Click **Deploy** → **New deployment**
6. Select type: **Web app**
7. Settings:
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy** → **Authorize access** → Allow permissions
9. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/...`)

## Step 3: Update React App (1 min)

1. Open `src/services/googleSheets.ts`
2. Replace line 3:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';
   ```
   With your actual URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
3. Save the file

## Step 4: Test It! (30 sec)

```bash
# Start development server
npm run dev

# Open browser and navigate to:
# http://localhost:5173/hire-form

# Fill out the form and submit
# Check your Google Sheet for the new entry!
```

## ✅ Verification Checklist

- [ ] Google Sheet has 10 column headers in Row 1
- [ ] Apps Script has correct Spreadsheet ID
- [ ] Apps Script is deployed as Web App
- [ ] React app has correct Web App URL
- [ ] Form loads at `/hire-form`
- [ ] Can navigate through all 3 steps
- [ ] Submission creates new row in Google Sheet

## 🐛 Common Issues

### "Form submitted" but no data in sheet
→ Double-check Spreadsheet ID in Apps Script

### CORS error in console
→ This is normal! Form still works with `no-cors` mode

### Can't authorize Apps Script
→ Try incognito mode or different browser

### Build errors in React
→ Make sure you saved all files and restart dev server

## 📚 Need More Help?

- **Detailed Setup:** See `GOOGLE_SHEETS_SETUP.md`
- **Deployment:** See `DEPLOYMENT_CHECKLIST.md`
- **Technical Docs:** See `HIRE_FORM_README.md`
- **Full Summary:** See `IMPLEMENTATION_SUMMARY.md`

## 🎯 What You Get

A professional 3-step hire form with:
- ✨ Beautiful full-screen UI
- 📊 Automatic Google Sheets integration
- ✅ Success/error handling
- 📱 Mobile responsive
- 🔒 Secure data handling

---

**That's it! You're done in 5 minutes.** 🎉

Questions? Check the detailed guides in the documentation files.
