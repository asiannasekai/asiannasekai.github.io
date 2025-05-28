import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-7 h-7 text-indigo-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              agentify
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-indigo-600 transition-colors">
              Testimonials
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#download" className="px-5 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-6 transition-all duration-300 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#download" 
              className="px-5 py-2 text-center text-sm font-medium rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;