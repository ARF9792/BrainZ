'use client';

import React from 'react';

export const SignInButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/home';
  };

  return (
    <button 
      onClick={handleClick}
      className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
    >
      Sign In
    </button>
  );
};