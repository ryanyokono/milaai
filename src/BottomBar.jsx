import React, { useState } from 'react';

const BottomBar = ({ onNext, hasMore }) => {
  const [micActive, setMicActive] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-mila-bg pb-6 pt-4 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-mila-bg rounded-full shadow-neumorph px-4 py-3 flex items-center gap-3">
          {/* Mic Button */}
          <button
            onClick={() => setMicActive(!micActive)}
            className={`w-12 h-12 rounded-full flex items-center justify-center button-press transition-all ${
              micActive
                ? 'shadow-neumorph-inset bg-gradient-to-br from-mila-purple to-mila-purple-light'
                : 'shadow-neumorph'
            }`}
          >
            <svg
              className={`w-6 h-6 ${micActive ? 'text-white' : 'text-gray-600'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>

          {/* Text Input Placeholder */}
          <div className="flex-1 px-4 py-2 rounded-full shadow-neumorph-inset">
            <input
              type="text"
              placeholder="Type your response..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
              disabled
            />
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={!hasMore}
            className={`w-12 h-12 rounded-full flex items-center justify-center button-press transition-all ${
              hasMore
                ? 'shadow-neumorph bg-gradient-to-br from-mila-purple to-mila-purple-light hover:shadow-neumorph-glow'
                : 'shadow-neumorph-inset opacity-50 cursor-not-allowed'
            }`}
          >
            <svg
              className={`w-6 h-6 ${hasMore ? 'text-white' : 'text-gray-400'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Hint Text */}
        {hasMore && (
          <p className="text-center text-xs text-gray-400 mt-3">
            Click anywhere or press Next to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default BottomBar;
