import React from 'react';

const checklist = [
  "Back up important data regularly and securely.",
  "Do not open suspicious email attachments or links.",
  "Keep all software and systems updated.",
  "Use strong, unique passwords and enable 2FA.",
  "Train staff to recognize phishing attempts.",
  "Report suspicious activity to IT immediately."
];

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
];

export default function RansomwarePreventionChecklist() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">Ransomware Prevention Checklist</h1>
        <img src={images[0]} alt="Ransomware Prevention" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Essential steps to prevent ransomware attacks in healthcare environments. Ransomware can lock you out of critical systems and compromise patient care.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Ransomware Prevention</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Backup" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> Your computer displays a message demanding payment to unlock files. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Do not pay the ransom.</li>
              <li>Disconnect the device from the network.</li>
              <li>Report the incident to IT immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 