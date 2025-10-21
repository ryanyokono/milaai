import React, { useState } from 'react';

const ChatBubble = ({ type, jp, en, text, buttons, isTyping }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Mila bubble (left-aligned with avatar)
  if (type === 'mila') {
    return (
      <div className="flex items-start gap-3 mb-6 animate-fade-in">
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full shadow-neumorph flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-mila-purple to-mila-purple-light ${isTyping ? 'animate-bobbing' : ''}`}>
          <span className="text-white text-lg font-bold">M</span>
        </div>

        {/* Bubble */}
        <div className="flex-1 max-w-[75%]">
          <div className="bg-mila-bg rounded-3xl shadow-neumorph px-5 py-4">
            <p className="text-gray-800 font-semibold text-base mb-1">{jp}</p>
            <p className="text-gray-500 text-sm">{en}</p>
          </div>

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 ml-1">
              {buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium shadow-neumorph-sm button-press transition-all ${
                    hoveredButton === idx
                      ? 'text-mila-purple'
                      : 'text-gray-600'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // User bubble (right-aligned, inset)
  if (type === 'user') {
    return (
      <div className="flex justify-end mb-6 animate-fade-in">
        <div className="max-w-[75%]">
          <div className="bg-mila-bg rounded-3xl shadow-neumorph-inset px-5 py-4">
            <p className="text-gray-800 font-semibold text-base mb-1">{jp}</p>
            <p className="text-gray-500 text-sm">{en}</p>
          </div>

          {/* Buttons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 mr-1 justify-end">
              {buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium shadow-neumorph-sm button-press transition-all ${
                    hoveredButton === idx
                      ? 'text-mila-purple'
                      : 'text-gray-600'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Tip bubble (centered, glowing card)
  if (type === 'tip') {
    return (
      <div className="flex justify-center mb-6 animate-fade-in">
        <div className="max-w-md">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-neumorph-glow px-5 py-4 border border-purple-100">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0 mt-0.5">
                <svg
                  className="w-5 h-5 text-mila-purple"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ChatBubble;
