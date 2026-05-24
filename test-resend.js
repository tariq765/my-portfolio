const { Resend } = require('resend');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local for the key
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/RESEND_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!apiKey) {
  console.error('API Key not found in .env.local');
  process.exit(1);
}

const resend = new Resend(apiKey);

async function sendTest() {
  console.log('Attempting to send test email to tariqasghar761@gmail.com...');
  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Test <onboarding@resend.dev>',
      to: ['tariqasghar761@gmail.com'],
      subject: 'Test Email from Gemini CLI',
      text: 'Hello Tariq! This is a test email sent from your Portfolio setup to verify everything is working correctly.',
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

sendTest();
