import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "npm:@blinkdotnew/sdk";

const blink = createClient({
  projectId: 'reliable-roofing-solutions-website-zqr94aeq'
});

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { appointmentData } = await req.json();
    
    const {
      customerName,
      customerEmail,
      customerPhone,
      serviceType,
      appointmentDate,
      appointmentTime
    } = appointmentData;

    // Create calendar event data
    const startDateTime = new Date(`${appointmentDate}T${appointmentTime.replace(/[AP]M/, '').trim()}:00`);
    const endDateTime = new Date(startDateTime.getTime() + (2 * 60 * 60 * 1000)); // 2 hours later
    
    // Send email with calendar invite
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #f8f9fa; padding: 20px; text-align: center;">
          <h1 style="color: #333; margin: 0;">Reliable Roofing Solutions</h1>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #333;">Appointment Confirmation</h2>
          <p>Dear ${customerName},</p>
          <p>Thank you for booking with Reliable Roofing Solutions. Your appointment has been confirmed:</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #666;">Appointment Details</h3>
            <p><strong>Service:</strong> ${serviceType}</p>
            <p><strong>Date:</strong> ${appointmentDate}</p>
            <p><strong>Time:</strong> ${appointmentTime}</p>
            <p><strong>Duration:</strong> Approximately 2 hours</p>
          </div>
          
          <h3>What to expect:</h3>
          <ul>
            <li>Our expert team will arrive on time for your free consultation</li>
            <li>We'll conduct a thorough assessment of your roofing needs</li>
            <li>You'll receive a detailed quote within 24 hours</li>
            <li>All materials and labor are covered by our comprehensive warranty</li>
          </ul>
          
          <h3>Contact Information:</h3>
          <p><strong>Address:</strong> Unit 1, 15 Ludlow Terrace, Totara Vale, Auckland, 0627</p>
          <p><strong>Phone:</strong> +64 (0)21 248 8722</p>
          <p><strong>Email:</strong> roofingreliable.nz@gmail.com</p>
          
          <p>If you need to reschedule or have any questions, please call us at +64 (0)21 248 8722.</p>
          
          <p style="margin-top: 30px;">Best regards,<br>
          <strong>Reliable Roofing Solutions Team</strong></p>
        </div>
        <div style="background: #f8f9fa; padding: 15px; text-align: center; color: #666; font-size: 12px;">
          <p>&copy; 2024 Reliable Roofing Solutions. All rights reserved.</p>
        </div>
      </div>
    `;

    // Send confirmation email
    const emailResult = await blink.notifications.email({
      to: customerEmail,
      from: 'roofingreliable.nz@gmail.com',
      subject: `Roofing Appointment Confirmed - ${appointmentDate} at ${appointmentTime}`,
      html: emailHtml,
      text: `Dear ${customerName}, your roofing appointment for ${serviceType} is confirmed on ${appointmentDate} at ${appointmentTime}. Contact us at +64 (0)21 248 8722 if you have questions.`
    });

    // Send SMS notification using Twilio
    const twilioAccountSid = Deno.env.get('TWILIO_ACCOUNT_SID');
    const twilioAuthToken = Deno.env.get('TWILIO_AUTH_TOKEN');
    const twilioPhoneNumber = Deno.env.get('TWILIO_PHONE_NUMBER');

    let smsResult = null;
    if (twilioAccountSid && twilioAuthToken && twilioPhoneNumber) {
      const smsMessage = `Hi ${customerName}! Your Reliable Roofing appointment is confirmed for ${appointmentDate} at ${appointmentTime}. Service: ${serviceType}. We'll call 24hrs before. Questions? Call +64 (0)21 248 8722`;
      
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`;
      const twilioAuth = btoa(`${twilioAccountSid}:${twilioAuthToken}`);
      
      const smsResponse = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${twilioAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: twilioPhoneNumber,
          To: customerPhone,
          Body: smsMessage
        })
      });
      
      if (smsResponse.ok) {
        smsResult = await smsResponse.json();
      }
    }

    return new Response(JSON.stringify({
      success: true,
      email: emailResult,
      sms: smsResult,
      calendarData: {
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        summary: `${serviceType} - Reliable Roofing Solutions`,
        description: `Roofing consultation for ${serviceType} with ${customerName}`,
        location: "Unit 1, 15 Ludlow Terrace, Totara Vale, Auckland, 0627"
      }
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Error processing booking:', error);
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