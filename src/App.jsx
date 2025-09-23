// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import LocationSection from './components/LocationSection';
import Cart from './components/Cart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [authModal, setAuthModal] = useState(null);

  const handleAuthClick = (type) => {
    setAuthModal(type);
  };

  const closeAuthModal = () => {
    setAuthModal(null);
  };

  const switchToSignUp = () => {
    setAuthModal('signup');
  };

  const switchToSignIn = () => {
    setAuthModal('signin');
  };

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 theme-transition font-outfit">
          <Header onAuthClick={handleAuthClick} />
          <Hero />
          <Menu />
          <About />
          <LocationSection />
          
          {/* Floating Cart Button */}
          <div className="fixed bottom-6 right-6 z-40">
            <Cart />
          </div>
          
          {authModal === 'signin' && (
            <SignIn 
              onClose={closeAuthModal} 
              onSwitchToSignUp={switchToSignUp}
            />
          )}
          
          {authModal === 'signup' && (
            <SignUp 
              onClose={closeAuthModal} 
              onSwitchToSignIn={switchToSignIn}
            />
          )}
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
