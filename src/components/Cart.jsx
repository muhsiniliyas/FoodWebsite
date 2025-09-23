// src/components/Cart.jsx
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic
    alert(`Proceeding to checkout with total: ₹${getCartTotal().toFixed(2)}`);
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {getCartCount()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl transform transition-transform duration-300 flex flex-col">
            
            {/* Close Button at Top - Prominent Position */}
            <div className="flex justify-end p-4 border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setIsOpen(false)}
                className="group p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
              </button>
            </div>

            {/* Header with Cart Info */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Your Cart
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} added
                  </p>
                </div>
                <div className="bg-primary-100 dark:bg-primary-900 px-3 py-1 rounded-full">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    ₹{getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Add some delicious items to get started
                  </p>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary-500 hover:bg-primary-600 dark:text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {item.name}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-bold">
                          ₹{item.totalPrice.toFixed(2)}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium text-gray-900 dark:text-white w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Checkout Section */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 bg-gray-50 dark:bg-gray-800">
                {/* Order Summary */}
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Subtotal ({getCartCount()} items)</span>
                    <span>₹{getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span>Delivery Fee</span>
                    <span className="text-green-600 dark:text-green-400">Free</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        ₹{getCartTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-[1.02]"
                  >
                    Proceed to Checkout
                  </button>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Add More
                    </button>
                    <button
                      onClick={clearCart}
                      className="flex-1 bg-red-100 dark:bg-red-900/30 hover:bg-red-200 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400 py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
