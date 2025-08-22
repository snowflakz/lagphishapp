import React from 'react';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white rounded-xl shadow-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">Thank You for Registering!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Your spot is confirmed, and we can't wait to share valuable insights with you.
        </p>
        <p className="text-base text-gray-600 mb-6">
          You'll receive an email shortly with all the essential details regarding the training schedule, access instructions, and anything else you need to know.
        </p>
        <p className="text-base text-gray-600">
          In the meantime, feel free to explore and learn more ways to protect yourself and IWLH.
        </p>
      </div>
    </div>
  );
} 