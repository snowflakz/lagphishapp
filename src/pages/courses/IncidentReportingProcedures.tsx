import React from 'react';

const steps = [
  "Recognize and document the incident (what, when, where, who).",
  "Immediately report the incident to your IT or security team.",
  "Do not attempt to investigate or fix the issue yourself.",
  "Preserve all evidence (emails, screenshots, devices).",
  "Follow up with IT for next steps and updates.",
  "Participate in any post-incident review or training."
];

const images = [
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
];

export default function IncidentReportingProcedures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-red-700 mb-4">Incident Reporting Procedures</h1>
        <img src={images[0]} alt="Incident Reporting" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Step-by-step guide on how to report security incidents effectively. Quick and accurate reporting helps protect patients and the organization.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Steps for Reporting an Incident</h2>
          <ol className="list-decimal pl-6 text-gray-700 mb-4">
            {steps.map((step, idx) => <li key={idx}>{step}</li>)}
          </ol>
        </div>
        <img src={images[1]} alt="Security Team" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You receive a suspicious email asking for login credentials. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Do not respond or click any links.</li>
              <li>Report the email to IT immediately.</li>
              <li>Preserve the email for investigation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 