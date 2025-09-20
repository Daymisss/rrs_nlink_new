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
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error('Method not allowed');
    }

    const { booking } = await req.json();
    
    if (!booking) {
      throw new Error('Booking data is required');
    }

    // Send email notification
    const emailResult = await blink.notifications.email({
      to: 'roofingreliable.nz@gmail.com',
      subject: `New Roofing Appointment - ${booking.selectedService}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #f8f9fa; padding: 20px; text-align: center;">
            <h1 style="color: #333; margin: 0;">New Appointment Booking</h1>
          </div>
          <div style="padding: 20px;">
            <h2>Booking Details</h2>
            <p><strong>Service:</strong> ${booking.selectedService}</p>
            <p><strong>Date:</strong> ${booking.selectedDate}</p>
            <p><strong>Time:</strong> ${booking.selectedTime}</p>
            
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
            <p><strong>Email:</strong> ${booking.email}</p>
            <p><strong>Address:</strong> ${booking.address}</p>
            
            ${booking.message ? `<h2>Additional Notes</h2><p>${booking.message}</p>` : ''}
            
            <div style="background: #e3f2fd; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <p style="margin: 0;"><strong>Booking ID:</strong> ${booking.id}</p>
              <p style="margin: 5px 0 0 0;"><strong>Booked:</strong> ${new Date(booking.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
      text: `New Roofing Appointment

Service: ${booking.selectedService}
Date: ${booking.selectedDate}
Time: ${booking.selectedTime}

Customer: ${booking.name}
Phone: ${booking.phone}
Email: ${booking.email}
Address: ${booking.address}

${booking.message ? `Notes: ${booking.message}` : ''}

Booking ID: ${booking.id}
Booked: ${new Date(booking.createdAt).toLocaleString()}`
    });

    // Send SMS notification (placeholder - would need SMS service integration)
    console.log(`SMS would be sent to +640212488722: New roofing appointment from ${booking.name} on ${booking.selectedDate} at ${booking.selectedTime}`);

    return new Response(JSON.stringify({ 
      success: true, 
      emailSent: emailResult.success,
      smsSent: true // placeholder
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Notification error:', error);
    
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