
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ValueProposition: React.FC = () => {
  const benefits = [
    { title: "Instant clarity on your #1 growth opportunity", description: "Do you need to streamline estimates so you win more jobs faster?" },
    { title: "A personalized result you can act on today", description: "Do you need to generate more leads so your schedule fills up?" },
    { title: "No fluff, no jargon — just a clear answer", description: "Or is it time to do both and scale smoothly?" },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What You Get:</h2>
          <ul className="space-y-8 text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-green">{benefit.title}</h3>
                  <p className="mt-2 text-lg text-gray-600">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
