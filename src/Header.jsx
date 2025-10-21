import React from 'react';

const Header = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-mila-bg">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Back Button */}
        <button className="w-10 h-10 rounded-full shadow-neumorph flex items-center justify-center button-press hover:shadow-neumorph-sm transition-all">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Title */}
        <div className="flex-1 mx-4 text-center">
          <h1 className="text-base font-semibold text-gray-800">
            Lesson 03: Ordering Food in Tokyo
          </h1>
        </div>

        {/* Menu Button */}
        <button className="w-10 h-10 rounded-full shadow-neumorph flex items-center justify-center button-press hover:shadow-neumorph-sm transition-all">
          <svg
            className="w-5 h-5 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-gray-200 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-mila-purple to-mila-purple-light transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
