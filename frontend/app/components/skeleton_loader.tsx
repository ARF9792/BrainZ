import React from 'react';

function Skeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="w-full max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Loading...
            </span>
          </div>
        </div>

        {/* Skeleton Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <div className="h-20 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 rounded-lg animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-4/5 animate-pulse"></div>
                  <div className="h-3 bg-gradient-to-r from-slate-200 to-slate-300 rounded w-3/5 animate-pulse"></div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-200">
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
                </div>
                <div className="h-3 w-16 bg-gradient-to-r from-slate-200 to-slate-300 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 flex justify-center">
          <div className="w-64 h-2 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default Skeleton;