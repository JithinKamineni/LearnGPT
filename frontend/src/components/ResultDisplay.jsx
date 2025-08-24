import React from 'react';

const ResultDisplay = ({ text, children }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl bg-white p-12 rounded-2xl shadow-2xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Simplified Content</h3>
      <div className="p-6 bg-slate-50 rounded-lg text-gray-700 whitespace-pre-wrap max-h-[60vh] overflow-y-auto border border-gray-200 leading-relaxed shadow-inner">
        {text}
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
};

export default ResultDisplay;
