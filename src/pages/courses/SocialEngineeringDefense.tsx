import React, { useState } from 'react';

const quiz = [
  {
    question: "A caller claims to be from IT and urgently requests your login credentials to fix a system issue. What should you do?",
    options: [
      "Give them your credentials to resolve the issue quickly",
      "Refuse and report the call to IT",
      "Ask for their name and department, then give your credentials",
      "Ignore the call"
    ],
    answer: 1
  },
  {
    question: "You receive a video call from your 'manager' asking for sensitive patient data, but their voice and mannerisms seem slightly off. What should you do?",
    options: [
      "Share the data since it's your manager",
      "Verify their identity through another channel before sharing any information",
      "Ignore the request",
      "Send the data to your team first"
    ],
    answer: 1
  }
];

const images = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
];

export default function SocialEngineeringDefense() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOption = (idx) => {
    setSelected(idx);
    setShowResult(true);
    if (idx === quiz[quizIndex].answer) setScore(score + 1);
  };
  const nextQuiz = () => {
    setQuizIndex(quizIndex + 1);
    setSelected(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">Social Engineering Defense</h1>
        <img src={images[0]} alt="Social Engineering" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Protect yourself and your organization from manipulation tactics used by cybercriminals. Learn to spot social engineering, including AI-powered deepfakes, and respond safely.
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Quiz: What Would You Do?</h2>
          <div className="bg-pink-50 p-4 rounded-lg mb-2">
            <p className="font-medium mb-2">{quiz[quizIndex].question}</p>
            {quiz[quizIndex].options.map((opt, idx) => (
              <button
                key={idx}
                className={`block w-full text-left px-4 py-2 mb-2 rounded border ${selected === idx ? (idx === quiz[quizIndex].answer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-200 bg-white'} hover:bg-pink-100`}
                onClick={() => handleOption(idx)}
                disabled={showResult}
              >
                {opt}
              </button>
            ))}
            {showResult && (
              <div className="mt-2 font-semibold text-green-700">
                {selected === quiz[quizIndex].answer ? 'Correct!' : 'Incorrect. The best answer is: ' + quiz[quizIndex].options[quiz[quizIndex].answer]}
              </div>
            )}
            {showResult && quizIndex < quiz.length - 1 && (
              <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded" onClick={nextQuiz}>Next Question</button>
            )}
            {showResult && quizIndex === quiz.length - 1 && (
              <div className="mt-4 text-lg font-bold text-pink-700">Quiz Complete! Your Score: {score} / {quiz.length}</div>
            )}
          </div>
        </div>
        <img src={images[1]} alt="AI Deepfake" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Tips to Defend Against Social Engineering</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Always verify the identity of anyone requesting sensitive information.</li>
            <li>Be cautious of urgent or emotional requests.</li>
            <li>Report suspicious calls, emails, or video requests to IT.</li>
            <li>Be aware of AI-powered deepfakes and voice cloning.</li>
            <li>Never share passwords or access codes over the phone or email.</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 