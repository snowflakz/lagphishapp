import React from 'react';

const checklist = [
  "Use a strong passcode or biometric lock on your device.",
  "Enable device encryption and remote wipe features.",
  "Never leave your device unattended in public areas.",
  "Install updates and security patches promptly.",
  "Only use secure, hospital-approved apps for patient data.",
  "Report lost or stolen devices to IT immediately."
];

const images = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
];

export default function MobileDeviceSecurity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Mobile Device Security</h1>
        <img src={images[0]} alt="Mobile Device Security" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Secure your mobile devices and protect healthcare data on-the-go. Mobile devices are convenient but require strong security practices to keep patient and organizational data safe.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Mobile Device Security</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="Secure Mobile" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You receive a text message with a link to a new hospital app. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Verify the app with IT before installing.</li>
              <li>Never install apps from unknown sources.</li>
              <li>Report suspicious messages to IT.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 