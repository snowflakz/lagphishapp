import React, { useState } from 'react';

const scenarios = [
  {
    question: 'You receive an email from "IT Support" asking you to reset your password using a link. The email address is it-support@securemail.com. What should you do?',
    options: [
      'Click the link and reset your password immediately',
      'Ignore the email',
      'Verify the sender and contact IT through official channels before clicking any links',
      'Forward the email to your colleagues'
    ],
    answer: 2
  },
  {
    question: 'A pop-up appears on your computer saying your system is infected and you must call a number to fix it. What is the best action?',
    options: [
      'Call the number right away',
      'Restart your computer',
      'Close the pop-up and report it to IT',
      'Download the recommended software from the pop-up'
    ],
    answer: 2
  }
];

const images = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
];

export default function PhishingAwarenessTraining() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOption = (idx) => {
    setSelected(idx);
    setShowResult(true);
    if (idx === scenarios[quizIndex].answer) setScore(score + 1);
  };
  const nextScenario = () => {
    setQuizIndex(quizIndex + 1);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Phishing Awareness Training</h1>
        <img src={images[0]} alt="Phishing Awareness" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Phishing is a cybercrime where attackers impersonate legitimate organizations to steal sensitive information. In healthcare, this can lead to data breaches and patient risk. Learn to spot and avoid phishing attempts with real-world examples and interactive scenarios below.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Watch: What is Phishing?</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/KUSlycvftxs" title="Phishing Awareness" frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/3SbOvB5L1G0" title="Phishing Examples" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Interactive Scenario</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-2">
            <p className="font-medium mb-2">{scenarios[quizIndex].question}</p>
            {scenarios[quizIndex].options.map((opt, idx) => (
              <button
                key={idx}
                className={`block w-full text-left px-4 py-2 mb-2 rounded border ${selected === idx ? (idx === scenarios[quizIndex].answer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-200 bg-white'} hover:bg-blue-100`}
                onClick={() => handleOption(idx)}
                disabled={showResult}
              >
                {opt}
              </button>
            ))}
            {showResult && (
              <div className="mt-2 font-semibold text-green-700">
                {selected === scenarios[quizIndex].answer ? 'Correct!' : 'Incorrect. The best action is: ' + scenarios[quizIndex].options[scenarios[quizIndex].answer]}
              </div>
            )}
            {showResult && quizIndex < scenarios.length - 1 && (
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={nextScenario}>Next Scenario</button>
            )}
            {showResult && quizIndex === scenarios.length - 1 && (
              <div className="mt-4 text-lg font-bold text-blue-700">Quiz Complete! Your Score: {score} / {scenarios.length}</div>
            )}
          </div>
        </div>
        <img src={images[1]} alt="Phishing Example" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tips to Avoid Phishing</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Always verify the sender's email address.</li>
            <li>Never click suspicious links or download unexpected attachments.</li>
            <li>Report suspicious emails to your IT department.</li>
            <li>Look for urgent or threatening language in emails.</li>
            <li>Check for spelling and grammar mistakes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 