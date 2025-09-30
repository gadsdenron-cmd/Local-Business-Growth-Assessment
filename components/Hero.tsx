import React from 'react';
import AssessmentButton from './AssessmentButton';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-24 md:py-40" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/treeservice/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
          Find the <span className="text-green-300">Fastest Way</span> to Grow Your Tree Service Business
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Are you losing money because estimates take too long — or because customers aren’t calling?
        </p>
        <AssessmentButton onClick={onStartQuiz} />
      </div>
    </section>
  );
};

export default Hero;
