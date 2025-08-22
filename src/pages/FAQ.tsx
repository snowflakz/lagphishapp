import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "What is phishing and why is it dangerous?",
    answer: (
      <>
        Phishing is a cyber attack where criminals impersonate legitimate organizations to steal sensitive information like passwords, credit card numbers, or personal data. In healthcare, this can lead to patient data breaches and compromise critical systems. For more info on phishing visit{' '}
        <a href="https://cutt.ly/nrOp6Vo6" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          https://cutt.ly/nrOp6Vo6
        </a>
        .
      </>
    )
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
  },
  {
    question: "What is ransomware and why should I care?",
    answer: (
      <>
        Ransomware is a type of malicious software that encrypts your data and demands a ransom to restore access. These attacks can cause significant data loss, disrupt operations, and result in financial and reputational damage for individuals and organizations. It's important to protect against ransomware by keeping your systems updated, backing up data regularly, and being cautious of suspicious emails and websites. For more info on Ransomware visit{' '}
        <a href="https://cutt.ly/8rOae6dE" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          https://cutt.ly/8rOae6dE
        </a>
        .
      </>
    )
  },
  {
    question: "What Are Social Media Scams?",
    answer: (
      <>
        Social media scams use deceptive tactics on platforms like Facebook, X, and LinkedIn to steal personal information, install malware, or extort victims. Common types include phishing scams, impersonation or identity theft, and fake giveaways or contests. Scammers may send fake messages, create fraudulent accounts, or lure users with offers that seem too good to be true. To protect yourself, always question unsolicited messages, enhance your privacy settings, and know the signs of scams such as urgent requests or suspicious links. For more info on Social Media Scams visit{' '}
        <a href="https://cutt.ly/LrOat4fy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          https://cutt.ly/LrOat4fy
        </a>
        .
      </>
    )
  },
  {
    question: "What is Multi-Factor Authentication (MFA)?",
    answer: (
      <>
        Multi-Factor Authentication (MFA) is a security process that requires users to provide two or more verification factors to gain access to an account or system. This typically combines something you know (like a password), something you have (like a phone or security token), and/or something you are (like a fingerprint or facial recognition). MFA greatly enhances security by making it much harder for attackers to gain unauthorized access, even if they have your password. For more info Multi-Factor Authentication (MFA) visit{' '}
        <a href="https://cutt.ly/ArOauRlJ" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
          https://cutt.ly/ArOauRlJ
        </a>
        .
      </>
    )
  }
];

export default function FAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full h-64 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="w-full h-full bg-slate-800 bg-opacity-75 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-gray-600">
            Get answers to common questions about phishing, cybersecurity, and our training program
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                {openFaqIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-teal-600 flex-shrink-0" />
                )}
              </button>
              {openFaqIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 