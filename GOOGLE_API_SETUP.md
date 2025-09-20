# Complete Beginner's Guide: Gmail API & Google Calendar API Setup

This guide will walk you through obtaining all the necessary credentials for your Reliable Roofing Solutions booking system to integrate with Gmail and Google Calendar.

## Prerequisites
- Gmail account: roofingreliable.nz@gmail.com
- Google Cloud Console access
- About 15-20 minutes

---

## STEP 1: Access Google Cloud Console

1. **Open your browser** and go to: https://console.cloud.google.com
2. **Sign in** with your Gmail account (roofingreliable.nz@gmail.com)
3. **Create a new project** (or select existing one):
   - Click the project dropdown at the top
   - Click "NEW PROJECT"
   - Project name: "Reliable Roofing APIs" (or any name you prefer)
   - Click "CREATE"
   - Wait for the project to be created (takes 30-60 seconds)

---

## STEP 2: Enable Required APIs

### Enable Gmail API
1. **Navigate to APIs & Services**:
   - In the left sidebar, click "APIs & Services" → "Library"
   
2. **Search for Gmail API**:
   - In the search box, type "Gmail API"
   - Click on "Gmail API" from the results
   - Click the blue "ENABLE" button
   - Wait for confirmation message

### Enable Google Calendar API
1. **Still in API Library**:
   - Search for "Google Calendar API"
   - Click on "Google Calendar API" from results
   - Click the blue "ENABLE" button
   - Wait for confirmation

---

## STEP 3: Create OAuth 2.0 Credentials

1. **Go to Credentials page**:
   - In left sidebar: "APIs & Services" → "Credentials"

2. **Configure OAuth consent screen** (if not done already):
   - Click "OAuth consent screen" tab
   - Choose "External" (unless you have Google Workspace)
   - Click "CREATE"
   
   **Fill out required fields:**
   - App name: "Reliable Roofing Solutions"
   - User support email: roofingreliable.nz@gmail.com
   - Developer contact information: roofingreliable.nz@gmail.com
   - Click "SAVE AND CONTINUE"
   
   **Add scopes** (click "ADD OR REMOVE SCOPES"):
   - Search and add: `https://www.googleapis.com/auth/gmail.send`
   - Search and add: `https://www.googleapis.com/auth/calendar`
   - Click "UPDATE" then "SAVE AND CONTINUE"
   
   **Add test users:**
   - Click "ADD USERS"
   - Enter: roofingreliable.nz@gmail.com
   - Click "ADD" then "SAVE AND CONTINUE"

3. **Create OAuth Client ID**:
   - Click "Credentials" tab
   - Click "CREATE CREDENTIALS" → "OAuth 2.0 Client IDs"
   
   **Configure the credential:**
   - Application type: "Web application"
   - Name: "Reliable Roofing OAuth Client"
   - Under "Authorized redirect URIs":
     - Click "ADD URI"
     - Enter exactly: `https://developers.google.com/oauthplayground`
   - Click "CREATE"

4. **Save your credentials**:
   - A popup will show your Client ID and Client Secret
   - **Copy and save these immediately** (you'll need them next):
     - `GMAIL_CLIENT_ID`: (starts with numbers, ends with .apps.googleusercontent.com)
     - `GMAIL_CLIENT_SECRET`: (random string of letters/numbers)

---

## STEP 4: Generate Refresh Token using OAuth Playground

1. **Open OAuth Playground**:
   - Go to: https://developers.google.com/oauthplayground

2. **Configure with your credentials**:
   - Click the **gear/settings icon** (⚙️) in the top right
   - Check ☑️ "Use your own OAuth credentials"
   - Enter your Client ID and Client Secret from Step 3
   - Click "Close"

3. **Select API scopes**:
   - In the left panel, find and expand "Gmail API v1"
   - Check ☑️ `https://www.googleapis.com/auth/gmail.send`
   
   - Also expand "Google Calendar API v3"
   - Check ☑️ `https://www.googleapis.com/auth/calendar`

4. **Authorize APIs**:
   - Click blue "Authorize APIs" button
   - You'll be redirected to Google sign-in
   - **Sign in with roofingreliable.nz@gmail.com**
   - Click "Advanced" if you see a warning about unverified app
   - Click "Go to Reliable Roofing Solutions (unsafe)" 
   - Review permissions and click "Allow"

5. **Get the refresh token**:
   - You'll be redirected back to OAuth Playground
   - Click "Exchange authorization code for tokens"
   - **Copy the refresh token** (long string starting with "1//...")
   - This is your `GMAIL_REFRESH_TOKEN`

---

## STEP 5: Get Google Calendar API Key (Alternative Method)

**Option A: Use OAuth (Recommended)**
- You already have what you need from Step 4 above
- Skip to Step 6

**Option B: Create API Key (Simpler but less secure)**
1. In Google Cloud Console, go to "Credentials"
2. Click "CREATE CREDENTIALS" → "API key"
3. Copy the generated key
4. Click "RESTRICT KEY"
5. Under "API restrictions", select "Restrict key"
6. Choose "Google Calendar API"
7. Click "SAVE"

---

## STEP 6: Set Up Your Environment Variables

You now have all the credentials needed. Here's what you should have:

```
GMAIL_CLIENT_ID=123456789-abc123.apps.googleusercontent.com
GMAIL_CLIENT_SECRET=GOCSPX-abcd1234efgh5678
GMAIL_REFRESH_TOKEN=1//04abcd1234efgh...
GOOGLE_CALENDAR_API_KEY=AIzaSyAbc123... (if using Option B)
COMPANY_EMAIL=roofingreliable.nz@gmail.com
```

---

## STEP 7: Add to Your Project

1. **In your Blink project**:
   - Go to your project settings
   - Add these as environment variables/secrets
   - Never put these directly in your code!

2. **Test the integration**:
   - Your booking system should now be able to:
     - Send emails via Gmail
     - Create calendar events
     - Sync appointments

---

## Common Issues & Solutions

**Issue**: "This app isn't verified"
- **Solution**: Click "Advanced" → "Go to [your app] (unsafe)" during OAuth flow

**Issue**: "redirect_uri_mismatch"  
- **Solution**: Make sure you added exactly `https://developers.google.com/oauthplayground` to authorized redirect URIs

**Issue**: "insufficient_scope"
- **Solution**: Make sure you selected both Gmail and Calendar scopes in OAuth Playground

**Issue**: "invalid_client"
- **Solution**: Double-check your Client ID and Secret are entered correctly in OAuth Playground

---

## Security Notes

- ✅ Keep all credentials secret and secure
- ✅ Only use these credentials on your server/backend
- ✅ Never commit credentials to code repositories
- ✅ Consider rotating credentials periodically
- ✅ Only grant minimum required permissions

---

## What's Next?

After completing these steps, your Reliable Roofing Solutions booking system will be able to:

1. **Send booking confirmations** via Gmail
2. **Create calendar appointments** automatically
3. **Sync with your business email** (roofingreliable.nz@gmail.com)
4. **Send SMS notifications** (when combined with Twilio)

Your booking system will provide a professional, automated experience for your customers! 🎉