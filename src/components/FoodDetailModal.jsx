// src/components/FoodDetailModal.jsx
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

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {food.isPopular && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🔥 Popular Choice
              </span>
            )}
            {food.isVegetarian && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Leaf className="w-4 h-4" />
                <span>Vegetarian</span>
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {food.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{food.rating} rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{food.prepTime}</span>
                </div>
                <span>{food.calories} calories</span>
              </div>
            </div>
            <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              ₹{food.price}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            {food.description}
          </p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Ingredients
            </h3>
            <div className="flex flex-wrap gap-2">
              {food.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                Quantity:
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => adjustQuantity(-1)}
                  className="w-8 h-8 rounded-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  <Minus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
                <span className="w-12 text-center text-lg font-semibold text-gray-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => adjustQuantity(1)}
                  className="w-8 h-8 rounded-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-primary-500 hover:bg-primary-600 dark:text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 transition-colors duration-200 transform hover:scale-105"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add ₹{(food.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailModal;
