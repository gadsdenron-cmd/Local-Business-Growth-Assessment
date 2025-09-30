import React from 'react';

interface AssessmentButtonProps {
  onClick?: () => void;
}

const AssessmentButton: React.FC<AssessmentButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg md:text-xl py-4 px-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
      aria-label="Take the Free Growth Pathway Assessment Now"
    >
      👉 Take the Free Growth Pathway Assessment Now
    </button>
  );
};

export default AssessmentButton;
