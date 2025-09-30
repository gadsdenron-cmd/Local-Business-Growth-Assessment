
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {currentYear} Growth Pathway. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
