import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { CVPDF } from './CVPDF';

export function DownloadButton({ cvData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Generate PDF
      const blob = await pdf(<CVPDF data={cvData} />).toBlob();
      
      // Download using file-saver
      saveAs(blob, `CV-${cvData.fullName || 'MyCV'}.pdf`);
      
    } catch (err) {
      setError('Failed to generate PDF. Please try again.');
      console.error('PDF Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        disabled={isLoading}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="inline-block animate-spin mr-2">⏳</span>
            Generating PDF...
          </>
        ) : (
          '📥 Download CV as PDF'
        )}
      </button>

      {error && (
        <p className="text-red-500 mt-2 text-sm">{error}</p>
      )}
    </div>
  );
}