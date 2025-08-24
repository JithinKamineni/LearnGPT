// src/App.jsx
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResultDisplay from './components/ResultDisplay'; // <-- CORRECTED PATH
import LoadingSpinner from './components/LoadingSpinner';
import Chatbot from './components/Chatbot';
import { uploadAndSimplify, simplifyTextFurther, downloadPdf } from './services/api';

function App() {
  const [simplifiedText, setSimplifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleFileUpload = async (file) => { setIsLoading(true); setError(null); setSimplifiedText(''); try { const result = await uploadAndSimplify(file); setSimplifiedText(result.simplified_text); } catch (err) { setError('Failed to simplify the document. Please check the backend server and try again.'); } finally { setIsLoading(false); }};
  const handleSimplifyMore = async () => { setIsLoading(true); setError(null); try { const result = await simplifyTextFurther(simplifiedText); setSimplifiedText(result.simplified_text); } catch (err) { setError('Failed to simplify further. Please try again.'); } finally { setIsLoading(false); }};

  const handleDownloadPdf = async () => {
    setError(null);
    setIsDownloading(true);
    try {
      await downloadPdf(simplifiedText);
    } catch (err) {
      setError('Failed to download the PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl flex justify-center">

        {!isLoading && !simplifiedText && !error && <FileUpload onFileUpload={handleFileUpload} />}

        {isLoading && <LoadingSpinner />}

        {error && <div className="text-red-600 bg-red-100 p-4 rounded-lg text-center border border-red-200">{error}</div>}

        {simplifiedText && !isLoading && (
          <ResultDisplay text={simplifiedText}>
            <Chatbot 
              onSimplifyMore={handleSimplifyMore}
              onDownloadPdf={handleDownloadPdf}
              isDownloading={isDownloading} 
            />
          </ResultDisplay>
        )}

      </div>
    </div>
  );
}

export default App;