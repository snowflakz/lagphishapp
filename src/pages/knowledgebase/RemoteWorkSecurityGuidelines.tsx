import React from 'react';

const checklist = [
  "Use a secure, password-protected Wi-Fi network.",
  "Keep work devices and software updated.",
  "Do not share work devices with family or friends.",
  "Use VPN and encryption for remote access.",
  "Report lost or stolen devices to IT immediately.",
  "Be vigilant for phishing and social engineering attacks."
];

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80'
];

export default function RemoteWorkSecurityGuidelines() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Remote Work Security Guidelines</h1>
        <img src={images[0]} alt="Remote Work Security" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Essential security measures for healthcare workers working from home. Protect patient data and organizational information even outside the hospital.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Remote Work Security</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Work from Home" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You need to join a video call with patient data on your screen. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Ensure your screen is not visible to others in your home.</li>
              <li>Use headphones for privacy.</li>
              <li>Lock your device when not in use.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 