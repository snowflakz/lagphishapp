import React from 'react';

const checklist = [
  "Only access patient data when necessary for your role.",
  "Never share sensitive information in public or unsecured channels.",
  "Store physical records in locked cabinets and digital records in secure systems.",
  "Always log out of systems when not in use.",
  "Use strong, unique passwords and never share them.",
  "Report any suspected data breach to IT immediately."
];

const images = [
  'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
];

export default function DataProtectionProtocols() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Data Protection Protocols</h1>
        <img src={images[0]} alt="Data Protection" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Learn proper handling of sensitive patient and organizational data. Protecting data is everyone's responsibility in healthcare.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Data Protection</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Secure Data" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-green-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You find a printed patient record left in a public area. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Secure the record immediately.</li>
              <li>Report the incident to your supervisor or IT.</li>
              <li>Remind colleagues about the importance of data protection.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 