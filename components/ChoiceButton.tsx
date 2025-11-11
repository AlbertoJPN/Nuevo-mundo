
import React from 'react';
import { type Option } from '../types';

interface ChoiceButtonProps {
  option: Option;
  onClick: () => void;
  isSelected: boolean;
  isAnswered: boolean;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ option, onClick, isSelected, isAnswered }) => {
  const getButtonClass = () => {
    if (isAnswered && option.isCorrect) {
      return 'bg-green-600 text-white border-green-700 scale-105';
    }
    if (isSelected && !option.isCorrect) {
      return 'bg-red-600 text-white border-red-700';
    }
    return 'bg-[#E0C9A6] hover:bg-[#D1B894] border-[#8C5A3A]';
  };

  return (
    <button
      onClick={onClick}
      disabled={isAnswered}
      className={`w-full flex items-start text-left p-4 my-2 border-2 rounded-lg shadow-sm transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed ${getButtonClass()}`}
    >
      <span className="font-display text-xl mr-4 text-[#4A2E2C] opacity-80">{option.letter}.</span>
      <span className="flex-1">{option.text}</span>
    </button>
  );
};

export default ChoiceButton;
