import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-indigo-300 rounded-full animate-ping"></div>
        <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <h2 className="text-xl font-bold text-indigo-700 animate-pulse">Simplifying your content...</h2>
    </div>
  );
};

export default LoadingSpinner;
