import React from 'react';
import { AlertTriangle } from 'lucide-react';

function Hub() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.png)'
        }}
      >
        <div className="absolute inset-0 bg-slate-800 bg-opacity-75"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-red-600 text-white px-6 py-4 rounded-lg mb-8 shadow-2xl">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Oops! You Just Compromised Your Device And Our Entire Network!
          </h1>
          <p className="text-xl sm:text-2xl mb-6">
            This was an approved phishing simulation run as part of a security awareness training exercise, if it were real, your device and our entire network could be at risk.
          </p>
        </div>
        <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Don't Worry - We're Here to Help
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Kindly enroll for our training to strengthen your understanding of cyber threats, effective defense tactics, and cybersecurity hygiene to protecting yourself and our network from furture phishing attempt. Feel free to explore this Training Portal or chat with our bot for more insights into NDPA, JCI, Cybersecurity, Data Privacy and Confidentiality.
          </p>
          <button
            onClick={() => window.open('https://forms.office.com/r/wNF8ANs1xu', '_blank', 'noopener,noreferrer')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Register
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hub;
