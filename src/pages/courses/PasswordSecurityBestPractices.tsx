import React, { useState } from 'react';

const tips = [
  'Use at least 12 characters with a mix of letters, numbers, and symbols.',
  'Avoid using personal information (names, birthdays, etc.).',
  'Never reuse passwords across different accounts.',
  'Use a password manager to generate and store strong passwords.',
  'Enable two-factor authentication (2FA) whenever possible.'
];

const quiz = [
  {
    question: 'Which of the following is the strongest password?',
    options: [
      'Password123',
      'QwErTy2024',
      'M3d!cal$taff#2024',
      'JohnSmith2020'
    ],
    answer: 2
  },
  {
    question: 'What should you do if you suspect your password has been compromised?',
    options: [
      'Ignore it',
      'Change your password immediately and notify IT',
      'Tell your friends',
      'Keep using the same password'
    ],
    answer: 1
  }
];

const images = [
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80'
];

export default function PasswordSecurityBestPractices() {
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50 py-8 px-2">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4">Password Security Best Practices</h1>
        <img src={images[0]} alt="Password Security" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <p className="mb-4 text-lg text-gray-700">
          Master the art of creating strong passwords and using password managers effectively. Protecting patient data and healthcare systems starts with you!
        </p>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Top Tips for Strong Passwords</h2>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
          <div className="bg-green-50 p-4 rounded-lg mb-2">
            <strong>Password Manager Advice:</strong> Use a trusted password manager to generate and store unique passwords for every account. Never write passwords on sticky notes or share them with others.
          </div>
        </div>
        <img src={images[1]} alt="Password Manager" className="rounded-lg mb-6 w-full h-56 object-cover" />
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Mini-Quiz</h2>
          <div className="bg-yellow-50 p-4 rounded-lg mb-2">
            <p className="font-medium mb-2">{quiz[quizIndex].question}</p>
            {quiz[quizIndex].options.map((opt, idx) => (
              <button
                key={idx}
                className={`block w-full text-left px-4 py-2 mb-2 rounded border ${selected === idx ? (idx === quiz[quizIndex].answer ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') : 'border-gray-200 bg-white'} hover:bg-yellow-100`}
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
              <button className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded" onClick={nextQuiz}>Next Question</button>
            )}
            {showResult && quizIndex === quiz.length - 1 && (
              <div className="mt-4 text-lg font-bold text-yellow-700">Quiz Complete! Your Score: {score} / {quiz.length}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 