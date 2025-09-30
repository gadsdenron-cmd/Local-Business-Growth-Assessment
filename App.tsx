import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import ValueProposition from './components/ValueProposition';
import Footer from './components/Footer';
import AssessmentButton from './components/AssessmentButton';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'quiz' | 'results'>('landing');
  const [resultType, setResultType] = useState<'A' | 'B' | 'C' | null>(null);

  const handleStartQuiz = () => {
    window.scrollTo(0, 0);
    setPage('quiz');
  };

  const handleQuizComplete = (result: 'A' | 'B' | 'C') => {
    setResultType(result);
    window.scrollTo(0, 0);
    setPage('results');
  };

  const renderPage = () => {
    switch (page) {
      case 'quiz':
        return <Quiz onComplete={handleQuizComplete} />;
      case 'results':
        return <Results result={resultType} />;
      case 'landing':
      default:
        return (
          <>
            <Hero onStartQuiz={handleStartQuiz} />
            <ProblemStatement />
            <ValueProposition />
            <section className="text-center py-16 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4 text-brand-green">Ready to Find Your Growth Pathway?</h2>
                <p className="max-w-3xl mx-auto text-lg mb-8 text-gray-600">
                  Stop guessing and start growing. Get your personalized, actionable result in under 3 minutes.
                </p>
                <AssessmentButton onClick={handleStartQuiz} />
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-light text-gray-800">
      <Header />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
