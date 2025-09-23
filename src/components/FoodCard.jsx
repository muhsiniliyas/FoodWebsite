// src/components/FoodCard.jsx
import React from 'react';
import { Star, Clock, Plus, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const FoodCard = ({ food, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(food);
  };

  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => onViewDetails(food)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {food.isPopular && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              🔥 Popular
            </span>
          )}
          {food.isVegetarian && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Leaf className="w-3 h-3" />
              <span>Veg</span>
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
            {food.name}
          </h3>
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            ₹{food.price}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {food.description}
        </p>

        {/* Info Row */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{food.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{food.prepTime}</span>
            </div>
          </div>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {food.calories} cal
          </span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
