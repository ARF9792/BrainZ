'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GetStartedButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/cards';
  };

  return (
    <button 
      onClick={handleClick}
      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center"
    >
      Get Started
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
    </button>
  );
};