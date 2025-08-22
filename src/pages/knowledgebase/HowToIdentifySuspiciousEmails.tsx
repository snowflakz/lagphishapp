import React from 'react';

const checklist = [
  "Check the sender's email address for typos or unusual domains.",
  "Look for urgent or threatening language.",
  "Be wary of unexpected attachments or links.",
  "Check for spelling and grammar mistakes.",
  "Hover over links to preview the actual URL.",
  "Verify requests for sensitive information through another channel."
];

const images = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80'
];

export default function HowToIdentifySuspiciousEmails() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">How to Identify Suspicious Emails</h1>
        <img src={images[0]} alt="Suspicious Email" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Learn to spot red flags in emails and protect yourself and your patients from phishing and other email-based attacks.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Identifying Suspicious Emails</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Email Security" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You receive an email from "admin@hospita1.com" (note the number 1 instead of "l") asking you to update your password. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Do not click any links or provide information.</li>
              <li>Verify the request with IT through another channel.</li>
              <li>Report the email as suspicious.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 