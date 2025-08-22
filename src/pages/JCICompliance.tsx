import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const jciResources = [
  {
    title: "Over View of Iwosan 5th JCI Accredition",
    description: "Discover the significance of Iwosan Lagoon Hospitals' achievement in earning its 5th Joint Commission International (JCI) Accreditation. This overview highlights the rigorous standards met, the commitment to world-class patient safety and quality care, and what this milestone means for our staff, patients, and the future of healthcare excellence at Iwosan Lagoon.",
    type: "Guide",
    link: "https://cutt.ly/Iwosan-Lagoon-5th-JCI-overview"
  },
  {
    title: "Learn more about JCI HCT and MOI update",
    description: "Explore the latest updates on Health Care Technology (HCT) and Management of Information (MOI) standards under JCI. This resource provides insights into new requirements, best practices, and how these updates enhance patient safety, technology management, and compliance for healthcare organizations.",
    type: "Checklist",
    link: "https://cutt.ly/Hospitals-HTC-and-MOI"
  },
  {
    title: "Overview of Nigeria Data Protection Act 2023",
    description: "Gain essential insights into the Nigeria Data Protection Act 2023. This resource provides a comprehensive overview of the key provisions, compliance obligations, and the impact of the Act on healthcare organizations. Understand how the new regulations safeguard patient data and what steps your institution must take to remain compliant.",
    type: "Training",
    link: "https://cutt.ly/9rTmV3iE"
  },
  {
    title: "Incident Reporting and Agile Response in IWLH",
    description: "Learn how Iwosan Lagoon Hospitals (IWLH) approaches incident reporting and agile response. This resource outlines the streamlined processes, rapid communication protocols, and best practices that empower staff to respond quickly and effectively to security incidents, ensuring patient safety and organizational resilience.",
    type: "Plan",
    link: "https://cutt.ly/9rTmpQGu"
  }
];

export default function JCICompliance() {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">JCI Compliance</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Joint Commission International cybersecurity standards and compliance resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jciResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-teal-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Award className="h-8 w-8 text-teal-600" />
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Access Resource
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 