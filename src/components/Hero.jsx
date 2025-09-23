// src/components/Hero.jsx
import React from 'react';
import { ArrowRight, Star, Clock, Truck } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const Hero = () => {
  const features = [
    { icon: Clock, text: "30min delivery" },
    { icon: Star, text: "4.8 rating" },
    { icon: Truck, text: "Free shipping" }
  ];

  const handleViewMenu = () => {
    // Add loading state for better UX
    const menuButton = document.getElementById('view-menu-btn');
    if (menuButton) {
      menuButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        menuButton.style.transform = 'scale(1)';
      }, 150);
    }
    
    // Smooth scroll to menu section with header offset
    scrollToSection('menu', 80);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-bounce-subtle"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-bounce-subtle delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Delicious Food
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Delivered Fast
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
            Order your favorite meals from local restaurants and get them delivered in 30 minutes or less
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-slide-up delay-200">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-white">
                <feature.icon className="w-5 h-5 text-yellow-400" />
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Single View Menu Button - Centered */}
          <div className="flex justify-center animate-slide-up delay-300">
            <button
              id="view-menu-btn"
              onClick={handleViewMenu}
              className="
                group relative overflow-hidden
                bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-xl text-lg font-semibold 
                transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
                flex items-center space-x-3
                focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
              "
            >
              <span>View Our Menu</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 animate-slide-up delay-500">
            <p className="text-gray-300 text-sm mb-4">Trusted by thousands of customers</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-xs text-gray-300">Orders Delivered</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-300">Restaurant Partners</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs text-gray-300">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
