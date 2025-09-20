import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

serve(async (req) => {
  // Handle CORS for frontend calls
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    const { 
      customerName, 
      customerEmail, 
      customerPhone,
      serviceType, 
      appointmentDate, 
      appointmentTime,
      additionalNotes 
    } = await req.json();

    // Get environment variables
    const GMAIL_CLIENT_ID = Deno.env.get('GMAIL_CLIENT_ID');
    const GMAIL_CLIENT_SECRET = Deno.env.get('GMAIL_CLIENT_SECRET');
    const GMAIL_REFRESH_TOKEN = Deno.env.get('GMAIL_REFRESH_TOKEN');
    const COMPANY_EMAIL = Deno.env.get('COMPANY_EMAIL') || 'roofingreliable.nz@gmail.com';

    if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN) {
      throw new Error('Missing Gmail API credentials');
    }

    // Get Gmail access token using refresh token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: GMAIL_CLIENT_ID,
        client_secret: GMAIL_CLIENT_SECRET,
        refresh_token: GMAIL_REFRESH_TOKEN,
        grant_type: 'refresh_token',
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to refresh Gmail access token');
    }

    const { access_token } = await tokenResponse.json();

    // Create email content
    const emailSubject = `Booking Confirmation - ${serviceType}`;
    const emailBody = `
Dear ${customerName},

Thank you for booking with Reliable Roofing Solutions!

Booking Details:
- Service: ${serviceType}
- Date: ${appointmentDate}
- Time: ${appointmentTime}
- Phone: ${customerPhone}
${additionalNotes ? `- Notes: ${additionalNotes}` : ''}

We will contact you shortly to confirm the appointment and discuss any specific requirements.

Best regards,
Reliable Roofing Solutions Team
Phone: +64 21 248 8722
Email: ${COMPANY_EMAIL}
    `.trim();

    // Create Gmail message
    const message = [
      `To: ${customerEmail}`,
      `Subject: ${emailSubject}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      emailBody
    ].join('\n');

    const encodedMessage = btoa(message).replace(/\+/g, '-').replace(/\//g, '_');

    // Send email via Gmail API
    const emailResponse = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedMessage
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Gmail API error: ${errorText}`);
    }

    // Create Google Calendar event
    const startDateTime = new Date(`${appointmentDate}T${appointmentTime}:00`);
    const endDateTime = new Date(startDateTime.getTime() + (2 * 60 * 60 * 1000)); // 2 hours later

    const calendarEvent = {
      summary: `${serviceType} - ${customerName}`,
      description: `
Customer: ${customerName}
Phone: ${customerPhone}
Email: ${customerEmail}
Service: ${serviceType}
${additionalNotes ? `Notes: ${additionalNotes}` : ''}
      `.trim(),
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'Pacific/Auckland',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'Pacific/Auckland',
      },
      attendees: [
        { email: customerEmail },
        { email: COMPANY_EMAIL }
      ],
    };

    const calendarResponse = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(calendarEvent),
    });

    let calendarEventId = null;
    if (calendarResponse.ok) {
      const calendarResult = await calendarResponse.json();
      calendarEventId = calendarResult.id;
    }

    // Send internal notification email to company
    const internalEmailBody = `
New booking received!

Customer Details:
- Name: ${customerName}
- Email: ${customerEmail}  
- Phone: ${customerPhone}

Service Details:
- Service: ${serviceType}
- Date: ${appointmentDate}
- Time: ${appointmentTime}
${additionalNotes ? `- Notes: ${additionalNotes}` : ''}

Calendar Event: ${calendarEventId ? 'Created successfully' : 'Failed to create'}

Please contact the customer to confirm the appointment.
    `.trim();

    const internalMessage = [
      `To: ${COMPANY_EMAIL}`,
      `Subject: New Booking: ${customerName} - ${serviceType}`,
      'Content-Type: text/plain; charset=utf-8',
      '',
      internalEmailBody
    ].join('\n');

    const encodedInternalMessage = btoa(internalMessage).replace(/\+/g, '-').replace(/\//g, '_');

    await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        raw: encodedInternalMessage
      }),
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email sent and calendar event created successfully',
      calendarEventId 
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Gmail/Calendar integration error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
});