import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/30' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-start py-4">
            <button 
              onClick={scrollToTop}
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
              className="group flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  className={`transition-all duration-300 ${logoHover ? 'rotate-12 scale-110' : ''}`}
                >
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="18" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    className="text-gray-600"
                    opacity="0.4"
                  />
                  
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="8" 
                    fill="none" 
                    stroke="#00ff9f" 
                    strokeWidth="2"
                    className="drop-shadow-lg"
                  />
                  
                  <circle 
                    cx="20" 
                    cy="20" 
                    r="3" 
                    fill="#00ff9f"
                    className="drop-shadow-lg"
                  />
                  
                  <circle cx="12" cy="12" r="1" fill="white" opacity="0.8" />
                  <circle cx="28" cy="12" r="1" fill="white" opacity="0.6" />
                  <circle cx="32" cy="28" r="1" fill="white" opacity="0.7" />
                  <circle cx="8" cy="28" r="1" fill="white" opacity="0.5" />
                  
                  <line x1="12" y1="12" x2="20" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3" />
                  <line x1="28" y1="12" x2="20" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3" />
                </svg>
                
                <div className={`absolute inset-0 bg-nebula-green rounded-full transition-opacity duration-300 blur-md ${logoHover ? 'opacity-20' : 'opacity-0'}`}></div>
              </div>

              <div className="block">
                <div className="flex items-baseline space-x-1">
                  <h1 className="futuristic-logo text-lg">
                    <span className="text-white">WHITE</span>
                    <span className="text-nebula-green ml-1">NEBULA</span>
                  </h1>
                </div>
                <p className="text-[9px] text-gray-500 font-mono tracking-[0.25em] mt-1 uppercase futuristic-subtext">
                  Industries
                </p>
              </div>
            </button>
          </div>
        </div>
      </header>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        
        .futuristic-logo {
          font-family: 'Orbitron', 'Courier New', monospace;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-feature-settings: 'kern' 1, 'liga' 1;
          text-shadow: 0 0 10px rgba(157, 252, 3, 0.3);
          transition: all 0.3s ease;
        }
        
        .futuristic-logo:hover {
          text-shadow: 0 0 15px rgba(157, 252, 3, 0.5), 0 0 25px rgba(157, 252, 3, 0.3);
          transform: scale(1.02);
        }
        
        .futuristic-subtext {
          font-family: 'Orbitron', 'Courier New', monospace;
          font-weight: 400;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Header; 