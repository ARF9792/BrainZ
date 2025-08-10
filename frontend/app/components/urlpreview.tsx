// components/URLPreview.js
import { useState } from 'react';

export default function URLPreview({ url, title }:{
    url:string,
    title:string,
}) {
  const [faviconError, setFaviconError] = useState(false);

  const getDomain = (url:string) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch {
      return 'Link';
    }
  };

  const getFaviconUrl = (url:string) => {
    try {
      const domain = new URL(url).origin;
      return `${domain}/favicon.ico`;
    } catch {
      return null;
    }
  };

  const domain = getDomain(url);
  const faviconUrl = getFaviconUrl(url);

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 hover:from-blue-100 hover:to-indigo-100 hover:border-blue-200 transition-all duration-200 group"
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          {/* Favicon or fallback */}
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-200 flex-shrink-0">
            {faviconUrl && !faviconError ? (
              <img 
                src={faviconUrl} 
                alt={domain}
                className="w-5 h-5 rounded"
                onError={() => setFaviconError(true)}
              />
            ) : (
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-xs text-blue-600 font-medium mb-1 uppercase tracking-wide">{domain}</div>
            <div className="text-sm font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors duration-200">
              {title || 'View Page'}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 ml-2">
          <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  );
}
