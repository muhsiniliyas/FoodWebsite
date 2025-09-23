// src/components/MenuCategories.jsx
import React from 'react';
import { foodCategories } from '../data/foodData';

const MenuCategories = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {foodCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300
            ${activeCategory === category.id
              ? 'bg-primary-500 text-white shadow-lg transform scale-105'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
            }
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          `}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default MenuCategories;
