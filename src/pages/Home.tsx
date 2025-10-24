import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Database, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  '/background.png',
  '/contact.png',
  '/Frequently Asked Questions.jpg',
  '/Training Materials.jpg',
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div> {/* Dark overlay */}
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 container mx-auto px-4 py-16 text-white text-center flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeInDown text-center">
            Seamless Cybersecurity for IWLH, from Phish to Fortification:
            <br />
            Cyber Safety is Patient Safety
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto animate-fadeInUp delay-1s text-center">
            Unify your knowledgebase, training, and learning management system in one place. Your essential tool for daily operations and professional growth.
          </p>
        </div>

        {/* Feature Cards Section (positioned over the background image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-0">
          <div 
            className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-teal-50"
            onClick={() => navigate('/knowledgebase')}
          >
            <Database className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledgebase</h3>
            <p className="text-gray-700 text-center">Access a vast repository of cybersecurity articles, guides, and best practices.</p>
          </div>
          <div 
            className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-teal-50"
            onClick={() => navigate('/training')}
          >
            <BookOpen className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Training & Courses</h3>
            <p className="text-gray-700 text-center">Engage in interactive training modules to enhance your security awareness.</p>
          </div>
          <div 
            className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex flex-col items-center cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-teal-50"
            onClick={() => navigate('/jci')}
          >
            <Award className="h-12 w-12 text-teal-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">JCI Compliance</h3>
            <p className="text-gray-700 text-center">Stay compliant with Joint Commission International cybersecurity requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
