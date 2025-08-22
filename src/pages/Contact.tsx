import React from 'react';
import { Mail, Phone, AlertTriangle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Contact IT Security</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Need help or have questions about cybersecurity? Our IT Security Team is here to assist you.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">For non-urgent security questions and training support</p>
              <a 
                href="mailto:ithelpdesk@lagoonhospitals.com"
                className="text-teal-600 hover:text-teal-800 font-medium text-lg"
              >
                ithelpdesk@lagoonhospitals.com
              </a>
            </div>
            <div className="text-center">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Hotline</h3>
              <p className="text-gray-600 mb-4">For immediate security incidents and urgent issues</p>
              <a 
                href="tel:+15551234567"
                className="text-red-600 hover:text-red-800 font-medium text-lg"
              >
                extensions: 6300, 4300, 4101, 7300
              </a>
            </div>
          </div>
          <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-yellow-800 mb-2">Security Incident Reporting</h4>
                <p className="text-yellow-700 mb-4">
                  If you suspect a security breach, have clicked on a suspicious link, or downloaded suspicious content, 
                  <strong> contact us immediately</strong>. Time is critical in preventing potential damage to our systems and patient data.
                </p>
                <button 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200"
                  onClick={() => window.location.href = 'mailto:ithelpdesk@lagoonhospitals.com?subject=Security%20Incident%20Reporting%20:%20WEB'}
                >
                  Report Incident Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 