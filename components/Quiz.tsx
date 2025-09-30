import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';

interface QuizProps {
  onComplete: (result: 'A' | 'B' | 'C') => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C'>>({});

  const handleAnswerSelect = (answerType: 'A' | 'B' | 'C') => {
    const newAnswers = { ...answers, [currentQuestionIndex]: answerType };
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, 'A' | 'B' | 'C'>) => {
    const counts = { A: 0, B: 0, C: 0 };
    Object.values(finalAnswers).forEach(answer => {
      counts[answer]++;
    });
    
    if (counts.A > counts.B && counts.A > counts.C) {
      onComplete('A');
    } else if (counts.B > counts.A && counts.B > counts.C) {
      onComplete('B');
    } else {
      onComplete('C'); // This covers C majority, A/B ties, and other mixes.
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-brand-light p-8 md:p-12 rounded-xl shadow-lg">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2 text-brand-brown font-semibold">
                <p>Question {currentQuestionIndex + 1} of {quizQuestions.length}</p>
                <p>{Math.round(progress)}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-brand-green h-4 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Question */}
          {/* FIX: The `aria-level` attribute expects a number, not a string. Changed from "2" to {2} to fix the TypeScript error. */}
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800" role="heading" aria-level={2}>
            {currentQuestion.question}
          </h2>

          {/* Answers */}
          <div className="space-y-4">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(answer.type)}
                className="w-full text-left bg-white hover:bg-green-100 border-2 border-gray-200 hover:border-brand-green p-5 rounded-lg text-lg text-gray-700 font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green"
              >
                <span className="mr-4 font-bold text-brand-green">{String.fromCharCode(65 + index)}.</span>
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;