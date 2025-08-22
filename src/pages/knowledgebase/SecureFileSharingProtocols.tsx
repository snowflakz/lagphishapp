import React from 'react';

const checklist = [
  "Use secure, encrypted file sharing platforms approved by your organization.",
  "Never share files containing patient data over public email or cloud services.",
  "Verify the recipient's identity before sharing sensitive files.",
  "Set file permissions to limit access to only those who need it.",
  "Delete shared files from the platform when no longer needed.",
  "Report any accidental sharing or data leaks to IT immediately."
];

const images = [
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80'
];

export default function SecureFileSharingProtocols() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Secure File Sharing Protocols</h1>
        <img src={images[0]} alt="Secure File Sharing" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Best practices for sharing sensitive files while maintaining HIPAA compliance. Protect patient data and organizational information.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Checklist for Secure File Sharing</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {checklist.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
        <img src={images[1]} alt="File Sharing" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Scenario</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-2">
            <strong>Scenario:</strong> You need to send a patient report to a specialist at another hospital. What should you do?
            <ul className="list-disc pl-6 mt-2">
              <li>Use the hospital's secure file sharing platform.</li>
              <li>Verify the recipient's identity and permissions.</li>
              <li>Never use personal email or unapproved apps.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 