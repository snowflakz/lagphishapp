import React from 'react';

const checklist = [
  "Choose a strong password for your account.",
  "Go to your account security settings and enable 2FA.",
  "Select your preferred 2FA method (app, SMS, hardware token).",
  "Follow the prompts to set up and verify your 2FA method.",
  "Store backup codes in a secure location.",
  "Never share your 2FA codes with anyone."
];

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
];

export default function TwoFactorAuthenticationSetupGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Two-Factor Authentication Setup Guide</h1>
        <img src={images[0]} alt="2FA Setup" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Step-by-step instructions for enabling 2FA on all your work accounts. 2FA adds an extra layer of security to protect patient and organizational data.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for 2FA Setup</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="2FA Device" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You are prompted to enter a 2FA code but have lost your phone. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Use your backup codes to access your account.</li>
              <li>Contact IT for assistance if needed.</li>
              <li>Set up 2FA again on your new device as soon as possible.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 