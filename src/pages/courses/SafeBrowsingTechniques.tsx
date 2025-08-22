import React from 'react';

const checklist = [
  'Check for HTTPS and a valid certificate before entering sensitive information.',
  'Be wary of pop-ups and unexpected downloads.',
  'Never click suspicious links in emails or messages.',
  'Keep your browser and plugins up to date.',
  'Report suspicious websites to IT immediately.',
  'Be cautious of urgent requests or offers that seem too good to be true.'
];

const images = [
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80'
];

export default function SafeBrowsingTechniques() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Safe Browsing Techniques</h1>
        <img src={images[0]} alt="Safe Browsing" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Healthcare professionals are prime targets for cyber threats. Learn how to navigate the internet safely and recognize malicious websites, ransomware, phishing, BEC, and social engineering attacks.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Safe Browsing</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Cybersecurity" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-purple-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You receive an email with a link to a website that looks like your hospital's login page, but the URL is slightly misspelled. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Do not enter your credentials.</li>
              <li>Check the URL carefully for typos or extra characters.</li>
              <li>Report the suspicious site to IT.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 