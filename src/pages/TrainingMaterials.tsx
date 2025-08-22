import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const trainingResources = [
  {
    title: "Phishing Awareness Training",
    description: "Learn to identify and avoid phishing attempts through interactive scenarios and real-world examples.",
    type: "Video Course",
    link: "#"
  },
  {
    title: "Password Security Best Practices",
    description: "Master the art of creating strong passwords and using password managers effectively.",
    type: "Interactive Guide",
    link: "#"
  },
  {
    title: "Safe Browsing Techniques",
    description: "Understand how to navigate the internet safely and recognize malicious websites.",
    type: "Webinar",
    link: "#"
  },
  {
    title: "Social Engineering Defense",
    description: "Protect yourself against manipulation tactics used by cybercriminals.",
    type: "Quiz",
    link: "#"
  },
  {
    title: "Email Security Fundamentals",
    description: "Comprehensive training on securing your email communications and attachments.",
    type: "Course",
    link: "#"
  },
  {
    title: "Data Protection Protocols",
    description: "Learn proper handling of sensitive patient and organizational data.",
    type: "Certification",
    link: "#"
  },
  {
    title: "Mobile Device Security",
    description: "Secure your mobile devices and protect healthcare data on-the-go.",
    type: "Tutorial",
    link: "#"
  },
  {
    title: "Incident Reporting Procedures",
    description: "Step-by-step guide on how to report security incidents effectively.",
    type: "Guide",
    link: "#"
  }
];

export default function TrainingMaterials() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Training Materials</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Comprehensive cybersecurity training resources designed specifically for healthcare professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-teal-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-teal-600" />
                  <span className="text-sm font-medium text-teal-600 bg-teal-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Link
                  to={
                    resource.title === 'Phishing Awareness Training' ? '/courses/phishing-awareness' :
                    resource.title === 'Password Security Best Practices' ? '/courses/password-security' :
                    resource.title === 'Safe Browsing Techniques' ? '/courses/safe-browsing' :
                    resource.title === 'Social Engineering Defense' ? '/courses/social-engineering' :
                    resource.title === 'Email Security Fundamentals' ? '/courses/email-security' :
                    resource.title === 'Data Protection Protocols' ? '/courses/data-protection' :
                    resource.title === 'Mobile Device Security' ? '/courses/mobile-device-security' :
                    resource.title === 'Incident Reporting Procedures' ? '/courses/incident-reporting' :
                    '#'
                  }
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Access Resource
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 