
import React from 'react';

const ClockIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-brown mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PhoneIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-brown mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);


const ProblemStatement: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Every tree service pro faces two big roadblocks:</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="flex flex-col items-center p-8 bg-brand-light rounded-lg shadow-md">
              <ClockIcon />
              <h3 className="text-2xl font-bold text-brand-brown">1. Wasted Time</h3>
              <p className="text-gray-600 mt-2 text-lg">Too much time spent on estimates that eat into your evenings and family time.</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-brand-light rounded-lg shadow-md">
              <PhoneIcon />
              <h3 className="text-2xl font-bold text-brand-brown">2. Not Enough Calls</h3>
              <p className="text-gray-600 mt-2 text-lg">Too few calls from new customers — even though your crew is ready to work.</p>
            </div>
          </div>
          
          <p className="mt-12 text-xl text-gray-700 leading-relaxed">
            But here’s the truth: you don’t need to guess where to focus. In less than 3 minutes, this free assessment will show you your <span className="font-bold text-brand-green">Growth Pathway</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
