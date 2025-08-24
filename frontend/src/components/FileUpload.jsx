import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedFile(file);
  };

  const handleSubmit = () => {
    if (selectedFile) onFileUpload(selectedFile);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4x1 font-extrabold text-slate-800 mb-3">
          CLARITY BOT
        </h1>
        <p className="text-slate-600 mb-8" id="upload-instructions">
          Upload a document and let clarity-bot simplify it for you ✨
        </p>

        <label
          htmlFor="file-upload"
          className="relative block w-full h-40 border-3  border border-gray-300 
                     rounded-lg cursor-pointer hover:border-indigo-500 bg-gray-50 transition-colors border-dashed"
        >
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <UploadCloud className="h-10 w-10 mb-2 text-indigo-500" />
            <p className="font-medium">
              {selectedFile ? selectedFile.name : 'Click or Drag & Drop'}
            </p>
            <p className="text-sm">Drop a PDF or DOCX</p>
          </div>
          <input
            id="file-upload"
            type="file"
            className="opacity-0 absolute inset-0 w-full h-full"
            onChange={handleFileChange}
            accept=".pdf,.docx"
          />
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!selectedFile}
          className="w-full mt-6 py-3 px-6 text-lg font-semibold rounded-xl text-white 
                     bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 
                     disabled:cursor-not-allowed shadow-md transition"
        >
          Simplify Document
        </button>
      </div>
    </div>
  );
};


export default FileUpload;
