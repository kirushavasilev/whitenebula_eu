import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      starsContainer.innerHTML = '';
      const numberOfStars = 150;
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
          position: absolute;
          width: ${Math.random() * 2 + 1}px;
          height: ${Math.random() * 2 + 1}px;
          background: white;
          border-radius: 50%;
          top: ${Math.random() * 100}%;
          left: ${Math.random() * 100}%;
          animation: twinkle ${Math.random() * 3 + 2}s infinite;
          opacity: ${Math.random() * 0.8 + 0.2};
        `;
        starsContainer.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <div ref={starsRef} className="absolute inset-0 z-0"></div>
      
      <div className="relative z-10 flex flex-col h-screen">
        
        <div className="flex-shrink-0 pt-24 md:pt-32 pb-4 md:pb-8">
          <div className="text-center px-4 md:px-6">
            <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide animate-fade-in-up">
              we are—international
            </p>
          </div>
        </div>

        <div className="flex-grow flex items-center justify-center px-4 md:px-6">
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-playfair font-bold leading-tight md:leading-none animate-fade-in-scale">
              <span className="text-white">The White </span>
              <span className="text-nebula-green">Nebula</span>
              <br />
              <span className="text-white"></span>
            </h1>
          </div>
        </div>

        <div className="flex-shrink-0 pb-20 md:pb-32 relative z-20">
          <div className="text-center px-4 md:px-6 max-w-5xl mx-auto">

           
          </div>
        </div>
      </div>

      

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .star {
          animation: twinkle 3s infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 1.2s ease-out 0.2s both;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero; 