
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#fffaf0] border-2 border-[#8C5A3A] rounded-lg shadow-lg p-6 sm:p-8 transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
