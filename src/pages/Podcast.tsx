import React from 'react';
import { Radio, Play } from 'lucide-react';

const podcastEpisodes = [
  {
    title: "Understanding Phishing Threats in Healthcare",
    description: "Deep dive into how phishing attacks target healthcare organizations and what you can do to protect yourself.",
    duration: "25 min",
    link: "#"
  },
  {
    title: "Protecting Patient Data: A Security Perspective",
    description: "Expert discussion on safeguarding sensitive patient information from cyber threats.",
    duration: "32 min",
    link: "#"
  },
  {
    title: "Social Engineering Attacks: Real Stories",
    description: "Healthcare professionals share their experiences with social engineering attempts.",
    duration: "28 min",
    link: "#"
  },
  {
    title: "Password Management for Healthcare Workers",
    description: "Practical tips for managing multiple secure passwords in a healthcare environment.",
    duration: "22 min",
    link: "#"
  },
  {
    title: "Ransomware in Healthcare: Prevention and Response",
    description: "How ransomware attacks target hospitals and strategies for prevention and recovery.",
    duration: "35 min",
    link: "#"
  },
  {
    title: "Safe Remote Work in Healthcare",
    description: "Security best practices for healthcare professionals working remotely.",
    duration: "30 min",
    link: "#"
  },
  {
    title: "Email Security Basics for Medical Staff",
    description: "Essential email security practices every healthcare worker should know.",
    duration: "26 min",
    link: "#"
  },
  {
    title: "Incident Response: What Every Employee Should Know",
    description: "Your role in the incident response process when security events occur.",
    duration: "24 min",
    link: "#"
  }
];

export default function Podcast() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Security Awareness Podcast</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Listen to expert insights and real-world stories about cybersecurity in healthcare
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcastEpisodes.map((episode, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-teal-300 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Radio className="h-8 w-8 text-teal-600" />
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {episode.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{episode.title}</h3>
                <p className="text-gray-600 mb-4">{episode.description}</p>
                <a
                  href={episode.link}
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200"
                >
                  Listen Now
                  <Play className="h-4 w-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 