export const bookingInvoice = ({ 
  bookingId, 
  serviceName, 
  duration, 
  location, 
  totalCost,
  userName,
  bookingDate,
  status 
}) => {
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-BD', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
      
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        
        <!-- Header with Logo -->
        <div style="background: linear-gradient(135deg, #3b4b21 0%, #9CAF88 100%); padding: 30px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 32px; font-weight: bold;">CareNest</h1>
          <p style="color: #FADADD; margin: 5px 0 0; font-size: 16px;">Compassionate Care, Exceptional Results</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px 25px;">
          
          <!-- Greeting -->
          <h2 style="color: #2C3E50; margin-top: 0;">🧾 Booking Confirmation</h2>
          <p style="color: #4a5568; font-size: 16px; line-height: 1.5;">
            Dear <strong style="color: #3b4b21;">${userName}</strong>,
          </p>
          <p style="color: #4a5568; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
            Thank you for choosing CareNest! Your care service booking has been confirmed. Below are the details:
          </p>

          <!-- Booking Info Card -->
          <div style="background-color: #F8FAF4; border-radius: 12px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #9CAF88;">
            
            <div style="margin-bottom: 15px;">
              <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Booking ID</p>
              <p style="color: #2C3E50; font-size: 16px; font-weight: bold; margin: 0;">${bookingId}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Service</p>
              <p style="color: #2C3E50; font-size: 18px; font-weight: bold; margin: 0;">${serviceName}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
              <div>
                <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Duration</p>
                <p style="color: #2C3E50; font-size: 16px; font-weight: 600; margin: 0;">${duration.value} ${duration.unit}</p>
              </div>
              <div>
                <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Status</p>
                <p style="color: #3b4b21; font-size: 16px; font-weight: 600; margin: 0; text-transform: capitalize;">${status}</p>
              </div>
            </div>

            <div style="margin-bottom: 15px;">
              <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Location</p>
              <p style="color: #2C3E50; font-size: 16px; margin: 0;">
                ${location.city}, ${location.district}<br>
                <span style="color: #718096; font-size: 14px;">${location.address}</span>
              </p>
            </div>

            <div>
              <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Booking Date</p>
              <p style="color: #2C3E50; font-size: 16px; margin: 0;">${formatDate(bookingDate)}</p>
            </div>
          </div>

          <!-- Price Summary -->
          <div style="background: linear-gradient(135deg, #9CAF88 0%, #B8C9A8 100%); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <p style="color: #2C3E50; font-size: 18px; font-weight: bold; margin: 0;">Total Amount</p>
              <p style="color: #3b4b21; font-size: 32px; font-weight: bold; margin: 0;">৳${totalCost.toLocaleString()}</p>
            </div>
          </div>

          <!-- Next Steps -->
          <div style="background-color: #fff3cd; border-radius: 8px; padding: 15px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
            <h3 style="color: #856404; margin: 0 0 10px; font-size: 16px;">📌 What's Next?</h3>
            <ul style="color: #856404; margin: 0; padding-left: 20px; font-size: 14px;">
              <li style="margin-bottom: 5px;">Your caregiver will be assigned within 24 hours</li>
              <li style="margin-bottom: 5px;">You'll receive a confirmation call from our team</li>
              <li style="margin-bottom: 5px;">Track your booking status in "My Bookings" page</li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div style="text-align: center; margin-bottom: 20px;">
            <p style="color: #718096; font-size: 14px; margin: 0 0 5px;">Need help?</p>
            <p style="color: #2C3E50; font-size: 16px; margin: 0;">
              📞 <a href="tel:+8801712345678" style="color: #3b4b21; text-decoration: none;">+880 1712-345678</a><br>
              ✉️ <a href="mailto:support@carenest.com" style="color: #3b4b21; text-decoration: none;">support@carenest.com</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
            <p style="color: #a0aec0; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} CareNest. All rights reserved.<br>
              Making caregiving easy, secure, and accessible for everyone.
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};