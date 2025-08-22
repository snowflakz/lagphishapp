import React from 'react';

const checklist = [
  "Always verify the sender's email address before responding.",
  "Be cautious with links and attachments—hover to preview links before clicking.",
  "Never share sensitive information via email unless encrypted.",
  "Report suspicious emails to IT immediately.",
  "Use strong, unique passwords for your email accounts.",
  "Enable two-factor authentication (2FA) for email accounts."
];

const images = [
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
];

export default function EmailSecurityFundamentals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Email Security Fundamentals</h1>
        <img src={images[0]} alt="Email Security" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Learn how to secure your email communications, recognize suspicious links and attachments, and protect sensitive healthcare information.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Email Security</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Secure Email" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You receive an email with an attachment labeled "Urgent Patient Report" from an unknown sender. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Do not open the attachment.</li>
              <li>Verify the sender's identity through another channel.</li>
              <li>Report the email to IT.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 