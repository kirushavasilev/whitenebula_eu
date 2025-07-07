import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="White Nebula" className="w-8 h-8" />
            <span className="text-xl font-playfair font-bold">White Nebula</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="hover:text-nebula-green transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-nebula-green transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="hover:text-nebula-green transition-colors"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className="hover:text-nebula-green transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-nebula-green transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <span className="text-sm">☰</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 