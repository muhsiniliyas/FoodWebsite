// src/components/ThemeToggle.jsx - Complete version
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className={`
          relative w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
            : 'bg-gradient-to-r from-orange-400 to-yellow-400'
          }
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500
          transform hover:scale-105 active:scale-95
        `}
      >
        {/* Moving toggle indicator */}
        <div
          className={`
            absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg
            transform transition-all duration-300 ease-in-out
            flex items-center justify-center
            ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}
            ${isAnimating ? 'scale-90' : 'scale-100'}
          `}
        >
          {/* Icon that changes based on theme */}
          {theme === 'dark' ? (
            <Moon className="w-4 h-4 text-indigo-600" />
          ) : (
            <Sun className="w-4 h-4 text-orange-500" />
          )}
        </div>
        
        {/* Background track labels (optional) */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <div className={`
            text-xs font-medium transition-opacity duration-200
            ${theme === 'light' ? 'opacity-0' : 'opacity-70 text-white'}
          `}>
            🌙
          </div>
          <div className={`
            text-xs font-medium transition-opacity duration-200
            ${theme === 'dark' ? 'opacity-0' : 'opacity-70 text-white'}
          `}>
            ☀️
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
