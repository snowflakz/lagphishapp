import React from 'react';

const checklist = [
  "Ensure all staff are trained on JCI cybersecurity standards.",
  "Implement strong access controls and authentication.",
  "Regularly update and patch all systems.",
  "Encrypt sensitive patient and organizational data.",
  "Conduct regular security audits and risk assessments.",
  "Report and document all security incidents promptly."
];

const images = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
];

export default function JCICybersecurityRequirements() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">JCI Cybersecurity Requirements</h1>
        <img src={images[0]} alt="JCI Cybersecurity" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Understanding cybersecurity obligations under JCI regulations is essential for protecting patient data and maintaining accreditation.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for JCI Cybersecurity Compliance</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="JCI Compliance" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> During a JCI audit, you are asked to demonstrate how your department protects patient data. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Show your department's security protocols and training records.</li>
              <li>Explain how you report and respond to incidents.</li>
              <li>Demonstrate use of encryption and access controls.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 