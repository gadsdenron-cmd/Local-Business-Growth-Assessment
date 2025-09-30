
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center md:justify-start">
          <span className="text-3xl mr-3">🌳</span>
          <span className="text-2xl font-bold text-brand-green">
            Growth Pathway
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
