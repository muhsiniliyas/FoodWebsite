// src/components/FoodDetailModal.jsx - Enhanced with theme transitions and mobile fixes
import React, { useState } from 'react';
import { X, Star, Clock, Plus, Minus, ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const FoodDetailModal = ({ food, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !food) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(food);
    }
    onClose();
  };

  const adjustQuantity = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const totalPrice = (food.price * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto theme-transition">
        
        {/* Header */}
        <div className="relative">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {food.isPopular && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                🔥 Popular Choice
              </span>
            )}
            {food.isVegetarian && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                <Leaf className="w-4 h-4" />
                <span>Vegetarian</span>
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Title and Price Section - Mobile Responsive */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-2 sm:space-y-0">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 theme-transition">
                {food.name}
              </h2>
              
              {/* Info Row - Responsive */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 theme-transition">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{food.rating} rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{food.prepTime}</span>
                </div>
                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs theme-transition">
                  {food.calories} cal
                </span>
              </div>
            </div>
            
            {/* Price - Responsive positioning */}
            <div className="flex justify-end sm:ml-4">
              <span className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400">
                ₹{food.price}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed theme-transition">
            {food.description}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 theme-transition">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {food.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm theme-transition"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart - Mobile Optimized */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 theme-transition">
            
            {/* Quantity Section */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-lg font-medium text-gray-900 dark:text-white theme-transition">
                  Quantity:
                </span>
                
                {/* Quantity Controls */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => adjustQuantity(-1)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors duration-200 theme-transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                  
                  <div className="bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg px-4 py-2 theme-transition">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white min-w-[2rem] text-center">
                      {quantity}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => adjustQuantity(1)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors duration-200 theme-transition focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button - Mobile Optimized */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary-500 hover:bg-primary-600 dark:text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <ShoppingCart className="w-5 h-5 flex-shrink-0" />
                
                {/* Responsive Button Text */}
                <span className="hidden xs:inline">
                  Add to Cart - ₹{totalPrice}
                </span>
                <span className="inline xs:hidden">
                  Add ₹{totalPrice}
                </span>
              </button>

              {/* Total Price Display - Mobile Alternative */}
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                  Total: <span className="font-semibold text-gray-900 dark:text-white">₹{totalPrice}</span>
                  {quantity > 1 && (
                    <span className="ml-2 text-xs">
                      (₹{food.price} × {quantity})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailModal;
