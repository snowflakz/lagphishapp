import React from 'react';
import { Database, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const knowledgebaseResources = [
  {
    title: "How to Identify Suspicious Emails",
    description: "Comprehensive guide covering red flags and verification techniques for email security.",
    type: "Article",
    link: "#"
  },
  {
    title: "Malware Protection Strategies",
    description: "Understanding different types of malware and how to protect your systems effectively.",
    type: "Guide",
    link: "#"
  },
  {
    title: "Ransomware Prevention Checklist",
    description: "Essential steps to prevent ransomware attacks in healthcare environments.",
    type: "Checklist",
    link: "#"
  },
  {
    title: "Secure File Sharing Protocols",
    description: "Best practices for sharing sensitive files while maintaining HIPAA compliance.",
    type: "Infographic",
    link: "#"
  },
  {
    title: "Two-Factor Authentication Setup Guide",
    description: "Step-by-step instructions for enabling 2FA on all your work accounts.",
    type: "Tutorial",
    link: "#"
  },
  {
    title: "Remote Work Security Guidelines",
    description: "Essential security measures for healthcare workers working from home.",
    type: "Document",
    link: "#"
  },
  {
    title: "Incident Response Procedures",
    description: "What to do when you suspect a security breach or compromise.",
    type: "Flowchart",
    link: "#"
  },
  {
    title: "JCI Cybersecurity Requirements",
    description: "Understanding cybersecurity obligations under JCI regulations.",
    type: "Compliance Guide",
    link: "#"
  }
];

export default function Knowledgebase() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Knowledgebase</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Essential cybersecurity resources, guides, and documentation for healthcare professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgebaseResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-teal-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Database className="h-8 w-8 text-teal-600" />
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  to={
                    resource.title === 'How to Identify Suspicious Emails' ? '/knowledgebase/how-to-identify-suspicious-emails' :
                    resource.title === 'Malware Protection Strategies' ? '/knowledgebase/malware-protection-strategies' :
                    resource.title === 'Ransomware Prevention Checklist' ? '/knowledgebase/ransomware-prevention-checklist' :
                    resource.title === 'Secure File Sharing Protocols' ? '/knowledgebase/secure-file-sharing-protocols' :
                    resource.title === 'Two-Factor Authentication Setup Guide' ? '/knowledgebase/two-factor-authentication-setup-guide' :
                    resource.title === 'Remote Work Security Guidelines' ? '/knowledgebase/remote-work-security-guidelines' :
                    resource.title === 'Incident Response Procedures' ? '/knowledgebase/incident-response-procedures' :
                    resource.title === 'HIPAA Cybersecurity Requirements' || resource.title === 'JCI Cybersecurity Requirements' ? '/knowledgebase/jci-cybersecurity-requirements' :
                    '#'
                  }
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  View Resource
                  <Download className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 