import React, { useState } from 'react';
import { 
  Shield, 
  Home as HomeIcon, // Alias Home icon from lucide-react
  BookOpen, 
  HelpCircle, 
  Database, 
  Radio, 
  Award, 
  Phone,
  Menu,
  X,
  AlertTriangle,
  Play,
  Download,
  ExternalLink,
  Mail,
  ChevronDown,
  ChevronUp,
  LayoutGrid, // New import for Hub icon
  GraduationCap // New import for LMS icon
} from 'lucide-react';
import { Routes, Route, Link } from 'react-router-dom';
import TrainingMaterials from './pages/TrainingMaterials';
import FAQ from './pages/FAQ';
import Knowledgebase from './pages/Knowledgebase';
import JCICompliance from './pages/JCICompliance';
import Podcast from './pages/Podcast';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import ThankYou from './pages/ThankYou';
import PhishingAwarenessTraining from './pages/courses/PhishingAwarenessTraining';
import PasswordSecurityBestPractices from './pages/courses/PasswordSecurityBestPractices';
import SafeBrowsingTechniques from './pages/courses/SafeBrowsingTechniques';
import SocialEngineeringDefense from './pages/courses/SocialEngineeringDefense';
import EmailSecurityFundamentals from './pages/courses/EmailSecurityFundamentals';
import DataProtectionProtocols from './pages/courses/DataProtectionProtocols';
import MobileDeviceSecurity from './pages/courses/MobileDeviceSecurity';
import IncidentReportingProcedures from './pages/courses/IncidentReportingProcedures';
import HowToIdentifySuspiciousEmails from './pages/knowledgebase/HowToIdentifySuspiciousEmails';
import MalwareProtectionStrategies from './pages/knowledgebase/MalwareProtectionStrategies';
import RansomwarePreventionChecklist from './pages/knowledgebase/RansomwarePreventionChecklist';
import SecureFileSharingProtocols from './pages/knowledgebase/SecureFileSharingProtocols';
import TwoFactorAuthenticationSetupGuide from './pages/knowledgebase/TwoFactorAuthenticationSetupGuide';
import RemoteWorkSecurityGuidelines from './pages/knowledgebase/RemoteWorkSecurityGuidelines';
import IncidentResponseProceduresKB from './pages/knowledgebase/IncidentResponseProcedures';
import JCICybersecurityRequirements from './pages/knowledgebase/JCICybersecurityRequirements';
import Home from './pages/Home'; // New import for the new Home component
import Hub from './pages/Hub'; // Import for the renamed Index component (now Hub)
import Resources from './pages/Resources'; // New import for the Resources component

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const navigation = [
    { name: 'Home', to: '/', icon: HomeIcon }, // Use aliased HomeIcon
    { name: 'Hub', to: '/hub', icon: LayoutGrid }, // Renamed from Index to Hub, using aliased HomeIcon
    { name: 'LMS', to: 'https://alison.com/lms/login', icon: GraduationCap, external: true }, // Added LMS to navigation
    { name: 'Resources', to: '/resources', icon: BookOpen }, // Added Resources to navigation
    { name: 'FAQ', to: '/faq', icon: HelpCircle },
    { name: 'Knowledgebase', to: '/knowledgebase', icon: Database },
    { name: 'Podcast', to: '/podcast', icon: Radio },
    { name: 'Contact', to: '/contact', icon: Phone },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

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

  const faqItems = [
    {
      question: "What is phishing and why is it dangerous?",
      answer: "Phishing is a cyber attack where criminals impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. In healthcare, this can lead to patient data breaches and compromise critical systems."
    },
    {
      question: "Why did I fail the phishing simulation?",
      answer: "The simulation revealed that you clicked on a suspicious link or provided sensitive information to what appeared to be a legitimate source. This training will help you recognize such threats in the future."
    },
    {
      question: "How can I improve my cybersecurity awareness?",
      answer: "Complete the training modules provided, stay updated with the latest threats, always verify suspicious emails before clicking links, and report any suspicious activity to the IT Security Team immediately."
    },
    {
      question: "What are the most common signs of phishing emails?",
      answer: "Look for urgent language, spelling errors, suspicious sender addresses, unexpected attachments, requests for personal information, and links that don't match the supposed sender's domain."
    },
    {
      question: "Is my device actually compromised?",
      answer: "The simulation was a test - your device is not compromised. However, if this had been a real phishing attack, your device and our network could have been at risk. That's why this training is essential."
    },
    {
      question: "How often will these simulations be conducted?",
      answer: "Phishing simulations are conducted quarterly to ensure all staff maintain high awareness levels. Regular testing helps identify areas where additional training may be needed."
    },
    {
      question: "What is two-factor authentication and why should I use it?",
      answer: "Two-factor authentication (2FA) adds an extra layer of security by requiring a second form of verification beyond your password. This significantly reduces the risk of unauthorized access even if your password is compromised."
    },
    {
      question: "How do I report a suspicious email or security incident?",
      answer: "Forward suspicious emails to ithelpdesk@lagoonhospitals.com or call extensions: 6300, 4300, 4101, 7300 immediately. Do not click any links or download attachments. Time is critical in preventing potential security breaches."
    }
  ];

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

  const jciResources = [
    {
      title: "JCI Information Management Standards",
      description: "Comprehensive overview of JCI standards related to information management and cybersecurity requirements.",
      type: "Standards Guide",
      link: "#"
    },
    {
      title: "Cybersecurity Alignment with JCI Requirements",
      description: "How to align your cybersecurity practices with Joint Commission International standards.",
      type: "Compliance Course",
      link: "#"
    },
    {
      title: "JCI Compliance Training for Healthcare IT",
      description: "Specialized training program designed to meet JCI requirements for information security.",
      type: "Certification Program",
      link: "#"
    },
    {
      title: "JCI Audit Preparation Checklist",
      description: "Essential checklist to ensure your cybersecurity practices meet JCI audit requirements.",
      type: "Checklist",
      link: "#"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-teal-600 mr-3" />
                <span className="text-xl font-bold text-gray-900 whitespace-nowrap">IWLH CyberSecure Health</span> {/* Added whitespace-nowrap */}
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    target={item.external ? '_blank' : ''} // Add target="_blank" for external links
                    rel={item.external ? 'noopener noreferrer' : ''} // Add rel for external links
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors duration-200"
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-700 hover:text-teal-600 p-2"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    target={item.external ? '_blank' : ''} // Add target="_blank" for external links
                    rel={item.external ? 'noopener noreferrer' : ''} // Add rel for external links
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors duration-200"
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Render Home component for root path */}
          <Route path="/hub" element={<Hub />} /> {/* Render Hub component for /hub route */}
          <Route path="/register" element={<Registration />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/training" element={<TrainingMaterials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/knowledgebase" element={<Knowledgebase />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/jci" element={<JCICompliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} /> {/* Route for Resources component */}
          <Route path="/courses/phishing-awareness" element={<PhishingAwarenessTraining />} />
          <Route path="/courses/password-security" element={<PasswordSecurityBestPractices />} />
          <Route path="/courses/safe-browsing" element={<SafeBrowsingTechniques />} />
          <Route path="/courses/social-engineering" element={<SocialEngineeringDefense />} />
          <Route path="/courses/email-security" element={<EmailSecurityFundamentals />} />
          <Route path="/courses/data-protection" element={<DataProtectionProtocols />} />
          <Route path="/courses/mobile-device-security" element={<MobileDeviceSecurity />} />
          <Route path="/courses/incident-reporting" element={<IncidentReportingProcedures />} />
          <Route path="/knowledgebase/how-to-identify-suspicious-emails" element={<HowToIdentifySuspiciousEmails />} />
          <Route path="/knowledgebase/malware-protection-strategies" element={<MalwareProtectionStrategies />} />
          <Route path="/knowledgebase/ransomware-prevention-checklist" element={<RansomwarePreventionChecklist />} />
          <Route path="/knowledgebase/secure-file-sharing-protocols" element={<SecureFileSharingProtocols />} />
          <Route path="/knowledgebase/two-factor-authentication-setup-guide" element={<TwoFactorAuthenticationSetupGuide />} />
          <Route path="/knowledgebase/remote-work-security-guidelines" element={<RemoteWorkSecurityGuidelines />} />
          <Route path="/knowledgebase/incident-response-procedures" element={<IncidentResponseProceduresKB />} />
          <Route path="/knowledgebase/jci-cybersecurity-requirements" element={<JCICybersecurityRequirements />} />
        </Routes>
      </div>
    </>
  );
}

export default App;