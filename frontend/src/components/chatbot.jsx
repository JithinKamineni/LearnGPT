import React, { useState } from 'react';
import { MessageCircle, Wand2, Download, X } from 'lucide-react';

const Chatbot = ({ onSimplifyMore, onDownloadPdf }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    await onDownloadPdf();
    setIsDownloading(false);
  };

  return (
    <div className="relative flex justify-center">
      {isOpen && (
        <div className="absolute bottom-24 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 w-80 p-6 animate-fade-in-up">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-gray-900 text-lg">✨ Quick Actions</h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X className="h-3 w-3" />
            </button>
          </div>

          <button
            onClick={onSimplifyMore}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <Wand2 className="h-5 w-5" />
            <span>Simplify Further</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full flex items-center gap-3 p-3 mt-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            <Download className="h-5 w-5" />
            <span>{isDownloading ? '⏳ Generating...' : 'Download as PDF'}</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-300"
        aria-label="Toggle chat menu"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
};

export default Chatbot;
